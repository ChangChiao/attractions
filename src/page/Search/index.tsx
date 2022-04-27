import React, { useEffect, useRef, useState, useCallback } from "react";
import styled from "@emotion/styled";
import DatePicker from "react-datepicker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { MENU_LIST, MenuItem } from "../../global/constant";
import { Search, useDispatch, useSelector } from "../../store";
import { getActivity, getSpot, getRestaurant } from "../../utils/api";
import CitySelect from "../../components/CitySelect";
import ListCard from "../../components/ListCard";
import Crumb from "../../components/Crumb";
import Category from "../../components/Category";
import Loading from "../../components/Loading";
import { ActItem, SpotItem, RestItem } from "../../types";
import "react-datepicker/dist/react-datepicker.css";
import { MEDIA_QUERY } from "@/style";

type SearchPageProps = {
  type: string;
};

const SearchPageComp = styled.div<SearchPageProps>`
  padding-top: 50px;
  .search-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${MEDIA_QUERY.lg} {
      display: block;
    }
    .search-input {
      flex-grow: 1;
      margin-top: 5px;
      margin-right: 5px;
      ${MEDIA_QUERY.lg} {
        width: 100%;
        margin: ${(props) => (props.type === "activity" ? "4px 0" : "20px 0 10px")};
      }
    }
    .react-datepicker-wrapper {
      margin-top: 5px;
      margin-right: 5px;
      width: 200px;
      input {
        width: 200px;
      }
      ${MEDIA_QUERY.lg} {
        margin-top: 10px;
        width: 100% !important;
        .input {
          height: 44px;
        }
      }
    }
    .search-btn {
      width: 160px;
      height: 40px;
      letter-spacing: 5px;
      display: block;
      cursor: pointer;
      ${MEDIA_QUERY.lg} {
        width: 100%;
      }
      svg {
        margin-right: 5px;
        cursor: pointer;
      }
    }
  }
`;

const SearchResultComp = styled.div`
  .search-result-text {
    padding: 50px 0 20px;
    font-weight: normal;
    font-size: 28px;
    span {
      padding-left: 6px;
      font-size: 16px;
      strong {
        color: #949142;
      }
    }
  }
  .search-result-list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    ${MEDIA_QUERY.lg} {
      display: block;
    }
    svg {
      color: var(--green);
    }
  }
  .no-data {
    font-size: 20px;
    line-height: 24px;
    width: 200px;
    margin: 0 auto;
    text-align: center;
    svg {
      display: block;
      font-size: 60px;
      margin: 20px auto;
    }
  }
`;

type AllList = (ActItem | SpotItem | RestItem)[];

function Index() {
  let endFlag = false;
  let skip = 0;
  const dispatch = useDispatch();
  const [result, setResult] = useState<AllList>([]);
  const [city, setCity] = useState<string>("");
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("");
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [showCategory, setShowCategory] = useState(true);
  const [pennding, setPennding] = useState(false);
  const searchData = useSelector(Search.selectSearch) as { type: string; keyword: string };
  // const refKeyword = useRef(keyword);
  // const refStartDate = useRef(startDate);
  // const refCity = useRef(city);
  // const refCatacory = useRef(category);
  // const refShowCategory = useRef(showCategory);

  const placeholderConfig = {
    activity: "你想玩什麼？",
    spot: "你想去哪裡？",
    restaurant: "你想吃什麼？",
  };

  const getCrumb = useCallback((): string => {
    const target = MENU_LIST.find((vo) => vo.value === searchData.type) as MenuItem;
    return target.label;
  }, [searchData]);

  const saveSearchData = () => {
    setCategory("");
    resetSearch();
    getData();
    // dispatch(setSearchData(dataObj));
  };

  const resetSearch = () => {
    skip = 0;
    endFlag = false;
    // setStartDate(new Date());
    setKeyword("");
    setCity("");
    setResult([]);
  };

  const chainStr = (arr: string[]) => {
    let newArr = arr.filter((vo) => vo !== "");
    return newArr.join(" and ");
  };

  const transDate = (date: Date) => {
    const time = new Date(date);
    return [time.getMonth() + 1, time.getFullYear()];
  };

  const queryStr = () => {
    const word = [getQueryName(), "Description"];
    const wordArr = word.map((vo) => {
      return ` contains(${vo}, '${showCategory}') `;
    });
    return wordArr.join("or");
  };

  const getQueryName = () => {
    if (searchData.type === "activity") {
      return "ActivityName";
    } else if (searchData.type === "spot") {
      return "ScenicSpotName";
    } else {
      return "RestaurantName";
    }
  };

  const getData = useCallback(async () => {
    let list: string | any[] = [];
    let [month, year] = searchData.type === "activity" ? transDate(startDate) : [];
    let nameStr = keyword ? `contains(${getQueryName()},'${keyword}')` : "";
    let monthStr = month ? `month(StartTime) eq ${month}` : "";
    let yearStr = year ? `year(StartTime) eq ${year}` : "";
    let noCover = "Picture/PictureUrl1 ne null";
    let categoryStr = category && queryStr();
    const sendData = {
      $top: 30,
      $skip: skip,
      $filter: chainStr([nameStr, monthStr, yearStr, noCover, categoryStr]),
      city: city,
    };
    console.log("sendData", sendData);
    setPennding(true);
    try {
      switch (searchData.type) {
        case "activity":
          list = (await getActivity(sendData)) as ActItem[];
          break;
        case "spot":
          list = (await getSpot(sendData)) as SpotItem[];
          break;
        default:
          list = (await getRestaurant(sendData)) as RestItem[];
          break;
      }
      setPennding(false);
      if (list.length === 0) {
        endFlag = true;
      } else {
        setResult((prevState) => [...prevState, ...list]);
      }
    } catch (error) {
      console.error("error");
      endFlag = true;
      setPennding(false);
    }
  }, [searchData]);

  const loadMore = () => {
    if (endFlag) return;
    skip += 30;
    getData();
  };

  const scrollEvent = () => {
    if (document.body.offsetHeight - window.innerHeight < 5 || endFlag || showCategory) return;
    if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
      console.log("is-bottom====", keyword);
      !pennding && loadMore();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollEvent);
    window.onbeforeunload = function (e) {
      // console.log("reload!!");
      dispatch(Search.setSearchData({ type: searchData.type, keyword: "" }));
      window.scrollTo(0, 0);
    };
    return () => {
      window.removeEventListener("scroll", scrollEvent);
    };
  }, []);

  useEffect(() => {
    if (searchData.keyword) {
      setKeyword(searchData.keyword);
      setShowCategory(false);
      getData();
    } else {
      setShowCategory(true);
    }
    setCategory("");
    setResult([]);
    getCrumb();
    // console.log("searchData--change", searchData);
  }, [searchData, getData, getCrumb]);

  useEffect(() => {
    if (category) {
      setShowCategory(false);
      setResult([]);
      getData();
    }
  }, [category, getData]);

  return (
    <SearchPageComp type={searchData.type}>
      {pennding && <Loading />}
      <Crumb type={"首頁"} title={getCrumb()} />
      <div className="search-bar">
        <CitySelect setCity={setCity} city={city} />
        {searchData.type === "activity" && <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} dateFormat="MM/yyyy" showMonthYearPicker />}
        <input
          className="search-input"
          placeholder={`${placeholderConfig[searchData.type]}請輸入關鍵字`}
          value={keyword}
          onChange={(e) => {
            {
              /* refKeyword.current = e.target.value */
            }
            setKeyword(e.target.value);
          }}
        />
        <button className="search-btn" onClick={saveSearchData}>
          <FontAwesomeIcon icon={faSearch} />
          搜尋
        </button>
      </div>
      {category && <Category type={searchData.type} setCategory={setCategory} />}
      {!category && (
        <SearchResultComp>
          <h3 className="search-result-text">
            搜尋結果
            <span>
              共有
              <strong>{result.length}</strong>筆
            </span>
          </h3>
          <div className="search-result-list">
            {result.map((vo) => {
              return <ListCard key={vo.ScenicSpotID} data={{ ...vo, type: searchData.type }} />;
            })}
            {result.length === 0 && (
              <div className="no-data">
                　<FontAwesomeIcon icon={faFileAlt} />
                <p>查無資料</p>
                <p>請重新查詢</p>
              </div>
            )}
          </div>
        </SearchResultComp>
      )}
    </SearchPageComp>
  );
}

export default Index;

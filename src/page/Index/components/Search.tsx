import React, { useState } from "react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Search as SearchSlice, useDispatch } from "../../../store/";
import { MENU_LIST } from "../../../global/constant";
import DropDown from "../../../components/DropDown";
import { MEDIA_QUERY, COLOR } from "@/style";

const TitleComp = styled.div`
  text-align: left;
  padding: 5% 10%;
  display: flex;
  justify-content: center;
  ${MEDIA_QUERY.lg} {
    display: block;
    text-align: center;
    padding: 5% 0;
  }
  .area {
    width: 40%;
    padding-left: 20px;
    ${MEDIA_QUERY.lg} {
      width: 100%;
      padding-left: 0px;
    }
  }
  .main-title {
    font-size: 36px;
    line-height: 50px;
    ${MEDIA_QUERY.lg} {
      font-size: 32px;
    }
    .taiwan {
      position: relative;
      &:after {
        content: "";
        position: absolute;
        bottom: -3px;
        height: 2px;
        background-color: ${COLOR.green_light};
        width: 100%;
        left: 0;
      }
    }
  }
  .sub-title {
    font-size: 16px;
    padding: 20px 0;
    color: #646464;
    svg {
      color: ${COLOR.green_light};
      margin: 0 5px;
    }
    span {
      color: #646464;
    }
  }
  .search-input {
    width: 300px;
    margin-top: 10px;
    ${MEDIA_QUERY.lg} {
      width: 100%;
      margin-top: 16px;
    }
  }
  .search-btn {
    width: 300px;
    height: 40px;
    margin-top: 10px;
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
`;

function Search() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");
  const [selectedOption, setSelectedOption] = useState(MENU_LIST[1]?.value);

  const saveSearchData = () => {
    const dataObj = {
      keyword,
      type: selectedOption,
    };
    dispatch(SearchSlice.setSearchData(dataObj));
    navigate("/search");
  };

  return (
    <TitleComp>
      <div className="area">
        <p className="main-title">
          探索<span className="taiwan">台灣之美</span>
        </p>
        <p className="main-title">讓我們更親近這片土地</p>
        <p className="sub-title">
          <FontAwesomeIcon className="mark" icon={faMapMarkerAlt} />
          台灣旅遊景點導覽 <span>Taiwan Travel Guide</span>
        </p>
      </div>
      <div className="area">
        <DropDown value={selectedOption} onChange={setSelectedOption} options={MENU_LIST} />
        <input
          className="search-input"
          placeholder="你想去哪裡？請輸入關鍵字"
          value={keyword}
          onChange={(e) => {
            setKeyword(e.target.value);
          }}
        />
        <button className="search-btn" onClick={saveSearchData}>
          <FontAwesomeIcon className="mark" icon={faSearch} />
          搜尋
        </button>
      </div>
    </TitleComp>
  );
}

export default Search;

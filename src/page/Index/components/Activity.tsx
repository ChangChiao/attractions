import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import ListItem from "../../../components/ListItem";
import { Search, useDispatch } from "../../../store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { getActivity } from "../../../utils/api";
import { ActItem } from "../../../types";
import { MEDIA_QUERY } from "@/style";
const ActComp = styled.div`
  margin-top: 30px;
  .title-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    svg {
      margin-left: 5px;
    }
  }
  .list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 10px;
    ${MEDIA_QUERY.lg} {
      display: block;
    }
  }
`;

function Activity() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [list, setList] = useState<ActItem[]>([]);
  const getAct = async () => {
    const sendData = {
      $top: 4,
      $orderBy: "EndTime desc",
      $filter: "Picture/PictureUrl1 ne null",
    };
    const result = (await getActivity(sendData)) as ActItem[];
    setList(result);
  };
  const handleClick = () => {
    const dataObj = {
      type: "activity",
    };
    dispatch(Search.setSearchData(dataObj));
    navigate("/search");
  };
  useEffect(() => {
    getAct();
  }, []);
  return (
    <ActComp>
      <div className="title-bar">
        <h3 className="title">近期活動</h3>
        <span className="more" onClick={handleClick}>
          查看更多活動
          <FontAwesomeIcon className="mark" icon={faChevronRight} />
        </span>
      </div>
      <div className="list">
        {list.map((vo) => {
          return <ListItem key={vo.ActivityID} data={{ ...vo, type: "activity" }} />;
        })}
      </div>
    </ActComp>
  );
}

export default Activity;

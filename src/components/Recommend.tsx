import React from "react";
import styled from "@emotion/styled";
import ListCard from "./ListCard";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Search, useDispatch } from "../store/";

const RecommendComp = styled.div`
  margin-top: 50px;
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
    margin-top: 16px;
    @media (max-width: 980px) {
      display: block;
    }
  }
`;

type RecommendProps = {
  title: string;
  list: {}[];
};

function Recommend({ data }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = () => {
    const dataObj = {
      type: data?.type,
    };
    dispatch(Search.setSearchData(dataObj));
    navigate("/search");
  };
  return (
    <RecommendComp>
      <div className="title-bar">
        <h3 className="title">{data.title}</h3>
        <span className="more" onClick={handleClick}>
          查看更多活動
          <FontAwesomeIcon className="mark" icon={faChevronRight} />
        </span>
      </div>
      <div className="list">
        {data.list &&
          data.list.map((vo) => {
            return <ListCard data={{ ...vo, type: data.type }} key={vo.ScenicSpotID || vo.RestaurantID} />;
          })}
      </div>
    </RecommendComp>
  );
}

export default Recommend;

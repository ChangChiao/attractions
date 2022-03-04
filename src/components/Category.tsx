import React from "react";
import styled from "@emotion/react";
import { CATEGORYLIST } from "../config/constant";
const CategoryComp = styled.div`
  padding-top: 50px;
  .list {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
    .item {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 20px;
      width: 23%;
      border-radius: 20px;
      height: 168px;
      font-size: 20px;
      background-size: 100%;
      background-position: center;
      background-repeat: no-repeat;
      @media (max-width: 980px) {
        width: 100%;
      }
      p {
        color: #fff;
        transition: 0.2s;
      }
      &:hover {
        p {
          transform: scale(1.1);
          color: #d5e2c8;
        }
      }
    }
  }
`;

function Category({ type = "spot", setCategory }) {
  const selectCategory = (category) => {
    if (!category) return;
    setCategory(category);
  };

  return (
    <CategoryComp>
      <h2 className="title">熱門主題</h2>
      <ul className="list">
        {type &&
          CATEGORYLIST[type].map((vo) => {
            return (
              <li
                onClick={() => {
                  selectCategory(vo.keyword);
                }}
                className="item"
                key={vo.cover}
                style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/image/catagory/${type}/${vo.cover}.png)` }}
              >
                <p>{vo.title}</p>
              </li>
            );
          })}
      </ul>
    </CategoryComp>
  );
}

export default Category;

import styled from "@emotion/styled";
import { MENU_LIST } from "../global/constant";
import { useNavigate } from "react-router-dom";
import { Search, useDispatch } from "../store";
import { COLOR } from "../style";

const CrumbComp = styled.div`
  padding-bottom: 20px;
  font-size: 14px;
  .crumb-text {
    color: ${COLOR.green};
    cursor: pointer;
  }
  strong {
    color: ${COLOR.green};
    margin: 0 5px;
  }
`;

export default function Crumb({ type, title }: { type: string; title: string }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const goPage = (title: string) => {
    let goPath = "";
    if (title === "首頁") goPath = "/";
    MENU_LIST.forEach((element) => {
      if (element.label === title) {
        goPath = "/search";
        const dataObj = {
          type: element.value,
        };
        dispatch(Search.setSearchData(dataObj));
      }
    });
    goPath && navigate(goPath);
  };
  return (
    <CrumbComp>
      <span
        onClick={() => {
          goPage(type);
        }}
        className="crumb-text"
      >
        {type}
      </span>
      <strong>/</strong>
      <span
        onClick={() => {
          goPage(title);
        }}
        className="crumb-text"
      >
        {title}
      </span>
    </CrumbComp>
  );
}

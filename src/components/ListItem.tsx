import React from "react";
import styled from "@emotion/styled";
import { useDispatch, Intro } from "../store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { transDate } from "../utils/common";
import { useNavigate } from "react-router-dom";
import { ActItem, PicType } from "../types";
import { MEDIA_QUERY, COLOR } from "@/style";
const ListComp = styled.div`
  width: 49%;
  cursor: pointer;
  display: flex;
  overflow: hidden;
  border: 1px solid ${COLOR.line};
  border-radius: 12px;
  margin-top: 10px;
  background-color: ${COLOR.gray};
  transition-duration: 0.3s;
  height: 120px;
  ${MEDIA_QUERY.lg} {
    width: 100%;
  }
  &:hover {
    .cover {
      img {
        transform: scale(1.1);
      }
    }
  }
  .cover {
    width: 150px;
    overflow: hidden;
    ${MEDIA_QUERY.lg} {
      width: 80px;
    }
    img {
      transition-duration: 0.3s;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .text {
    flex: 1;
    padding: 10px 14px;
    position: relative;
  }
  .bottom-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    width: 90%;
    bottom: 10px;
  }
  .intro {
    ${MEDIA_QUERY.lg} {
      display: none;
    }
  }
`;

type ItemProps = ActItem;

function ListItem({ data }: { data: ItemProps }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const setImage = (Picture: PicType) => {
    const { PictureUrl1 } = Picture || {};
    return PictureUrl1 ? PictureUrl1 : process.env.PUBLIC_URL + `/image/default/act.jpg`;
  };
  const handleClick = () => {
    dispatch(Intro.setIntroData(data));
    navigate(`/intro`);
  };
  return (
    <ListComp
      onClick={() => {
        handleClick();
      }}
    >
      <div className="cover">
        <img alt="cover" src={setImage(data.Picture)} />
      </div>
      <div className="text">
        {data.ActivityName && <p className="date">{`${transDate(data.StartTime)}-${transDate(data.EndTime)}`}</p>}
        <p className="item-title">{data.ActivityName}</p>
        <p className="bottom-info">
          <span className="location">
            <FontAwesomeIcon className="mark" icon={faMapMarkerAlt} />
            {data.Address}
          </span>
          <span className="intro">
            ????????????
            <FontAwesomeIcon className="mark" icon={faChevronRight} />
          </span>
        </p>
      </div>
    </ListComp>
  );
}

export default ListItem;

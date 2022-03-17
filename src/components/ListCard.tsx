import React from "react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { useDispatch, Intro } from "../store/";
import { SpotItem, RestItem, ActItem, allType } from "../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
const Card = styled.div`
  width: 24%;
  cursor: pointer;
  @media (max-width: 980px) {
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
    border-radius: 20px;
    height: 200px;
    margin-bottom: 10px;
    overflow: hidden;
    img {
      transition-duration: 0.3s;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .location {
    margin-bottom: 10px;
    text-align: left;
    padding: 10px 0;
  }
`;

type CardProps = allType;

// type KeyCard = keyof CardProps;
// type Value = CardProps[KeyCard];

function ListCard({ data }: { data: CardProps }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const setImage = (Picture: { PictureUrl1?: string | undefined } | undefined) => {
    const { PictureUrl1 } = Picture || {};
    return PictureUrl1 ? PictureUrl1 : process.env.PUBLIC_URL + `/image/default/default.png`;
  };
  const handleClick = () => {
    dispatch(Intro.setIntroData(data));
    navigate(`/intro`);
  };
  const typeGuardAct = (introData: allType): introData is ActItem => {
    return introData.hasOwnProperty("ActivityID");
  };

  const typeGuardSpot = (introData: allType): introData is SpotItem => {
    return introData.hasOwnProperty("ScenicSpotID");
  };

  const getTitle = (data: allType) => {
    return typeGuardAct(data) ? data.ActivityName : typeGuardSpot(data) ? data.ScenicSpotName : data.RestaurantName;
  };
  return (
    <Card
      onClick={() => {
        handleClick();
      }}
    >
      <div className="cover">
        <img alt="picture" src={setImage(data.Picture)} />
      </div>
      <p className="item-title">{getTitle(data)}</p>
      <p className="location">
        <FontAwesomeIcon className="mark" icon={faMapMarkerAlt} />
        {data.Address || data.City}
      </p>
    </Card>
  );
}

export default ListCard;

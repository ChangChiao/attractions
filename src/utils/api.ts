import api from "./http";
import { API_SPOT, API_RESTAURANT, API_ACTIVITY } from "../config/constant";
import jsSHA from "jssha";

const getAuthorizationHeader = () => {
  let AppID = process.env.REACT_APP_ID;
  let AppKey = process.env.REACT_APP_KEY as string;

  const UTCString = new Date().toUTCString();
  const ShaObj = new jsSHA("SHA-1", "TEXT");
  ShaObj.setHMACKey(AppKey, "TEXT");
  ShaObj.update("x-date: " + UTCString);
  let HMAC = ShaObj.getHMAC("B64");
  let Authorization = `hmac username="${AppID}", algorithm="hmac-sha1", headers="x-date", signature="${HMAC}"`;
  return {
    Authorization: Authorization,
    "X-Date": UTCString,
    "Content-Type": "application/x-www-form-urlencoded",
  };
};

type sendData = {
  $top: number;
  $skip: number;
  $filter: string;
  city: string;
};

const getCity = (data: sendData) => {
  const { city = "", $top, $skip, $filter } = data;
  return {
    cityPath: city,
    $top,
    $skip,
    $filter,
  };
};

export const getRestaurant = (sendData: sendData) => {
  const { cityPath, ...data } = getCity(sendData);
  let config = {
    headers: getAuthorizationHeader(),
    params: {
      ...data,
    },
  };
  return api.get(API_RESTAURANT + `/${cityPath}`, config);
};

export const getSpot = (sendData: sendData) => {
  const { cityPath, ...data } = getCity(sendData);
  let config = {
    headers: getAuthorizationHeader(),
    params: {
      ...data,
    },
  };
  return api.get(API_SPOT + `/${cityPath}`, config);
};

export const getActivity = (sendData: sendData) => {
  const { cityPath, ...data } = getCity(sendData);
  let config = {
    headers: getAuthorizationHeader(),
    params: {
      ...data,
    },
  };
  return api.get(API_ACTIVITY + `/${cityPath}`, config);
};

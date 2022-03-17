import { SpotItem, RestItem, ActItem, allType } from "../types/apiType";

export const typeGuardAct = (introData: allType): introData is ActItem => {
  return introData.hasOwnProperty("ActivityID");
};

export const typeGuardSpot = (introData: allType): introData is SpotItem => {
  return introData.hasOwnProperty("ScenicSpotID");
};

export const typeGuardRest = (introData: allType): introData is RestItem => {
  return introData.hasOwnProperty("RestaurantID");
};

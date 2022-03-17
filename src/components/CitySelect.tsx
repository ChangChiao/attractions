import React from "react";
import DropDown from "./DropDown";
import { CITY_LIST } from "../config/constant";

type CityProp = {
  city: string;
  setCity: (value: string | ((prevVar: string) => string)) => void;
};

function CitySelect({ city, setCity }: CityProp) {
  return <DropDown value={city} onChange={setCity} options={CITY_LIST} />;
}

export default CitySelect;

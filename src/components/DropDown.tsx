import { Dispatch, SetStateAction } from "react";
import { MENU_LIST } from "../config/constant";

type DropProp = {
  value: string;
  options: typeof MENU_LIST;
  onChange: Dispatch<SetStateAction<string>>;
};

function DropDown({ value, options, onChange }: DropProp) {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value);
  };
  return (
    <select id="" value={value} onChange={handleChange}>
      {options.map((item) => {
        return <option value={item.value}>{item.label}</option>;
      })}
    </select>
  );
}

export default DropDown;

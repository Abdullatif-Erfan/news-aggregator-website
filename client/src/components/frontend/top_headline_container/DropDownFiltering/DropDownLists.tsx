import { ChangeEvent } from "react";

type Option = {
  label: string;
  value: string;
};

type handleRadioChangePropsType = {
  handleRadioChange: (event: ChangeEvent<HTMLInputElement>, filterType: string) => void;
};

export function DropDownLists(option: Option, selectedOptions: string, handleRadioChange: handleRadioChangePropsType | any, filterType: string) {
  return <li key={option.value}>
    <label>
      <input type="radio" id="radio" value={option.value} checked={selectedOptions === option.value}
        onChange={(event) => handleRadioChange(event, filterType)} name="radioGroup" />
      {option.value}</label>
  </li>
}


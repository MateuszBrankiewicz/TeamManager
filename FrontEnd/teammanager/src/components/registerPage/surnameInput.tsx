import React, { ChangeEvent } from "react";
import "C:\\Users\\VivoBook\\Desktop\\teamManager\\TeamManager\\FrontEnd\\teammanager\\src\\components\\loginPage\\form.css"
interface SurnameInputProps{
  value:string;
  onChange: (event : ChangeEvent<HTMLInputElement>) => void;
}
const SurnameInput: React.FC<SurnameInputProps> = ({ value, onChange }) => {
  return (
    <div id="formLabel">
    <form>
      <input className="formInput" type="text" value={value} onChange={onChange} placeholder="Enter last name" />
    </form>
    </div>
  );
};

export default SurnameInput;

import React, { ChangeEvent } from "react";
import "C:\\Users\\VivoBook\\Desktop\\teamManager\\TeamManager\\FrontEnd\\teammanager\\src\\components\\loginPage\\form.css"
interface NameInputProps{
  value:string;
  onChange: (event : ChangeEvent<HTMLInputElement>) => void;
}
const NameInput: React.FC<NameInputProps> = ({ value, onChange }) => {
  return (
    <div id="formLabel">
    <form>
      <input className="formInput" type="text" value={value} onChange={onChange} placeholder="Enter first name" />
    </form>
    </div>
  );
};

export default NameInput;

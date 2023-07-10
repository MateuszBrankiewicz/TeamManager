import React, { ChangeEvent } from "react";
import "./form.css"
interface PasswordInputProps{
  value : string;
  onChange:(event: ChangeEvent<HTMLInputElement>)=> void;
}
const PasswordInput: React.FC<PasswordInputProps> = ({value,onChange}) => {
  return (
    <div id="formLabel">
    <form>
      <input className="formInput" value={value} onChange={onChange} type="password" placeholder="Enter password" />
    </form>
    </div>
  );
};

export default PasswordInput;

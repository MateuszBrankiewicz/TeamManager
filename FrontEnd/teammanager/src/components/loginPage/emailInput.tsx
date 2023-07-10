import React, { ChangeEvent } from "react";
import "./form.css"
interface EmailInputProps{
  value:string;
  onChange: (event : ChangeEvent<HTMLInputElement>) => void;
}
const EmailInput: React.FC<EmailInputProps> = ({ value, onChange }) => {
  return (
    <div id="formLabel">
    <form>
      <input className="formInput" type="text" value={value} onChange={onChange} placeholder="Enter email" />

    </form>
    </div>
  );
};

export default EmailInput;

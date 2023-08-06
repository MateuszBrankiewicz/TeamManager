import React, { ChangeEvent } from "react";
import "./form.css"
interface EmailInputProps{
  value:string;
  onChange: (event : ChangeEvent<HTMLInputElement>) => void;
  type:string;
  message:string;
}
const Input: React.FC<EmailInputProps> = ({message, type, value, onChange }) => {
  return (
    
    
      <input type={type} value={value} onChange={onChange} placeholder={message} />
    
   
  );
};

export default Input;

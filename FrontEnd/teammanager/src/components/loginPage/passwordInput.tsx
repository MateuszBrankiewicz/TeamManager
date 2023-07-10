import React from "react";
import "./form.css"
const PasswordInput = () => {
  return (
    <div id="formLabel">
    <form>
      <input className="formInput" type="password" placeholder="Enter password" />
    </form>
    </div>
  );
};

export default PasswordInput;

import React from "react";
import "./form.css"
const EmailInput = () => {
  return (
    <div id="formLabel">
    <form>
      <input className="formInput" type="text" placeholder="Enter email" />
    </form>
    </div>
  );
};

export default EmailInput;

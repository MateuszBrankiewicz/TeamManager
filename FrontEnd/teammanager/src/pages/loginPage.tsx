import React from "react";
import EmailInput from "../components/loginPage/emailInput";
import PasswordInput from "../components/loginPage/passwordInput";
import "./loginPage.css"
const LoginPage = () => {
    return(
        <div id="main">
            
        <div id="loginBar">
            Login
            <EmailInput></EmailInput>
            <PasswordInput></PasswordInput>
        </div>
        </div>
    );
};
export default LoginPage;
import React from "react";
import EmailInput from "../components/loginPage/emailInput";
import PasswordInput from "../components/loginPage/passwordInput";
import "./loginPage.css"
import Logo from'C:\\Users\\VivoBook\\Desktop\\teamManager\\TeamManager\\FrontEnd\\teammanager\\src\\assets\\img\\logo.png'
//musisz dodac swoja sciezke do zdjecia 
import SignInButton from "../components/loginPage/SignInButton";
const LoginPage = () => {
    return(
        <div id="main">
            <img src={Logo} alt = "logo"></img>
        <div id="loginBar">
            <h2>Login</h2>
            <EmailInput></EmailInput>
            <PasswordInput></PasswordInput>
            <SignInButton></SignInButton>
            <p>Forgot <b>Username/Password?</b><br></br>
            Don't have an account? <b>Sign up</b></p>
        </div>
        </div>
    );
};
export default LoginPage;
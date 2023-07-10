import React, { ChangeEvent, useState } from "react";
import EmailInput from "../components/loginPage/emailInput";
import PasswordInput from "../components/loginPage/passwordInput";
import "./loginPage.css"
import Logo from'C:\\Users\\VivoBook\\Desktop\\teamManager\\TeamManager\\FrontEnd\\teammanager\\src\\assets\\img\\logo.png'
//musisz dodac swoja sciezke do zdjecia 
// import Logo from'C:\\wlasne projekty\\TeamManager\\FrontEnd\\teammanager\\src\\assets\\img\\logo.png'
// //musisz dodac swoja sciezke do zdjecia a moja skomentowac 
import SignInButton from "../components/loginPage/SignInButton";
const LoginPage = () => {
        const [email,setEmail] = useState("")
        const [password,setPassword] = useState("")
    const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) =>{
        setEmail(event.target.value);
    }
    const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>)=>{
        setPassword(event.target.value)
    }
    function checkPassword(password: string): boolean {
        
        const duzaLiteraRegex = /[A-Z]/;
        if (!duzaLiteraRegex.test(password)) {
          return false;
        }
        const znakSpecjalnyRegex = /[!@#$%^&*(),.?":{}|<>]/;
        if (!znakSpecjalnyRegex.test(password)) {
          return false;
        }
      
        const cyfraRegex = /[0-9]/;
        if (!cyfraRegex.test(password)) {
          return false;
        }
        return true;
      }
    const signInFunction = () => {
        if (email !== "" && password !== "") {
            if (email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/) && password.length > 6 && checkPassword(password)) {
                console.log("Log in");
            } else if (email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/) && password.length > 6) {
                console.log("Set a number and special capital in password");
            } else if (email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/) && checkPassword(password)) {
                console.log("Password must have 7 capitals");
            } else {
                console.log("Invalid email");
            }
        } else if (email !== "") {
            console.log("Please set password");
        } else if (password !== "") {
            console.log("Please set email");
        } else {
            console.log("Please set email and password");
        }
    };        
    return(
        <div id="main">
            <img src={Logo} alt = "logo"></img>
        <div id="loginBar">
            <h2>Login</h2>
            <EmailInput value={email} onChange={handleEmailChange}></EmailInput>
            <PasswordInput value={password} onChange={handlePasswordChange}></PasswordInput>
            <SignInButton onClick ={signInFunction} ></SignInButton>
            <p>Forgot <b>Username/Password?</b><br></br>
            Don't have an account? <b>Sign up</b></p>
        </div>
        </div>
    );
};
export default LoginPage;
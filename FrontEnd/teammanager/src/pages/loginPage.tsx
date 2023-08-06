import React, { ChangeEvent, useState } from "react";
import Input from "../components/loginPage/Input";
import "./loginPage.css"

import Logo from'C:\\Projekty\\TeamManager\\FrontEnd\\teammanager\\src\\assets\\img\\logo.png'
import Button from "../components/loginPage/Button";
import { Link } from "react-router-dom";
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
            <h2>Hello!</h2>
            <h3>Sign in to your account</h3>
            {/* <img src={Ico} alt="ico"></img> */}
            <Input value={email} onChange={handleEmailChange} type="text" message="Enter email"></Input>
            <Input value={password} onChange={handlePasswordChange} type="password" message="Enter password"></Input>
            <Button onClick ={signInFunction} message="SignIn"></Button>
            <p>Forgot <b><a href="">Username/Password?</a></b><br></br>
            Don't have an account? <b><Link to="/register">Sign up</Link></b></p>
        </div>
        </div>
    );
};
export default LoginPage;
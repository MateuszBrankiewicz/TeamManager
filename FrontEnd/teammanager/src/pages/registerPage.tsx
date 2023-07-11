import React, { ChangeEvent, useState } from "react";
import EmailInput from "../components/loginPage/emailInput";
import PasswordInput from "../components/loginPage/passwordInput";
import NameInput from "../components/registerPage/nameInput";
import SurnameInput from "../components/registerPage/surnameInput";
import "./registerPage.css"
import Logo from'C:\\Users\\VivoBook\\Desktop\\teamManager\\TeamManager\\FrontEnd\\teammanager\\src\\assets\\img\\logo1.png'
import Ico from 'C:\\Users\\VivoBook\\Desktop\\teamManager\\TeamManager\\FrontEnd\\teammanager\\src\\assets\\img\\ico1.png'
//musisz dodac swoja sciezke do zdjecia 
// import Logo from'C:\\wlasne projekty\\TeamManager\\FrontEnd\\teammanager\\src\\assets\\img\\logo.png'
// //musisz dodac swoja sciezke do zdjecia a moja skomentowac 
import SignUpButton from "../components/registerPage/SignUpButton";
const RegisterPage = () => {
        const [name,setName] = useState("")
        const [surname,setSurname] = useState("")
        const [email,setEmail] = useState("")
        const [password,setPassword] = useState("")
    const handleNameChange = (event: ChangeEvent<HTMLInputElement>) =>{
        setName(event.target.value);
    }
    const handleSurnameChange = (event: ChangeEvent<HTMLInputElement>) =>{
        setSurname(event.target.value);
    }
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
    const signUpFunction = () => {
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
        } else if (name !== "") {
            console.log("Please set first name");
        } else if (surname !== "") {
            console.log("Please set fast name");
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
            <h2>Sign Up</h2>
            {/* <img src={Ico} alt = "ico"></img> */}
            <NameInput value={name} onChange={handleNameChange}></NameInput>
            <SurnameInput value={surname} onChange={handleSurnameChange}></SurnameInput>
            <EmailInput value={email} onChange={handleEmailChange}></EmailInput>
            <PasswordInput value={password} onChange={handlePasswordChange}></PasswordInput>
            <p><input type="checkbox" id="checkbox1"></input>   I read and agree to <a href="">Terms & Conditions</a></p>
            <SignUpButton onClick ={signUpFunction} ></SignUpButton>
            <p>Already have an account? <b><a href="">Sign in</a></b></p>
        </div>
        </div>
    );
};
export default RegisterPage;
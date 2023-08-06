import React, { ChangeEvent, useState } from "react";
import Input from "../components/loginPage/Input";

import "./registerPage.css"

import Ico from '../assets/img/ico1.png'
//musisz dodac swoja sciezke do zdjecia 
import Logo from '../assets/img/logo.png'

import Button from "../components/loginPage/Button";
import { Link } from "react-router-dom";
import LoginPage from "./loginPage";
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
             <img src={Ico} alt = "ico"></img> 
            <Input value={name} onChange={handleNameChange} type="text" message="Enter name"></Input>
            <Input value={surname} onChange={handleSurnameChange}type="text" message="Enter surname"></Input>
            <Input value={email} onChange={handleEmailChange}type="text" message="Enter email"></Input>
            <Input value={password} onChange={handlePasswordChange} type="password" message="Enter password"></Input>
            <p><input type="checkbox" id="checkbox1"></input>   I read and agree to <a href="">Terms & Conditions</a></p>
            <Button onClick ={signUpFunction} message="SignUp"></Button>
            <p>Already have an account? <b><Link to='/'>Sign in</Link></b></p>
        </div>
        </div>
    );
};
export default RegisterPage;
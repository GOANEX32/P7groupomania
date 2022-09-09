import React, { useState } from "react";
import axios from 'axios'





const SignInForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleLogin = (e) => {
        e.preventDefault();
        const emailError = document.querySelector(".email.error");
        const passwordError = document.querySelector(".password.error");


        axios({
            method:"post",
            url:`${process.env.REACT_APP_API_URL}api/user/login`,
            
            data:{
                email,
                password,
            }
        })
        .then((res) => {
            console.log(res);
            if(res.data.errors){
            emailError.innerHTML = res.data.errors.email;
            passwordError.innerHTML = res.data.errors.password;

        } else {
            //window.location ='/';
            console.log(res.data);
            

            localStorage.setItem("token",res.data.token);
            localStorage.setItem("user",res.data.user);
            axios.defaults.headers["Authorization"]= "Bearer"+ res.data.token;

        }

        })
        .catch((err) => {
            console.log(err);
        })
         
        }
   
    



    return (
        <form action="" onSubmit={handleLogin} id="sign-up-form">

            <label htmlFor="email" >email</label>
            <br/>
            <input type="text" 
            name="email" 
            id="email" 
            onChange={(e) => setEmail
            (e.target.value)} value={email}/>
            <div className="email error"></div>
            <br/>

            <label htmlFor="password" >password</label>
            <input type="password" 
            name="password" 
            id="password"
            onChange={(e) => setPassword
            (e.target.value)} value={password}/>
            <div className="password error"></div>
            <br/>

            <input type="submit" value="Se conecter"/>

        </form>


        
    )
}



export default SignInForm
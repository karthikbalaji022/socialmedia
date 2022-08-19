import React,{useRef} from 'react';
import style from './login.module.scss';
import styled from 'styled-components';

import {passwordValidate,validateUsername} from '../util/validator';

function Login() {
    const password=useRef('');
    const username=useRef('');
    function handlePassword(e){
        const pass=e.target.value;
        let err=passwordValidate(pass);
        populateError(password,err);
    }
    function handleUsername(e){
        const user=e.target.value;
        let err=validateUsername(user);
        populateError(username,err);

    }
    function populateError(refrence,message){
        if(message.length===0)
        {
            refrence.current.innerHTML="";
            refrence.current.innerText="All Good!"
            refrence.current.style.color="green";
        }else{
            refrence.current.innerHTML="";
            let temp=message.map(item=>`<p>${item}!</p>`)
            refrence.current.innerHTML=temp.join("");
            refrence.current.style.color="red";
        }
    }

    return (
    <div className={style.loginContainer}>
        <div className={style.loginFormContainer}>
           <styles.h1>
            Login
           </styles.h1>
            <form className={style.loginForm}>
                <label htmlFor="username">
                    Username:
                    <styles.input name='username' type="text" placeholder="username" onChange={handleUsername}/>
                    <p ref={username}></p>
                </label>
                <label htmlFor="password">
                    Password:
                    <styles.input name='password' type="password" placeholder="password" onChange={handlePassword}/>
                    <p ref={password}></p>
                </label>
                <section className={style.buttonContainer}>
                <styles.loginFormSubmit type="submit" >Login</styles.loginFormSubmit>
                OR
                <styles.loginFormSubmit type="button" >Login with</styles.loginFormSubmit>
                OR
                <a href='/register'>
                    <styles.loginFormSubmit type="button" >Register</styles.loginFormSubmit>
                </a>
                </section>
            </form>
        </div>

    </div>
  )
}

const styles={
    h1:styled.h1`
    margin: 0 0 5% 0; 
    padding:5px;
    width: 100%;
    height: max-content;
    border-bottom: 1px solid black;
    text-align: center;
    `,
    input:styled.input`
        margin: 20px 2px;
        border-radius: 5px;
        outline: none;
        border: 0;
        width:100%;
        height:25px;
        padding:2px;
        box-shadow: 0 0 2px 1px rgba(0,0,0,.5);
    `,
    loginFormSubmit:styled.button`

    width:40%;
    min-width: max-content;
    border-radius: 5px;
    border:0;
    background-color: rgb(137, 245, 137);
    padding:5px;
    font-weight: 600;
    font-size: 1rem;
    cursor: pointer;
    transition: all ease-in-out 200ms;
    &:hover{
        background-color: black;
        color: white;

    }
    margin:3%;
    `
}

export default Login
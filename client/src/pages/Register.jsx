import React,{useRef} from 'react'
import styled from 'styled-components'
import style from './login.module.scss';
import {validate} from '../util/validator';

function Register() {
  const err=useRef('');
  function handleSubmit(e){
    e.preventDefault();
    const {
      username:{value:username},
      Email:{value:email},
      phonenumber:{value:phone},
      password:{value:password},
      confirmpassword:{value:cpassword}}=e.target
      const error=validate(username,email,phone,password,cpassword);
      populateError(err,error);
  }
  function populateError(refrence,message){
    if(message.length!==0)
    {
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
        Register
       </styles.h1>
        <form className={style.loginForm} onSubmit={handleSubmit}>
            <label htmlFor="username">
                Username:
                <styles.input name='username' type="text" placeholder="username" />
            </label>
            <label htmlFor="Email">
                Email:
                <styles.input name='Email' type="text" placeholder="email" />
            </label>
            <label htmlFor="phonenumber">
                Phone number:
                <styles.input name='phonenumber' type="number" placeholder="12345789" />
            </label>
            <label htmlFor="password">
                Password:
                <styles.input name='password' type="password" placeholder="password" />
            </label>
            <label htmlFor="confirmpassword">
                Confirm Password:
                <styles.input name='confirmpassword' type="password" placeholder="confirm password" />
            </label>
            <section className={style.buttonContainer}>
            <styles.loginFormSubmit type="submit" >Register</styles.loginFormSubmit>
            OR
            <a href='/login'><styles.loginFormSubmit type="button" >Login</styles.loginFormSubmit></a>

            </section>
            <p ref={err} style={{color:"red"}}></p>
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
export default Register
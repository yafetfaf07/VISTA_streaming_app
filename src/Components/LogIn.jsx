import React from 'react'
import "../CSS_files/sign-in.css";
import logoPic from "../assets/images/Logo-removebg-preview.png"
import googlelogo from "../assets/images/google-icon.png"
import facebooklogo from "../assets/images/facebook-logo.png"
import microsoftlogo from "../assets/images/microsoft-logo.png"
const LogIn = () => {
  return (
    <div className='wrapper'>
           <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
      />
        <div className="logo">
    <img src={logoPic} />

    </div>

    <div className="sign-in-form">
      <h2>Login to your account</h2>
      <div className="inputs">
        <div className="icons">
          <span class="material-symbols-outlined">mail</span>
          <input type="text" placeholder="Email" />
        </div>
        <div className="icons">
          <span class="material-symbols-outlined">lock</span>
          <input type="password" placeholder="Password" />
        </div>
        {/* <div className="checkBoxDiv">
          <input type="checkbox" className="checkboxs" />
          <span id="remeberMe">Remember Me</span>
        </div> */}
        <button className="signup-btn"><a href='moviepage'>Login</a></button>
      </div>
        <center>
          <span style={{fontWeight:600, color:"gray"}}>Or continue with</span>
        </center>
      <div className="oauth">
        <div>
        <img src={googlelogo} />
        </div>
        <div>
        <img src={facebooklogo} />
        </div>
        <div>
        <img src={microsoftlogo} />
        </div>
      </div>


    </div></div>
  )
}

export default LogIn
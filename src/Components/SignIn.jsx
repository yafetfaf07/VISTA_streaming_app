import React, { useRef, useState } from 'react'
import "../CSS_files/sign-in.css";
import logoPic from "../assets/images/Logo-removebg-preview.png"
import googlelogo from "../assets/images/google-icon.png"
import facebooklogo from "../assets/images/facebook-logo.png"
import microsoftlogo from "../assets/images/microsoft-logo.png"

const SignIn = () => {
  let [usernames, setusernames] = useState("");
  let [passwords, setpasswords] = useState("");
  return (
    <div>
    <link
 rel="stylesheet"
 href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
/>
 <div className="logo">
<img src={logoPic} />

</div>

<div className="sign-in-form">
<h2>Sign up to your account</h2>

<form action="" method="post" onSubmit={(e) => {
  e.preventDefault();
    let api = "http://localhost:5001/api/User";
    let userValues;
    // let usernameValues=userName.current.value;
    // let userpasswordValues=passWord.current.value
    userValues = {username:usernames,password:passwords}
    console.log(userValues);
    fetch(api, {
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(userValues)
    }).then(() => {
      console.log("User added")
    }).catch((error) => {
      console.error("Error: ",error)
    })
    usernames="";
    passwords="";
}}>
<div className="inputs">
 <div className="icons">
   <span class="material-symbols-outlined">mail</span>
   <input value={usernames} onChange={(e) => setusernames(e.target.value)} type="text" placeholder="Email" />
 </div>
 <div className="icons">
   <span class="material-symbols-outlined">lock</span>
   <input value={passwords} onChange={(e) => setpasswords(e.target.value)} type="password" placeholder="Password" />
 </div>

 <input type='submit' value="Sign up" name='Sign up' className="signup-btn"/>
</div>
</form>

 <center>
   <span style={{fontWeight:600, color:"white"}}>Or continue with</span>
 </center>
<div className="oauth">
 <img src={googlelogo} />
<img src={facebooklogo} />
<img src={microsoftlogo} />
</div>
</div></div>
  )
}

export default SignIn
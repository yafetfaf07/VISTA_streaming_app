import React, { useRef, useState } from "react";
import SignIn from "../Components/SignIn";
import LogIn from "../Components/LogIn";
const SignInPage = () => {
let [check, setcheck] = useState(true);
function callMe () {
  console.log(check);
setcheck(!check);
}
if(check) {
  return (
 
    <div>
       <button onClick={callMe} style={{backgroundColor:"#fbe6e7", border:"none", color:"red", fontWeight:600 }}> Go to login</button>  
    <SignIn />

  
    </div>
  )
}
else {
  return (
    <div>
        <button onClick={callMe} style={{backgroundColor:"#fbe6e7", border:"none", color:"red", fontWeight:600 }}>Go to sign up</button>
    <LogIn />
    
    </div>
  )
}

};

export default SignInPage;

import { useAuth0 } from "@auth0/auth0-react";
import "../assets/CSS_files/movie-main.css"

import React from 'react'

const Profile = () => {
    const {user, isAuthenticated} = useAuth0();
    console.log(user);
  return (
    isAuthenticated && (
        <article style={{color:"white", display:"flex", alignItems:"center"}}>
          {

            user?.picture  && <img src={user.picture} style={{width:"60px", height:"60px", borderRadius:"100%"}} alt={user.given_name}/> 
          }
        </article>
    )

  )
}

export default Profile
import { useAuth0 } from "@auth0/auth0-react";
import "../CSS_files/movie-main.css"
import React from 'react'

const LogoutButton = () => {
    const { logout, isAuthenticated} = useAuth0();
  return (
    isAuthenticated && (
        <button className='sign-up' onClick={() => logout()}>Sign out</button>
    )
  )
}

export default LogoutButton
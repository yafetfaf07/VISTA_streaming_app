import { useAuth0 } from "@auth0/auth0-react";
import "../CSS_files/movie-main.css"
import React from 'react'

const LoginButton = () => {
    const {loginWithRedirect, isAuthenticated} = useAuth0();
  return (
    !isAuthenticated && (
        <button className='sign-in' onClick={() => loginWithRedirect()}>Sign In</button>

    )

  )
}

export default LoginButton
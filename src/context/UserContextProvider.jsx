import React, { useState } from 'react'
import UserContext from './UserContext'
const UserContextProvider = ({children}) => {
 const [title, settitle] = useState(null);
 const [thumbnail, setthumbnail] = useState(null)

 return (
    <UserContext.Provider value={{title, settitle, thumbnail, setthumbnail}}>
        {children}
    </UserContext.Provider>
 )
}

export default UserContextProvider
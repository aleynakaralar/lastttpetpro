import { createContext, useEffect, useState } from "react";
import React from 'react'
import { userObserver } from "../auth/firebase.js";


export const AuthContext = createContext()



const AuthContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(false)

    useEffect(() => {
    userObserver(setCurrentUser);
    
      
    }, [])
    

  return (
    <AuthContext.Provider value = {{currentUser}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
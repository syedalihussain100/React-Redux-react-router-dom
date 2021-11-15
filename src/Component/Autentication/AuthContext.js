import React, { useState, createContext } from 'react'


export const AuthContext = createContext();

export const AuthContextProvider = (props) => {
    const [isLogedin, setIsLogedIn] = useState(false);

    return (
        <AuthContext.Provider value={{ isLogedin, setIsLogedIn }}>
            {props.children}
        </AuthContext.Provider>
    )
}
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../Providers/UserProvider";
import { signInWithGoogle } from "../../Services/Firebase";


export const Login = () => {
    const user = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            useNavigate("/")
        }
    }, [user, navigate])
    return (

    )
    
}
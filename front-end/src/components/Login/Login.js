import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../Providers/UserProvider";
import { signInWithGoogle, signOut } from "../../Services/Firebase";


export const Login = () => {
    const user = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            navigate("/");
        }
    }, [user, navigate])

    return (
        <div>
            <button onClick={signInWithGoogle}> Sign in with google </button>
            <button onClick={signOut}> Sign Out </button>
        </div>
    )
    
}
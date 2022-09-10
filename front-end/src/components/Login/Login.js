import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../Providers/UserProvider";
import { signInWithGoogle, signOut } from "../../Services/Firebase";
import "./Login.css"


export const Login = () => {
    const user = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            navigate("/loggedInPage");
        }
    }, [user, navigate])

    return (
        <div className="login">
            <button className="log1" onClick={signInWithGoogle}> Sign In With Google </button>
            <button className="log2" onClick={signOut}> Sign Out </button>
        </div>
    )
    
}
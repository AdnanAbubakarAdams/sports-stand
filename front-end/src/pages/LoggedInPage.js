import React, {useContext, useEffect } from "react";
import { UserContext } from "../Providers/UserProvider";
import { useNavigate } from "react-router-dom";
import { signOut } from "../Services/Firebase";
import "../components/Login/Login.css"

export const LoggedInPage = () => {
    const imgStyle = {
        width: '30vh',
        height: '30vh'
    }

    const navigate = useNavigate();
    const user = useContext(UserContext);

    useEffect(() => {
        if(!user) {
            alert("not logged in - redirecting")
            navigate("/");
        }
    }, [user, navigate])

    const handleLogout = async () => {
        signOut()
        alert("you've been logged out")
      };
      if ( user ){
        return (
          <div className="logged-in">
            <h1> LOGGED IN AS</h1>
            <h1>Welcome {user.displayName}</h1>
            <div>
              <img src = {user.photoURL}
              style={imgStyle}
                className="user-image"
                alt="its the users head"
                ></img>
            </div>
            <h4>email: {user.email}</h4>
            <button onClick={handleLogout}> LOG OUT</button>
    
          </div>
        );
      } else 
      return (
        <div> NOT LOGGED IN </div>
      )
}
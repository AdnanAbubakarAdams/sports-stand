import React, { useEffect, useState, createContext } from "react";
import { auth } from "../Services/Firebase";

// CONTEXT FOR OUR COMPONENTS TO CONSUME
export const UserContext = createContext(null);

export const UserProvider = (props) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            console.log(user)
            if(user) {
                const { email, displayName, photoURL, uid } = user;
                // saving or setting the user vars or destructured vars in the state
                setUser({ email, displayName, photoURL, uid });
            } else {
                setUser(null)
            }
        })
    }, [])
    return (
        <>
        {/* // this is where we render the user state with context provider */}
        <UserContext.Provider value={user}>
            <div>{ props.children }</div>
        </UserContext.Provider>
        </>
    )
}
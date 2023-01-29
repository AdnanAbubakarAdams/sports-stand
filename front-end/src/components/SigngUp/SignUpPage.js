import axios from 'axios';
import React, { useState, useEffect, useContext  } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { UserContext } from '../../Providers/UserProvider';
// import { signUpWithGoogle } from '../../Services/Firebase';

// API 
const API = process.env.REACT_APP_BACKEND_API_KEY;

const SignUpPage = ({ setApplicationUser }) => {
    const [authErrors, setAuthErrors] = useState([]);

    const user = useContext(UserContext);

    const [newUser, setNewUser] = useState({
    uuid: "",
    firstname: "",
    lastname: "",
    dob: "",
    city: "",
    state: "",
    zipcode: "",
    phonenumber: "",
    email: "",
    verified: false,
    profilephoto: "",
    });

    useEffect(() => {
        const submitUser = async () => {
        if(user?.uid) {
            axios
            .post(`${API}/users`, { ...newUser, uuid: user.uid })
            .then(res => {
                if(res.data.payload.uuid){
                    setAuthErrors([]);
                    setApplicationUser(res.data.payload);
                    Navigate("/user-dashboard");
                } else {
                    user.delete().then(() => setAuthErrors([...authErrors, "Sign up failed, please try again."]));
                }
            })
        };
    };
    submitUser();
    }, [user]);

    const navigate = useNavigate();

    const handleInput = (e) => {
        setNewUser({ ...newUser, [e.target.id] : e.target.value })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // await signUpWithGoogle();
    }
  return (
    <div>

    </div>
  )
}

export default SignUpPage;
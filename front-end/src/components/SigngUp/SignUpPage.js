import axios from 'axios';
import React, { useState, useEffect, useContext  } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { UserContext } from '../../Providers/UserProvider';
import { signUpWithGoogle } from '../../Services/Firebase';
// 
// API 
const API = process.env.REACT_APP_BACKEND_API_KEY;

const SignUpPage = ({ setApplicationUser }) => {
    const [authErrors, setAuthErrors] = useState([]);

    const user = useContext(UserContext);

    const [newUser, setNewUser] = useState({
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
                    navigate("/");
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
        await signUpWithGoogle();
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <label htmlFor="firstname">FirstName:</label>
        <br/>
        <input
          id="firstname"
          value={newUser.firstname}
          type="text"
          onChange={handleInput}
          placeholder="Adnan"
          required
        />
        <br/>
        <label htmlFor="lastname">LastName</label>
        <br/>
        <input
          id="lastname"
          type="text"
          value={newUser.lastname}
          placeholder="Abubakar"
          onChange={handleInput}
          required
        />
        <br/>
        <label htmlFor="dob">Date of Birth</label>
        <br/>
        <input
          id="dob"
          type="date"
          name="dob"
          value={newUser.dob}
          placeholder="Date of Birth"
          onChange={handleInput}
        />
        <br/>
        <label htmlFor="city">City</label>
        <br/>
        <input
          id="city"
          type="text"
          name="city"
          value={newUser.city}
          placeholder="City"
          onChange={handleInput}
        />
        <br/>
        <label htmlFor="state">State</label>
        <br/>
        <input
          id="state"
          type="text"
          name="state"
          value={newUser.state}
          placeholder="state"
          onChange={handleInput}
        />
        <br/>
        <label htmlFor="zipcode">Zipcode</label>
        <br/>
        <input
          id="zipcode"
          type="text"
          name="zipcode"
          value={newUser.zipcode}
          placeholder="zipcode"
          onChange={handleInput}
        />
        <br/>
        <label htmlFor="phonenumber">PhoneNumber</label>
        <br/>
        <input
          id="phonenumber"
          type="tel"
          name="phonenumber"
          value={newUser.phonenumber}
          placeholder="phonenumber"
          onChange={handleInput}
        />
        <br/>
        <label htmlFor="email">Email</label>
        <br/>
        <input
          id="email"
          type="text"
          name="email"
          value={newUser.email}
          placeholder="email"
          onChange={handleInput}
        />
        <br/>
        <label htmlFor="profilephoto">ProfilePhoto</label>
        <br/>
        <input
          id="profilephoto"
          type="text"
          name="profilephoto"
          value={newUser.profilephoto}
          placeholder="profilephoto"
          onChange={handleInput}
        />
        <br/>
        {/* <label htmlFor="verification"></label> */}
        {/* <br/> */}
        {/* <input */}
          {/* id="verification" */}
        {/* //   type="checkbox" */}
          {/* onChange={handleInput} */}
          {/* checked={newUser.verified} */}
        {/* /> */}

        <br />
        <input type="submit" />
      </form>
    </div>
  )
}

export default SignUpPage;
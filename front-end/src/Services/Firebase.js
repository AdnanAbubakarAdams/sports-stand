// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(analytics)

// CRETES AN INSTANCE OF AUTHENTICATION AND SETS CURRENT LANGUAGE TO THE DEFAULT DEVICE BROWSER PREFERENCE
export const auth = getAuth();
auth.useDeviceLanguage();

// CREATE A PROVIDE FOR ANY AUTHENTICATION METHOD WE USING (TWITTER, FACEBOOK, EMAIL OR PASSWORD)
const googleProvider = new GoogleAuthProvider();

// EXPORT FUNCTIONS THAT WE GETTING FROM FIREBASE AND ALSO PASSING IN THE PROVIDER WE CREATED WITH OUR AUTH
export const signInWithGoogle =  () => {
    try {
  //the signInWithPopUp() method accepts ANY provider we create. This is all our authentication logic
    signInWithPopup(googleProvider, auth).then((res) => {
    const user = res.user;
    console.log(user)
  })
     } catch (err) {
      console.log(err);
    }
  };

  // THE SIGNOUT METHOD
  export const signOut = async () => {
    try {
        await auth.signOut()
        alert("You've currently been signed out - see ya")
    } catch (error) {
        console.log(error);
    }
  }



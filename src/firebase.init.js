// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCuUeRAWH5ILvXq_Y0cWoplgSfIrTBOU_A",
    authDomain: "ema-john-auth-426fe.firebaseapp.com",
    projectId: "ema-john-auth-426fe",
    storageBucket: "ema-john-auth-426fe.appspot.com",
    messagingSenderId: "509370141997",
    appId: "1:509370141997:web:923d169d26f0abeeb797a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth;
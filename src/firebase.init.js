// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDo0Xp-l5vUj4IaVpOpStq7RX-SUd2kTwg",
  authDomain: "doctors-portal-e88f3.firebaseapp.com",
  projectId: "doctors-portal-e88f3",
  storageBucket: "doctors-portal-e88f3.appspot.com",
  messagingSenderId: "282228374298",
  appId: "1:282228374298:web:7452269f8b92ebf1d48aa3",
};

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_apiKey,
//   authDomain: process.env.REACT_APP_authDomain,
//   projectId: process.env.REACT_APP_projectId,
//   storageBucket: process.env.REACT_APP_storageBucket,
//   messagingSenderId: process.env.REACT_APP_messagingSenderId,
//   appId: process.env.REACT_APP_appId,
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;

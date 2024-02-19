// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCU7hGBUsJE_8s59gCLx-jjViLQUq2X8lU",
  authDomain: "netflixgpt-fcd64.firebaseapp.com",
  projectId: "netflixgpt-fcd64",
  storageBucket: "netflixgpt-fcd64.appspot.com",
  messagingSenderId: "727027738468",
  appId: "1:727027738468:web:0e499189447a87dfbbfc71",
  measurementId: "G-1XSKNE2DCG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
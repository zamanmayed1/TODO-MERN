// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCQUxUX0-FfNWvRVPvFPMeZxrzMhHALhDo",
    authDomain: "todolist-4eb4c.firebaseapp.com",
    projectId: "todolist-4eb4c",
    storageBucket: "todolist-4eb4c.appspot.com",
    messagingSenderId: "1058371732418",
    appId: "1:1058371732418:web:d27611bd98a2e6a7d44c5b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth
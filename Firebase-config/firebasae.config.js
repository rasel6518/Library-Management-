// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDPNZY-sqoPOOoBH7XvIKQmyg5ymFEbg30",
    authDomain: "online-library-bd.firebaseapp.com",
    projectId: "online-library-bd",
    storageBucket: "online-library-bd.appspot.com",
    messagingSenderId: "689849596304",
    appId: "1:689849596304:web:90479e9b103c49642c1b15"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
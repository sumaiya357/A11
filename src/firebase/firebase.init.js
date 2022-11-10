// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfavDSoLrGCG-XX7nai12P27SEIcSCk24",
  authDomain: "my-client-site.firebaseapp.com",
  projectId: "my-client-site",
  storageBucket: "my-client-site.appspot.com",
  messagingSenderId: "663281956502",
  appId: "1:663281956502:web:e407ab25c7c10a84e8b4b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
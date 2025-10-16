// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYBbnBnfiE9S5rp5Ynt4Rfzdsx7RwnS18",
  authDomain: "pingloop-b13fb.firebaseapp.com",
  projectId: "pingloop-b13fb",
  storageBucket: "pingloop-b13fb.firebasestorage.app",
  messagingSenderId: "49166563305",
  appId: "1:49166563305:web:725e9256bdf9de77583d78"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default firebaseConfig
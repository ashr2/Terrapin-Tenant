// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOwBqY8rE17O3VqTT5zH4a-qA7lg3aoAM",
  authDomain: "leasing-app-375502.firebaseapp.com",
  projectId: "leasing-app-375502",
  storageBucket: "leasing-app-375502.appspot.com",
  messagingSenderId: "1043544555306",
  appId: "1:1043544555306:web:2587fb3c70bcaa1eb46853",
  measurementId: "G-XSC44LHVLK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
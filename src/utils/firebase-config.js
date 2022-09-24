
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyClztSgzUxfpJiXtJ_-1mJecuG7TR3qVHo",
  authDomain: "jb-netflix.firebaseapp.com",
  projectId: "jb-netflix",
  storageBucket: "jb-netflix.appspot.com",
  messagingSenderId: "710861373161",
  appId: "1:710861373161:web:1cc00cc91e9a83ffae7a78",
  measurementId: "G-1RZ6WP3RYT"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);

//1a279ac57d98391c8958097e8ced5b58

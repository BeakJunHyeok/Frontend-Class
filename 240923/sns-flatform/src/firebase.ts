import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA3PIGXN7f9bw1nZ8b0ARNwC3fZ7I-k12k",
  authDomain: "sns-flatform0924.firebaseapp.com",
  projectId: "sns-flatform0924",
  storageBucket: "sns-flatform0924.appspot.com",
  messagingSenderId: "289974252711",
  appId: "1:289974252711:web:4775f362e7c70700af1782",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey || "",
  authDomain: import.meta.env.VITE_authDomain || "",
  databaseURL: import.meta.env.VITE_databaseURL || "",
  projectId: import.meta.env.VITE_projectId || "",
  storageBucket: import.meta.env.VITE_storageBucket || "",
  messagingSenderId: import.meta.env.VITE_messagingSenderId || "",
  appId: import.meta.env.VITE_appId || ""
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
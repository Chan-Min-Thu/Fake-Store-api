import {initializeApp} from 'firebase/app'
import { getAuth } from "firebase/auth";


const  app= initializeApp({
  apiKey: "AIzaSyAWPL73XEcmwfZwXP0nU3AzC8woQziCCK4",
  authDomain: "my-fake-store-project.firebaseapp.com",
  projectId: "my-fake-store-project",
  storageBucket: "my-fake-store-project.appspot.com",
  messagingSenderId: "712892354303",
  appId: "1:712892354303:web:5fd5ab50ae76c1dd5746ca"
});

// Initialize Firebase

export const  auth = getAuth(app);
export default app;
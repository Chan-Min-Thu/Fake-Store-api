import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCRzRG3ILuxC7cqC7xdzTFqhcxEusUTuHI",
  authDomain: "fake-app-604e1.firebaseapp.com",
  projectId: "fake-app-604e1",
  storageBucket: "fake-app-604e1.appspot.com",
  messagingSenderId: "505726307047",
  appId: "1:505726307047:web:5c9356f9b4a724dd763042"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
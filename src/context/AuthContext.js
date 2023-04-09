import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword
} from "firebase/auth";
import { auth } from "../firebase";

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth,email,password);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      console.log(currentUser)
    });
    return () => {
      unsubscribe();
    };
  });
  const logOut = ()=>{
    return signOut(auth);
  }
  const logIn =(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
  }
  return (
    <UserContext.Provider value={{createUser,currentUser,logOut,logIn}}>
      {children}
    </UserContext.Provider>
  );
};

export const AuthUser = ()=>{
     return useContext(UserContext)           
}
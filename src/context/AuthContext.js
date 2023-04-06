import { createContext,useContext,useEffect,useState } from "react";
import {
      createUserWithEmailAndPassword,
      signInWithEmailAndPassword,
      signOut,
      onAuthStateChanged
} from "firebase/auth";
import { auth } from "../firebase";

const UserContext = createContext();

export const AuthContextProvider = ({children})=>{
      const [user,setUser] = useState({});

      const createUser = (email,password)=>{
            return createUserWithEmailAndPassword(auth,email,password)
      }
       
      const login = (email,password)=>{
            return signInWithEmailAndPassword(auth,email,password)
      }
      const logOut = ()=>{
            return signOut(auth)
      }

      useEffect(()=>{
         const subcribe = onAuthStateChanged(auth,(currentUser)=>{
            console.log(currentUser)
            setUser(currentUser)
         });
         return ()=>{
            subcribe()
         }

      },[])
      return(
      <UserContext.Provider value={{createUser,user,logOut,login}}>
         {children}
      </UserContext.Provider>)         
}

export const UserAuth = ()=>{
      return useContext(UserContext)
}

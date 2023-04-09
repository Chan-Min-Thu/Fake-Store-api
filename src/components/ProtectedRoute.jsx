import React from 'react'
import { AuthUser } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
  const { currentUser } =AuthUser();
  if(currentUser){
    return children;            
  }else{
    return <Navigate to='/login'/>            
  }              
}

export default ProtectedRoute
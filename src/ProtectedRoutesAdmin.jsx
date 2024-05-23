import React from 'react';
import { Navigate } from 'react-router-dom';

export const ProtectedRoutesAdmin = ({ children }) => {
  const user = JSON.parse(localStorage.getItem('user'));
  
  if (!user) {
    // If user is not logged in, redirect to login
    return <Navigate to='/login' replace />;
  }
  
  const isAdmin = user.user.email === 'vishalkeshari2004@gmail.com';
  
  if (!isAdmin) {
    // If user is not an admin, redirect to login
    return <Navigate to='/login' replace />;
  }
  
  // If user is an admin, render the children components
  return children;
}

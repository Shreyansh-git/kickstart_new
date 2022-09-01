import React from 'react'
import { Navigate } from 'react-router-dom';

function ProtectedRoute({component:Component,name}) {
    const userToken = localStorage.getItem("userToken");
    // console.log(name);
  return (
    (userToken)? <Component /> : <Navigate to='/' />
  )
}

export default ProtectedRoute

// start creating utility 
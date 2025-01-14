import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const PrvtRoutes = () => {
    const token=sessionStorage.getItem('logintoken');
    let verifyUser=false;
    if(token)
        verifyUser=true;
  return (
    verifyUser?<Outlet/>:<Navigate to={'/'}/>
  )
}

export default PrvtRoutes
<<<<<<< HEAD
import React, { useEffect } from 'react'
import Logout from '../services/Logout'
import useAuthUser from "react-auth-kit/hooks/useAuthUser"
import { Outlet, useNavigate } from 'react-router-dom'
import Sidebar from '../Components/dashboard/Sidebar'

const Admin = () => {
  const navigate = useNavigate()
  const userData: any = useAuthUser()
  useEffect(() => {
    if (userData.role !== "admin") {
      navigate(`/${userData.role}`)
      return
    }
  }, [navigate])
  return (
    <div className='w-full h-screen flex flex-row'>
      <Sidebar/>
      <Outlet/>
      
=======
import React, { useEffect } from 'react';
import useAuthUser from 'react-auth-kit/hooks/useAuthUser';
import useAuthHeader from 'react-auth-kit/hooks/useAuthUser';
import { Outlet, useNavigate } from 'react-router-dom';
import Logout from '../services/Logout';
import Sidebar from '../Components/dashboard/Sidebar';

function Admin() {
  const navigate = useNavigate();
  const userData: any = useAuthUser();

  useEffect(() => {
    if (userData.role !== 'admin') {
      navigate(`/${userData.role}`);
    }
  }, [navigate]);
  const handelLogout = Logout();
  return (
    <div className="w-full h-screen flex flex-row">
      <Sidebar />
      <Outlet />

>>>>>>> 3e6d5db (Implement frontend authentication and authorization)
    </div>
  );
}

<<<<<<< HEAD
export default Admin
=======
export default Admin;
>>>>>>> 3e6d5db (Implement frontend authentication and authorization)

import React, { useEffect } from 'react'
import Logout from '../services/Logout'
import useAuthUser from "react-auth-kit/hooks/useAuthUser"
import { Outlet, useNavigate } from 'react-router-dom'
import Sidebar from '../Components/dashboard/Sidebar'
import DashHeader from '../Components/dashboard/AdminHeader'
import DashFooter from '../Components/dashboard/DashFooter'

const Admin = () => {
  const navigate = useNavigate()
  const userData: any = useAuthUser()
  useEffect(() => {
    if (userData.role !== 'admin') {
      navigate(`/${userData.role}`);
    }
  }, [navigate]);
  return (
    <div className="w-full h-screen flex flex-row">
      <div className='w-[15%] relative flex'>
        <Sidebar />
      </div>

      <div className="flex flex-col w-[85%]">
        <DashHeader />
        <div className="flex-grow bg-gray-100 pt-[20vh]">
          <Outlet />
        </div>
        <DashFooter />
      </div>
    </div>
  );
}

export default Admin;

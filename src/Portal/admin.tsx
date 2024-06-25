import React, { useEffect } from 'react'
import Logout from '../services/Logout'
import useAuthUser from "react-auth-kit/hooks/useAuthUser"
import { Outlet, useNavigate } from 'react-router-dom'
import Sidebar from '../Components/dashboard/Sidebar'
import AdminNav from '../Components/dashboard/AdminNav'
import DashFooter from '../Components/dashboard/DashFooter'

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
      <Sidebar />
      <div className='flex flex-col flex-grow'>
        <AdminNav />
        <div className='flex-grow bg-gray-200 pt-10'>
          <Outlet />
        </div>
        <DashFooter />
      </div>
    </div>
  )
}

export default Admin

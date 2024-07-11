import React, { useEffect } from 'react'
import useSignOut from 'react-auth-kit/hooks/useSignOut'
import Logout from '../services/Logout'
import useAuthUser from 'react-auth-kit/hooks/useAuthUser'
import { useNavigate } from 'react-router-dom'

const Seller = () => {
  const navigate = useNavigate()
  const userData: any = useAuthUser()
  useEffect(() => {
    if (!userData || userData.role !== 'vendor') {
      navigate(`/${userData.role}`);
    }
  }, [navigate])
  const handelLogout = Logout()
  return (
    <div className='w-full h-screen flex flex-col items-center justify-center'>
      <h1 className='text-[32px] font-[700]'>Seller Dashboard</h1>
      <button onClick={handelLogout}>Sign Out</button>
    </div>
  )
}

export default Seller
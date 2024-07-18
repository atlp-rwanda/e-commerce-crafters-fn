import React, { useEffect } from 'react'
import useSignOut from 'react-auth-kit/hooks/useSignOut'
import Logout from '../services/Logout'
import useAuthUser from 'react-auth-kit/hooks/useAuthUser'
import { useNavigate } from 'react-router-dom'
import SellerSellingReport from '../Components/Analytics/SellerAnalytics/AnnualSellingReport'
import SellerWeeklyReport from '../Components/Analytics/SellerAnalytics/WeeklySellingReport'
import SellerOrderStatus from '../Components/Analytics/SellerAnalytics/SellerOrderStatus'
import SellerTopProduct from '../Components/Analytics/SellerAnalytics/TopProducts'


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
    <div>
      <div className="w-full h-screen flex flex-col items-center justify-center">
        <h1 className="text-[32px] font-[700]">Seller Dashboard</h1>
        <button onClick={handelLogout}>Sign Out</button>
      </div>
      <div className="w-[45%] m-auto mb-40">
        {/* <SellerSellingReport /> */}
        {/* <SellerTopProduct />
        <SellerOrderStatus /> */}
        <SellerWeeklyReport />
        <SellerSellingReport />
      </div>
    </div>
  );
}

export default Seller
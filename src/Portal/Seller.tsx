import React, { useEffect } from 'react';
import useSignOut from 'react-auth-kit/hooks/useSignOut';
import useAuthUser from 'react-auth-kit/hooks/useAuthUser';
import { Outlet, useNavigate } from 'react-router-dom';
import Logout from '../services/Logout';
import VendorSidebar from '../Components/vendor/VendorSidebar';
import VendorHeader from '../Components/vendor/VendorHeader';

function Seller() {
  const navigate = useNavigate();
  const userData: any = useAuthUser();
  useEffect(() => {
    if (userData.role !== 'vendor') {
      navigate(`/${userData.role}`);
    }
  }, [navigate]);
  const handelLogout = Logout();
  return (
    <div className="w-full h-screen flex flex-row ">
      <div className='h-screen'>
        <VendorSidebar/>
      </div>
      <div className='flex flex-col gap-[10px] bg-gray-50 w-full'>
        <VendorHeader/>
        <Outlet/>
      </div>

    </div>
  );
}

export default Seller;

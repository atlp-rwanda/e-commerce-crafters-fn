import React, { useEffect } from 'react';
import Logout from '../services/Logout';

function Buyer() {
  const handelLogout = Logout();
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <h1 className="text-[32px] font-[700]">Buyer Dashboard</h1>
      <button onClick={handelLogout}>SignOut</button>
    </div>
  );
}

export default Buyer;

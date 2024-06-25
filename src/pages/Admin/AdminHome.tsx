import React from "react";
import AdminCard from "../../Components/dashboard/AdminCard";

function AdminHome() {
  return (
    // <div className=''>
    //   AdminHome
    // </div>
    <div className="p-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
      <AdminCard>
        <h2 className=" text-sm font-bold">Users</h2>
        <p className="text-2xl">104</p>
        {/* <div className="">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="32" height="32" rx="8" fill="#F2F2F2" />
            <path
              opacity="0.4"
              d="M20.9984 11.9667C20.9484 11.9583 20.8901 11.9583 20.8401 11.9667C19.6901 11.925 18.7734 10.9833 18.7734 9.81666C18.7734 8.62499 19.7318 7.66666 20.9234 7.66666C22.1151 7.66666 23.0734 8.63332 23.0734 9.81666C23.0651 10.9833 22.1484 11.925 20.9984 11.9667Z"
              stroke="#292D32"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              opacity="0.4"
              d="M20.1393 18.0335C21.2809 18.2252 22.5393 18.0252 23.4226 17.4335C24.5976 16.6502 24.5976 15.3668 23.4226 14.5835C22.5309 13.9918 21.2559 13.7918 20.1143 13.9918"
              stroke="#292D32"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              opacity="0.4"
              d="M10.9725 11.9667C11.0225 11.9583 11.0808 11.9583 11.1308 11.9667C12.2808 11.925 13.1975 10.9833 13.1975 9.81666C13.1975 8.62499 12.2391 7.66666 11.0475 7.66666C9.85579 7.66666 8.89746 8.63332 8.89746 9.81666C8.90579 10.9833 9.82246 11.925 10.9725 11.9667Z"
              stroke="#292D32"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              opacity="0.4"
              d="M11.8316 18.0335C10.6899 18.2252 9.43158 18.0252 8.54824 17.4335C7.37324 16.6502 7.37324 15.3668 8.54824 14.5835C9.43991 13.9918 10.7149 13.7918 11.8566 13.9918"
              stroke="#292D32"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16.0004 18.1918C15.9504 18.1835 15.8921 18.1835 15.8421 18.1918C14.6921 18.1502 13.7754 17.2085 13.7754 16.0418C13.7754 14.8502 14.7337 13.8918 15.9254 13.8918C17.1171 13.8918 18.0754 14.8585 18.0754 16.0418C18.0671 17.2085 17.1504 18.1585 16.0004 18.1918Z"
              stroke="#292D32"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M13.5756 20.817C12.4006 21.6003 12.4006 22.8836 13.5756 23.6669C14.9089 24.5586 17.0923 24.5586 18.4256 23.6669C19.6006 22.8836 19.6006 21.6003 18.4256 20.817C17.1006 19.9337 14.9089 19.9337 13.5756 20.817Z"
              stroke="#292D32"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div> */}
      </AdminCard>

      <AdminCard className=" pt-11">
        <h2 className=" text-sm font-bold">Sellers</h2>
        <p className="text-2xl">50</p>
      </AdminCard>

      <AdminCard>
        <h2 className=" text-sm font-bold">Orders</h2>
        <p className="text-2xl">48</p>
      </AdminCard>

      <AdminCard>
        <h2 className=" text-sm font-bold">Transactions</h2>
        <p className="text-2xl">18 0000</p>
      </AdminCard>
    </div>
  );
}

export default AdminHome;

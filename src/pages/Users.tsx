import React from 'react'
import UserTable from '../Components/dashboard/SellerTable';


const Users = () => {
  return (
    // <div className=' font-bold text-lg text-center'>Users Page</div>
    <UserTable
      users={[]}
      onRemove={function (id: number): void {
        throw new Error("Function not implemented.");
      }}
    />
  );
}

export default Users

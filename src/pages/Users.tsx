import React from 'react'
import UserTable from '../Components/dashboard/SellerTable';


const Users = () => {
  const listUsers = [
    { id: 1, name: "user001", email: "u@email.com" },
    { id: 1, name: "user001", email: "u@email.com" },
    { id: 1, name: "user001", email: "u@email.com" },
    { id: 1, name: "user001", email: "u@email.com" },
    { id: 1, name: "user001", email: "u@email.com" },
    { id: 1, name: "user001", email: "u@email.com" },
  ];
  return (
    // <div className=' font-bold text-lg text-center'>Users Page</div>

    <UserTable
      users={ listUsers}
      onRemove={function (id: number): void {
        throw new Error("Function not implemented.");
      }}
    />
  );
}

export default Users

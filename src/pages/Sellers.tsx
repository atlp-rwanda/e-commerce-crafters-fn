import React from "react";
import UserTable from "../Components/dashboard/SellerTable";

const Sellers = () => {
  return (
  // <div className=" font-bold text-lg text-center">Sellers Page</div>
  <UserTable users={[]} onRemove={function (id: number): void {
    throw new Error("Function not implemented.");
  }} />
)
};

export default Sellers;

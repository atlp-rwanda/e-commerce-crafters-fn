import React from "react";
import { useSelectUsersQuery } from "../Redux/Admin/usersSlice";
import SellerTable from "../Components/dashboard/SellerTable";
import LoadingFrame from "../Constants/frameLoader";
import { Circles } from "react-loader-spinner";

const Users = () => {
  const { data: users, isLoading, isError } = useSelectUsersQuery({});

  if (isLoading) return (
    <div className="flex justify-center items-center h-screen">
      <Circles
        visible
        height="80"
        width="80"
        color="#C9974C"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass="circles-wrapper"
      />
    </div>
  );
  if (isError) return <div>Error loading users.</div>;

  return <SellerTable users={users} />;

};

export default Users;

import React from "react";
import { useSelectUsersQuery } from "../Redux/Admin/usersSlice";
import SellerTable from "../Components/dashboard/SellerTable";
import LoadingFrame from "../Constants/frameLoader";
import { Circles } from "react-loader-spinner";

const Users = () => {
  const { data: users, isLoading, isError } = useSelectUsersQuery({});

  if (isLoading) return (
    <div className="flex justify-center items-center h-[90%]">
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
  if (isError) return (
    <div className="flex justify-center items-center  h-[90%]">
      <div className="text-center">
        <p className="text-red-600 font-semibold">
          An error occurred while loading users. Please try again
          later.
        </p>
        <button
          className="mt-3 px-4 py-2 bg-primary text-white rounded-md hover:bg-secondary"
          onClick={() => window.location.reload()}
        >
          Retry
        </button>
      </div>
    </div>
  );

  return <SellerTable users={users} />;

};

export default Users;

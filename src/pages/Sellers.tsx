import React from "react";
import SellerTable from "../Components/dashboard/SellerTable";
import { useSelectSellersQuery } from "../Redux/Admin/sellersSlice";
import { Circles } from "react-loader-spinner";

const Sellers = () => {
  const { data: sellers, isLoading, isError } = useSelectSellersQuery({});
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
  if (isError) return <div>Error loading sellers.</div>;
  return <SellerTable users={sellers} />;
 
}

export default Sellers;

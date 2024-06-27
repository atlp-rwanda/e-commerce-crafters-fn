import React from "react";
import WeeklyReport from "../Components/dashboard/analytics/WeeklyReport";
import OrderStatus from "../Components/dashboard/analytics/OrderStatus";
import SellingReport from "../Components/dashboard/analytics/SellingReport";
import TopProduct from "../Components/dashboard/analytics/TopProducts";

const Analytics = () => {
  return (
    <>
      <div className="flex flex-wrap justify-evenly">
        <OrderStatus
          statusCounts={{
            delivered: 30,
            pending: 20,
            cancelled: 40,
          }}
        />
        <TopProduct />
      </div>

      <div className=" mt-5">
        <SellingReport />
      </div>
    </>
  );
};

export default Analytics;

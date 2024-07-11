import React from "react";
import OrderStatus from "../Components/Analytics/OrderStatus";
import SellingReport from "../Components/Analytics/SellingReport";
import WeeklyReport from "../Components/Analytics/WeeklyReport";
import TopProduct from "../Components/Analytics/TopProduct";
import SellerSellingReport from "../Components/Analytics/SellerAnalytics/AnnualSellingReport";
import SellerWeeklyReport from "../Components/Analytics/SellerAnalytics/WeeklySellingReport";
import SellerTopProduct from "../Components/Analytics/SellerAnalytics/TopProducts";
import SellerOrderStatus from "../Components/Analytics/SellerAnalytics/SellerOrderStatus";

const Analytics = () => {
  return (
    <div>
      {/* <OrderStatus /> */}
      {/* <SellingReport/> */}
      {/* <WeeklyReport/> */}
      {/* <TopProduct/> */}
      {/* <SellerSellingReport/> */}
      {/* <SellerWeeklyReport /> */}
      {/* <SellerTopProduct /> */}
      <SellerOrderStatus/>
      
      
    </div>
  );
};

export default Analytics;


import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import OrderStatus from "../Components/Analytics/OrderStatus";
import SellingReport from "../Components/Analytics/SellingReport";
import { RootState, AppDispatch } from "../Redux/store";
import { fetchOrders } from "../Redux/features/analyticSlice";


const Analytics: React.FC = () => {
 const dispatch: AppDispatch = useDispatch();
  const { isLoading, data, error } = useSelector(
    (state: RootState) => state.orderStatus
  );
  const [statusCounts, setStatusCounts] = useState<{ [key: string]: number }>(
    {}
  );

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  useEffect(() => {
    if (data) {
      const counts: { [key: string]: number } = {};
      data.forEach((order) => {
        counts[order.status] = (counts[order.status] || 0) + 1;
      });
      setStatusCounts(counts);
    }
  }, [data]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching orders</div>;
  }

  return (
    <div className="font-poppins">
      <OrderStatus statusCounts={statusCounts} />
      {/* <SellingReport/> */}
    </div>
  );
};

export default Analytics;

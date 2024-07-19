import { RootState } from "../../../Redux/store";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { fetchOrders } from "../../../Redux/Analytic/orderStatusSlice";
import { AppDispatch } from "../../../Redux/store";
import { Circles } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";

// interface OrderStatusProps {
//   statusCounts: { [key: string]: number };
// }

const OrderStatus: React.FC = () => {
  const navigate = useNavigate();
  const colors = ["#FFC632", "#17BF6B", "#ED3333"];

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


  const handlePieClick = () => {
    navigate("/admin/orderStatus",{state:{datas:data}})
  }

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
    return (
      <div className="flex justify-center items-center">
        <Circles visible height="80" width="80" color="#C9974C" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center  h-[90%]">
        <div className="text-center">
          <p className="text-red-600 font-semibold">
            An error occurred. Please try again
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
  }

  let statusCount = {
    pending: statusCounts.pending,
    delivered: statusCounts.delivered,
    cancelled: statusCounts.cancelled,
  };

  const datas = Object.entries(statusCount).map(([status, value], index) => ({
    name: status,
    value,
    color: colors[index % colors.length],
  }));

  return (
    <div className="font-poppins">
      <div className="flex flex-col w-full m-auto  bg-white rounded-xl shadow-md ">
        <div className="pl-5">
          <h2 className="font-bold pt-3">Order status</h2>
          <p>Total Earnings of the Month</p>
        </div>
        <div className="  flex h-[70%] items-center  justify-center pb-5  ">
          <ResponsiveContainer width="99%" height={300}>
            <PieChart>
              <Tooltip
                contentStyle={{ background: "white", borderRadius: "5px" }}
              />
              <Pie
                data={datas}
                innerRadius={"60"}
                outerRadius={"80"}
                paddingAngle={0}
                dataKey="value"
                onClick={handlePieClick}
              >
                {datas.map((item) => (
                  <Cell key={item.name} fill={item.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="flex flex-col items-start gap-3 mr-16">
            <span className="flex justify-center items-center">
              <span className=" bg-[#17BF6B] w-4 h-4 inline-block rounded-full " />

              <span className="pl-2">Delivered</span>
            </span>
            <span className="flex justify-center items-center">
              <span className=" bg-[#FFC632] w-4 h-4 inline-block rounded-full " />
              <span className="pl-2">Pending</span>
            </span>
            <span className="flex justify-center items-center">
              <span className=" bg-[#ED3333] w-4 h-4 inline-block rounded-full " />
              <span className="pl-2 ">cancelled</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderStatus;

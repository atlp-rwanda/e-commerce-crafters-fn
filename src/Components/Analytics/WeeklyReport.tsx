import React, { useEffect } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { AppDispatch, RootState } from "../../Redux/store";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchWeeklyReport } from "../../Redux/Analytic/WeeklySellingSlice";


const WeeklyReport = () => {

  const dispatch: AppDispatch = useDispatch();
  const { weeklySales, isLoading, error } = useSelector(
    (state: RootState) => state.weeklyReport
  );

  useEffect(() => {
  dispatch(fetchWeeklyReport())
  }, [dispatch])
  
  const data = weeklySales.map((day) => ({
    name: day.day,
      TotalSales:day.totalSales
  }))

  return (
    <div
      style={{ width: "40%", height: "350px" }}
      className="flex  flex-col m-auto mt-80 text-xs  rounded-lg shadow-2xl border-gray-400"
    >
      <div className="py-2 pl-10 relative">
        <h2 className="font-bold text-lg">Reports</h2>
        <span className="flex gap-2 mt-3">
          <div className=" bg-[#37C9EE] w-3 h-3 inline-block rounded-full " />
          <span>Weekly report</span>
          <img
            src="https://static.vecteezy.com/system/resources/previews/026/622/025/original/add-category-icon-symbol-design-illustration-vector.jpg" className="w-5 h-5 absolute top-3 right-2"
            alt="category-icon"
          />
        </span>
      </div>
      <ResponsiveContainer width="99%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="TotalSales" fill="#013362" barSize={30} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WeeklyReport;
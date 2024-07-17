import React from "react";
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

const data = [
  {
    name: "January",
    Expense: 4000,
    Income: 2400,
    amt: 2400,
  },
  {
    name: "February",
    Expense: 3000,
    Income: 1398,
    amt: 2210,
  },
  {
    name: "March",
    Expense: 2000,
    Income: 9800,
    amt: 2290,
  },
  {
    name: "April",
    Expense: 2780,
    Income: 3908,
    amt: 2000,
  },
  {
    name: "May",
    Expense: 1890,
    Income: 4800,
    amt: 2181,
  },
  {
    name: "June",
    Expense: 2390,
    Income: 3800,
    amt: 2500,
  },
  {
    name: "July",
    Expense: 3490,
    Income: 4300,
    amt: 2100,
  },
  {
    name: "August",
    Expense: 3490,
    Income: 4300,
    amt: 2100,
  },
  {
    name: "September",
    Expense: 3490,
    Income: 4300,
    amt: 2100,
  },
  {
    name: "October",
    Expense: 3490,
    Income: 4300,
    amt: 2100,
  },
  {
    name: "November",
    Expense: 3490,
    Income: 4300,
    amt: 2100,
  },
  {
    name: "December",
    Expense: 3490,
    Income: 4300,
    amt: 2100,
  },
];

const SellingReport = () => {
  return (
    <div
      style={{ width: "80%", height: "400px" }}
      className="flex flex-col m-auto text-xs ml-100 rounded-lg shadow-2xl bg-white mb-5"
    >
      <div className="py-8 pl-10">
        <h2 className="font-bold text-xl">Reports</h2>
        <span className=" bg-[#32fff8]  rounded-full " />
        <p>Year selling Analytics</p>
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
          <Bar dataKey="Income" fill="#C9974C" background={{ fill: "#eee" }} />
          <Bar dataKey="Expense" fill="#013362" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SellingReport;

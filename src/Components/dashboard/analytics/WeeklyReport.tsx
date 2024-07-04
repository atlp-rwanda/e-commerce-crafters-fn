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
    name: "Monday",
    Expense: 4000,
    Income: 2400,
    amt: 2400,
  },
  {
    name: "Tuesday",
    Expense: 3000,
    Income: 1398,
    amt: 2210,
  },
  {
    name: "Wednesday",
    Expense: 2000,
    Income: 9800,
    amt: 2290,
  },
  {
    name: "Thurday",
    Expense: 2780,
    Income: 3908,
    amt: 2000,
  },
  {
    name: "Friday",
    Expense: 1890,
    Income: 4800,
    amt: 2181,
  },
  {
    name: "Saturday",
    Expense: 2390,
    Income: 3800,
    amt: 2500,
  },
  {
    name: "Sunday",
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
];

const WeeklyReport = () => {
  return (
    <div
      style={{width: '100%', height: '100%'}}
      className="flex ml-10 text-xs  rounded-lg shadow-2xl border-gray-400 bg-white w-full h-full"
    >
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

export default WeeklyReport;

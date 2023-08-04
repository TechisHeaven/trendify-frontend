import React from "react";
import { AiOutlineInbox } from "react-icons/ai";
import { BiDollar } from "react-icons/bi";
import { MdAllInbox } from "react-icons/md";
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
    name: "jan",
    sale: 0,
    amt: 2400,
  },
  {
    name: "feb",
    sale: 0,
    amt: 2210,
  },
  {
    name: "mar",
    sale: 0,
    amt: 2290,
  },
  {
    name: "apr",
    sale: 0,
    amt: 2000,
  },
  {
    name: "may",
    sale: 0,
    amt: 2181,
  },
  {
    name: "june",
    sale: 0,
    amt: 2500,
  },
  {
    name: "july",
    sale: 1200,
    amt: 2100,
  },
  {
    name: "aug",
    sale: 200,
    amt: 2100,
  },
  {
    name: "sep",
    sale: 0,
    amt: 2100,
  },
  {
    name: "oct",
    sale: 0,
    amt: 2100,
  },
  {
    name: "nov",
    sale: 0,
    amt: 2100,
  },
  {
    name: "dec",
    sale: 0,
    amt: 2100,
  },
];

const index = () => {
  return (
    <div className="max-w-[1280px] m-auto">
      <div className="wrapper p-8 flex flex-col gap-4">
        <div>
          <h1 className="font-semibold text-2xl">Dashboard</h1>
          <p className="text-sm text-gray">Overview of your store</p>
        </div>
        <div className="dashboard  capitalize flex flex-col gap-2">
          <div className="sub-container flex justify-between gap-2">
            <div className="container active:shadow-md shadow-sm rounded-md transition-all hover:bg-light-white cursor-pointer bg-container-white relative p-4 py-6 border border-gray-border">
              <p className="text-gray text-sm">Total Revenue</p>
              <h1 className="text-2xl font-semibold">$1250</h1>
              <div className="absolute top-4 right-4">
                <BiDollar className="w-5 h-5 text-gray" />
              </div>
            </div>
            <div className="container shadow-sm active:shadow-md rounded-md transition-all hover:bg-light-white cursor-pointer bg-container-white relative p-4 py-6 border border-gray-border">
              <p className="text-gray text-sm">sales</p>
              <h1 className="text-2xl font-semibold">+12</h1>
              <div className="absolute top-4 right-4">
                <AiOutlineInbox className="w-5 h-5 text-gray" />
              </div>
            </div>
            <div className="container shadow-sm active:shadow-md rounded-md transition-all hover:bg-light-white cursor-pointer bg-container-white relative p-4 py-6 border border-gray-border">
              <p className="text-gray text-sm">Product in stock</p>
              <h1 className="text-2xl font-semibold">2</h1>
              <div className="absolute top-4 right-4">
                <MdAllInbox className="w-5 h-5 text-gray" />
              </div>
            </div>
          </div>
          <div className="main-dashboard-container active:shadow-md select-none cursor-pointer p-4 bg-container-white border border-gray-border shadow-sm rounded-md">
            <h1 className="font-semibold">overview</h1>
            <div className="w-full h-[500px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <XAxis dataKey="name" stroke="#00000" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="sale" fill="#0069E3" barSize={60} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;

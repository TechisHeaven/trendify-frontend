import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import OrdersTable from "./OrdersTable";

const tableData = [
  {
    id: 1,
    productId: 1,
    orderId: "#232323",
    date: "19/02/2023",
    name: "white shirts",
    total: "1200",
    status: "1",
  },
  {
    id: 2,
    productId: 2,
    orderId: "#131213",
    date: "19/02/2023",
    name: "green shirts",
    total: "1200",
    status: "2",
  },
  {
    id: 3,
    productId: 3,
    orderId: "#523523",
    date: "19/02/2023",
    name: "orange suit",
    total: "1200",
    status: "3",
  },
  {
    id: 4,
    productId: 4,
    orderId: "#222313",
    date: "19/02/2023",
    name: "orange suit",
    total: "1200",
    status: "4",
  },
];

const OrderHistory = () => {
  const [tableDataFiltered, setTableDataFiltered] = useState(tableData);



  const handleSearch = (e) => {
    const inputValue = e.target.value
    if (inputValue) {
      const finaltableData = tableData.filter((value) => {
        return value.name.toLowerCase().includes(inputValue.toLowerCase());
      });
      setTableDataFiltered(finaltableData);
      return
    }
    return setTableDataFiltered(tableData);
  };

  return (
    <div className="border border-gray-border p-4 rounded-md">
      <div className="wrapper flex flex-col gap-8">
        <div className="heading">
          <h1 className="text-2xl font-semibold">Order History</h1>
          <p className="text-gray">here you can manage orders</p>
        </div>
        <div className="searchBar relative w-full">
          <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
            <AiOutlineSearch className="text-gray-light text-xl" />
          </div>
          <input
            type="text"
            onChange={(e) => handleSearch(e)}
            placeholder="Search for order Id or Product"
            className="border border-gray-border p-2 rounded-md outline-none pl-8 w-full"
          />
        </div>
        <div>
          <OrdersTable tableData={tableDataFiltered} />
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;

import {
  Button,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { AiOutlineDelete, AiOutlinePlus } from "react-icons/ai";
import { BiSolidEdit } from "react-icons/bi";
import { FiMoreHorizontal } from "react-icons/fi";
import { IoCopyOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
const BillboardsData = [
  {
    _id: 1,
    name: "green suit",
    phone: "2392983828",
    address: "b-2, 348 kakrola America",
    qty: 1,
    price: "100",
    status: 0,
    date: "june 20th,2023",
  },
  {
    _id: 2,
    name: "green suit",
    phone: "2392983828",
    address: "b-2, 348 kakrola America",
    qty: 2,
    price: "100",
    status: 1,
    date: "june 22th,2023",
  },
  {
    _id: 3,
    name: "white shirt",
    phone: "2392983828",
    address: "b-2, 348 kakrola America",
    qty: 5,
    price: "100",
    status: 2,
    date: "june 10th,2023",
  },
  {
    _id: 4,
    name: "white shirt",
    phone: "2392983828",
    address: "b-2, 348 kakrola America",
    qty: 1,
    price: "100",
    status: 3,
    date: "june 10th,2023",
  },
];
const index = () => {
  const [filteredData, setFilteredData] = useState(BillboardsData);
  const [isCopied, setIsCopied] = useState(false);
  const toast = useToast();
  //filter data
  const handleSearch = (e) => {
    const searchValue = e.target.value.toLowerCase();
    const newData = BillboardsData.filter((data) =>
      data.name.toLowerCase().includes(searchValue)
    );
    setFilteredData(newData);
  };

  //copy id from user and show a toast
  const handleCopyClick = (id) => {
    navigator.clipboard
      .writeText(id)
      .then(() => {
        setIsCopied(true);

        // Show an toast to notify the user
        toast({
          title: "Id Copied.",
          status: "success",
          duration: 2000,
          position: "top",
          isClosable: true,
        });

        // Reset the copied status after a short delay
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      })
      .catch((error) => {
        console.error("Failed to copy: ", error);
        toast({
          title: `Failed to copy:${error}`,
          status: "erro",
          duration: 2000,
          position: "top",
          isClosable: true,
        });
      });
  };

  return (
    <div className="max-w-[1280px] m-auto">
      <div className="wrapper p-8 flex flex-col gap-4 capitalize">
        <div className="flex justify-between">
          <div>
            <h1 className="font-semibold text-2xl">Orders</h1>
            <p className="text-sm text-gray">manage Orders for your store</p>
          </div>
        </div>
        <div className=" flex flex-col gap-4">
          <div className="search max-w-[360px]">
            <input
              type="text"
              onChange={(e) => handleSearch(e)}
              placeholder="Search Categories"
              className="p-2 pl-4 rounded-md border border-gray-border w-full"
            />
          </div>
          <div className="billboards border border-gray-border rounded-md">
            <TableContainer>
              <Table variant="simple">
                <TableCaption>Trendify Orders</TableCaption>
                <Thead>
                  <Tr>
                    <Th>Name</Th>
                    <Th>phone</Th>
                    <Th>address</Th>
                    <Th>qty</Th>
                    <Th>price</Th>
                    <Th>status</Th>
                    <Th>date</Th>
                    <Th>action</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {filteredData.length <= 0 && (
                    <Tr className="p-4 font-semibold text-sm capitalize text-gray-dark">
                      <Td>No Result Found</Td>
                    </Tr>
                  )}
                  {filteredData.map((value) => {
                    return (
                      <Tr key={value._id}>
                        <Td>{value.name}</Td>
                        <Td>{value.phone}</Td>
                        <Td>{value.address}</Td>
                        <Td>{value.qty}</Td>
                        <Td>${value.price}</Td>
                        <Td>
                          {value.status === 0 && "pending"}
                          {value.status === 1 && "schedule"}
                          {value.status === 2 && "dispatch"}
                          {value.status === 3 && "delivered"}
                          {value.status === 4 && "cancelled"}
                        </Td>

                        <Td>{value.date}</Td>
                        <Td>
                          <Popover placement="bottom-end">
                            <PopoverTrigger>
                              <button>
                                <FiMoreHorizontal className="cursor-pointer" />
                              </button>
                            </PopoverTrigger>
                            <PopoverContent width={150}>
                              <PopoverArrow />
                              <PopoverCloseButton />
                              <PopoverHeader>Actions</PopoverHeader>
                              <PopoverBody
                                className="flex flex-col"
                                padding={0}
                              >
                                <div className="flex flex-col">
                                  <div
                                    onClick={() => handleCopyClick(value._id)}
                                    className="flex gap-2 p-2 hover:bg-container-white transition-all cursor-pointer"
                                  >
                                    <IoCopyOutline /> Copy Id
                                  </div>
                                  <Popover placement="auto-end">
                                    <PopoverTrigger>
                                      <p className="flex gap-2 p-2 hover:bg-container-white transition-all cursor-pointer">
                                        <BiSolidEdit />
                                        Update Status
                                      </p>
                                    </PopoverTrigger>
                                    <PopoverContent width={150}>
                                      <PopoverArrow />
                                      <PopoverCloseButton />
                                      <PopoverHeader>Status</PopoverHeader>
                                      <PopoverBody
                                        className="flex flex-col"
                                        padding={0}
                                      >
                                        <p className="flex gap-2 p-2 hover:bg-container-white transition-all cursor-pointer">
                                          Pending
                                        </p>
                                        <p className="flex gap-2 p-2 hover:bg-container-white transition-all cursor-pointer">
                                          Scheduled
                                        </p>
                                        <p className="flex gap-2 p-2 hover:bg-container-white transition-all cursor-pointer">
                                          Dispatch
                                        </p>
                                        <p className="flex gap-2 p-2 hover:bg-container-white transition-all cursor-pointer">
                                          Delivered
                                        </p>
                                      </PopoverBody>
                                    </PopoverContent>
                                  </Popover>
                                </div>
                              </PopoverBody>
                            </PopoverContent>
                          </Popover>
                        </Td>
                      </Tr>
                    );
                  })}
                </Tbody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;

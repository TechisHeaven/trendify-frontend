import {
  Button,
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
    catogeries: "suit",
    price: "100",
    archieved: true,
    stock: 10,
    size: "large",
    color: "#000000",
    pic: "banner.png",
    date: "june 20th,2023",
  },
  {
    _id: 2,
    name: "green suit",
    catogeries: "suit",
    pic: "suit.png",
    archieved: false,
    stock: 0,
    size: "large",
    color: "#000000",
    price: "300",
    date: "june 22th,2023",
  },
  {
    _id: 3,
    name: "white shirt",
    catogeries: "shirt",
    pic: "shirt.png",
    price: "200",
    stock: 20,
    archieved: true,
    size: "large",
    color: "#000000",
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
            <h1 className="font-semibold text-2xl">Products</h1>
            <p className="text-sm text-gray">manage Products for your store</p>
          </div>
          <Button style={{ background: "black", color: "white" }}>
            <Link
              to="/products/manageProducts/add"
              className="capitalize text-sm flex items-center gap-1 text-white"
            >
              <AiOutlinePlus />
              add new
            </Link>
          </Button>
        </div>
        <div className=" flex flex-col gap-4">
          <div className="search max-w-[360px]">
            <input
              type="text"
              onChange={(e) => handleSearch(e)}
              placeholder="Search Products"
              className="p-2 pl-4 rounded-md border border-gray-border w-full"
            />
          </div>
          <div className="billboards border border-gray-border rounded-md">
            <TableContainer>
              <Table variant="simple">
                <TableCaption>Trendify Products</TableCaption>
                <Thead>
                  <Tr>
                    <Th>Image</Th>
                    <Th>Name</Th>
                    <Th>Archieved</Th>
                    <Th>stock</Th>
                    <Th>price</Th>
                    <Th>catogeries</Th>
                    <Th>size</Th>
                    <Th>color</Th>
                    <Th>Date</Th>
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
                        <Td>
                          {" "}
                          <img
                            className="w-16 rounded-md aspect-square object-cover object-center"
                            src={value.pic}
                            alt="product-pic"
                          />
                        </Td>
                        <Td>{value.name}</Td>
                        <Td>{value.archieved.toString()}</Td>
                        <Td>{value.stock}</Td>
                        <Td>${value.price}</Td>
                        <Td>{value.catogeries}</Td>
                        <Td>{value.size}</Td>
                        <Td>{value.color}</Td>
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
                                <div
                                  onClick={() => handleCopyClick(value._id)}
                                  className="flex gap-2 p-2 hover:bg-container-white transition-all cursor-pointer"
                                >
                                  <IoCopyOutline /> Copy Id
                                </div>
                                <Link
                                  to={`/products/manageProducts/edit?id=${value._id}`}
                                  className="flex gap-2 p-2 hover:bg-container-white transition-all cursor-pointer"
                                >
                                  <BiSolidEdit />
                                  Update
                                </Link>
                                <div className="flex gap-2 p-2 hover:bg-container-white transition-all cursor-pointer">
                                  <AiOutlineDelete />
                                  Delete
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

import React, { useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import {
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  useToast,
} from "@chakra-ui/react";

const Header = () => {
  const [inputValue, setInputValue] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const toast = useToast();
  const user = [];

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };
  //set search query
  const handleSearch = () => {
    const basePath = "/category/";
    const searchParams = new URLSearchParams(location.search);
    if (!searchParams.get("search")) {
      searchParams.delete("search");
    }
    searchParams.set("search", inputValue);
    const query = searchParams.toString() ? `?${searchParams.toString()}` : "";
    // if current location and basepath mathces or not
    // if (location.pathname === basePath) {
    //   navigate({ search: query });
    // } else {
    //   toast({
    //     title: "Please Select A Catogray First.",
    //     status: "warning",
    //     duration: 3000,
    //     isClosable: true,
    //     position: "top-right",
    //   });
    // }

    navigate({ search: query });
  };

  return (
    <div className="header w-full border-b-gray-light/50 border">
      <div className="header-wrapper max-w-[1280px] flex flex-row w-full justify-between m-auto p-3">
        <div className="left-nav flex gap-5 items-center">
          <h1 className="font-bold text-xl">
            <NavLink to={"/"}>TRENDIFY</NavLink>
          </h1>
          <ul className="nav-items flex gap-4 font-medium text-sm">
            <li className="capitalize">
              <NavLink
                to={"/category/suits"}
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-black" : "text-gray"
                }
              >
                suits
              </NavLink>
            </li>
            <li className="capitalize">
              <NavLink
                to={"/category/shirts"}
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-black" : "text-gray"
                }
              >
                shirts
              </NavLink>
            </li>
            <li className="capitalize">
              <NavLink
                to={"/category/glasses"}
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-black" : "text-gray"
                }
              >
                glasses
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="right-nav flex flex-row gap-2 items-center">
          <div className="searchBar relative">
            <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
              <AiOutlineSearch className="text-gray-light text-xl" />
            </div>
            <input
              onChange={(e) => handleInputChange(e)}
              type="text"
              placeholder="search"
              value={inputValue}
              onKeyUp={handleKeyPress}
              className="border border-gray-border p-2 rounded-md outline-none pl-8"
            />
          </div>
          <Link
            to={"/cart"}
            className="cart bg-black flex gap-2 p-2 px-4 m-auto rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M5 1.66669L2.5 5.00002V16.6667C2.5 17.1087 2.67559 17.5326 2.98816 17.8452C3.30072 18.1578 3.72464 18.3334 4.16667 18.3334H15.8333C16.2754 18.3334 16.6993 18.1578 17.0118 17.8452C17.3244 17.5326 17.5 17.1087 17.5 16.6667V5.00002L15 1.66669H5Z"
                stroke="white"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2.5 5H17.5"
                stroke="white"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.3334 8.33331C13.3334 9.21737 12.9822 10.0652 12.357 10.6903C11.7319 11.3155 10.8841 11.6666 10 11.6666C9.11597 11.6666 8.26812 11.3155 7.643 10.6903C7.01788 10.0652 6.66669 9.21737 6.66669 8.33331"
                stroke="white"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="text-white">0</p>
          </Link>
          {!user ? (
            <Popover direction="rtl" placement="bottom-end">
              <PopoverTrigger>
                <div className="profile bg-black p-3 rounded-full m-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                  >
                    <path
                      d="M8.57001 1.9C9.73001 1.9 10.67 2.84 10.67 4C10.67 5.16 9.73001 6.1 8.57001 6.1C7.41001 6.1 6.47001 5.16 6.47001 4C6.47001 2.84 7.41001 1.9 8.57001 1.9ZM8.57001 10.9C11.54 10.9 14.67 12.36 14.67 13V14.1H2.47001V13C2.47001 12.36 5.60001 10.9 8.57001 10.9ZM8.57001 0C6.36001 0 4.57001 1.79 4.57001 4C4.57001 6.21 6.36001 8 8.57001 8C10.78 8 12.57 6.21 12.57 4C12.57 1.79 10.78 0 8.57001 0ZM8.57001 9C5.90001 9 0.570007 10.34 0.570007 13V15C0.570007 15.55 1.02001 16 1.57001 16H15.57C16.12 16 16.57 15.55 16.57 15V13C16.57 10.34 11.24 9 8.57001 9Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader>
                  <div className="font-semibold p-2">Himanshu verma</div>
                </PopoverHeader>
                <PopoverBody cursor={"pointer"}>
                  <div className="p-2">Logout</div>
                </PopoverBody>
              </PopoverContent>
            </Popover>
          ) : (
            <Link to={'/profile'} className="profile bg-black p-3 rounded-full m-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
              >
                <path
                  d="M8.57001 1.9C9.73001 1.9 10.67 2.84 10.67 4C10.67 5.16 9.73001 6.1 8.57001 6.1C7.41001 6.1 6.47001 5.16 6.47001 4C6.47001 2.84 7.41001 1.9 8.57001 1.9ZM8.57001 10.9C11.54 10.9 14.67 12.36 14.67 13V14.1H2.47001V13C2.47001 12.36 5.60001 10.9 8.57001 10.9ZM8.57001 0C6.36001 0 4.57001 1.79 4.57001 4C4.57001 6.21 6.36001 8 8.57001 8C10.78 8 12.57 6.21 12.57 4C12.57 1.79 10.78 0 8.57001 0ZM8.57001 9C5.90001 9 0.570007 10.34 0.570007 13V15C0.570007 15.55 1.02001 16 1.57001 16H15.57C16.12 16 16.57 15.55 16.57 15V13C16.57 10.34 11.24 9 8.57001 9Z"
                  fill="white"
                />
              </svg>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;

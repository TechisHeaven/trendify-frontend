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
  const navitems = [
    {
      _id: 1,
      name: "overview",
      path: "/",
    },
    {
      _id: 2,
      name: "billboards",
      path: "/billboards",
    },
    {
      _id: 3,
      name: "Categories",
      path: "/Categories",
    },
    {
      _id: 4,
      name: "sizes",
      path: "/sizes",
    },
    {
      _id: 5,
      name: "colors",
      path: "/colors",
    },
    {
      _id: 6,
      name: "products",
      path: "/products",
    },
    {
      _id: 7,
      name: "orders",
      path: "/orders",
    },
  ];
  const toast = useToast();
  const user = [];

  return (
    <div className="header w-full border-b-gray-light/50 border">
      <div className="header-wrapper max-w-[1280px] flex flex-row w-full justify-between m-auto p-3">
        <div className="left-nav flex gap-5 items-center">
          <h1 className="font-bold text-xl">
            <NavLink to={"/"} className={"uppercase"}>
              Dashboard
            </NavLink>
          </h1>
          <ul className="nav-items flex gap-4 font-medium text-sm">
            {navitems.map((nav) => {
              return (
                <li className="capitalize" key={nav._id}>
                  <NavLink
                    to={nav.path}
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-black"
                        : "text-gray"
                    }
                  >
                    {nav.name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="right-nav flex flex-row gap-2 items-center">
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
            <Link
              to={"/profile"}
              className="profile bg-black p-3 rounded-full m-auto"
            >
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

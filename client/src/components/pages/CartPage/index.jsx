import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import CartProducts from "./CartProducts";

const index = () => {
  return (
    <div className="m-auto max-w-[1280px] p-8">
      <div className="wrapper">
        <div className="heading">
          <h1 className="font-semibold text-xl">Shopping Cart</h1>
          <div className="text-sm text-gray">
            <Breadcrumb
              spacing="8px"
              separator={<AiOutlineRight color="gray.500" />}
            >
              <BreadcrumbItem>
                <Link className="hover:underline" to="/">
                  Home
                </Link>
              </BreadcrumbItem>

              <BreadcrumbItem isCurrentPage>
                <Link className="hover:underline" href="/cart">
                  Cart
                </Link>
              </BreadcrumbItem>
            </Breadcrumb>
          </div>
        </div>
        <div className="cartWrapper">
          <CartProducts/>
        </div>
      </div>
    </div>
  );
};

export default index;

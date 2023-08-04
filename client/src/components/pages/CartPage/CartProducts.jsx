import { Button, Image } from "@chakra-ui/react";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const CartProducts = () => {
  return (
    <div className="p-4">
      <div className="wrapper flex flex-row justify-between gap-8">
        <div className="cart-products-wrapper w-full flex-col gap-4 flex">
          <div className="cart-product flex flex-row gap-4 w-full p-4 border border-gray-border rounded-md">
            <Image className="w-[100px] aspect-square" src="./suit.png" />
            <div className="product-info flex flex-row justify-between w-full">
              <div>
                <h1 className="font-semibold">Green Suits</h1>
                <p className="price text-sm font-semibold">$59.00</p>
                <div className="quantity-btn"></div>
              </div>
              <div className="varient flex flex-row gap-2 text-gray-light text-sm">
                <p>Green</p>
                <span className="w-[1px] h-6 bg-gray-light"></span>
                <p>Large</p>
              </div>
              <div className="close">
                <div className="closeBtn cursor-pointer p-2 border border-gray-border rounded-full shadow-md">
                  <AiOutlineClose />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="summary capitalize flex gap-4 justify-between flex-col w-full max-h-full h-full max-w-[380px] bg-container-white p-4 border border-gray-border rounded-md">
          <h1 className="font-semibold text-xl">Order summary</h1>
          <hr />
          <div className="total flex justify-between">
            <h1>Order total</h1>
            <p className="font-semibold">$59</p>
          </div>
          <div className="w-full">
            <Link to={"/checkout"}>
              <Button
                className="w-full"
                style={{ background: "black", color: "white" }}
              >
                Checkout
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProducts;

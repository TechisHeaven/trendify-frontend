import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Image,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus, AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const index = () => {
  const [inputChecked, setInputChecked] = useState(0);
  const [value, setValue] = useState("1");

  const handleInputChange = () => {
    if (inputChecked === 0) {
      return setInputChecked(1);
    }
    return setInputChecked(0);
  };
  return (
    <div className="max-w-[1280px] m-auto">
      <div className="wrapper p-8 capitalize flex flex-col gap-4">
        <h1 className="font-semibold text-2xl">Checkout</h1>
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

            <BreadcrumbItem>
              <Link className="hover:underline" to="/cart">
                Cart
              </Link>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
              <Link className="hover:underline" to="/checkout">
                Checkout
              </Link>
            </BreadcrumbItem>
          </Breadcrumb>
        </div>
        <div className="Checkout-container flex gap-8">
          <div className="informations bg-container-white w-full max-w-[690px] border border-gray-border rounded-sm">
            <div className="user-info justify-between flex flex-row flex-wrap p-4 gap-4">
              <div className="inputName flex flex-col max-w-[310px] w-full">
                <label htmlFor="name" className="text-sm">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="bg-light-white border border-gray-border p-2 rounded-md outline-none"
                  placeholder="Full Name"
                />
              </div>
              <div className="inputMobile flex flex-col max-w-[310px] w-full">
                <label htmlFor="number" className="text-sm">
                  Mobile
                </label>
                <input
                  type="number"
                  id="number"
                  className="bg-light-white border border-gray-border p-2 rounded-md outline-none"
                  placeholder="Mobile"
                />
              </div>
              <div className="inputEmail flex flex-col max-w-[310px] w-full">
                <label htmlFor="email" className="text-sm">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-light-white border border-gray-border p-2 rounded-md outline-none"
                  placeholder="Email"
                />
              </div>
              <div className="inputCity flex flex-col max-w-[310px] w-full">
                <label htmlFor="city" className="text-sm">
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  className="bg-light-white border border-gray-border p-2 rounded-md outline-none"
                  placeholder="City"
                />
              </div>
              <div className="inputState flex flex-col max-w-[310px] w-full">
                <label htmlFor="State" className="text-sm">
                  State
                </label>
                <input
                  type="text"
                  id="State"
                  className="bg-light-white border border-gray-border p-2 rounded-md outline-none"
                  placeholder="State"
                />
              </div>
              <div className="inputZip flex flex-col max-w-[140px] w-full">
                <label htmlFor="Zip" className="text-sm">
                  Zip
                </label>
                <input
                  type="text"
                  id="Zip"
                  className="bg-light-white border border-gray-border p-2 rounded-md outline-none"
                  placeholder="Zip"
                />
              </div>
              <div className="inputCountry flex flex-col max-w-[140px] w-full">
                <label htmlFor="Country" className="text-sm">
                  Country
                </label>
                <input
                  type="text"
                  id="Country"
                  className="bg-light-white border border-gray-border p-2 rounded-md outline-none"
                  placeholder="Country"
                />
              </div>
              <div className="inputAddress flex flex-col w-full">
                <label htmlFor="Address" className="text-sm">
                  Address
                </label>
                <input
                  type="text"
                  id="Address"
                  className="bg-light-white border border-gray-border p-2 rounded-md outline-none"
                  placeholder="Address"
                />
              </div>
            </div>
            <hr className="p-2 w-[90%] m-auto" />
            <div className="SheduleDelivery p-4 pt-0">
              <div className="Schedule flex flex-row gap-2 items-center p-8 pb-2 pl-0 pt-0">
                <label
                  htmlFor="schedule-delivery"
                  className="font-semibold text-xl select-none"
                >
                  Schedule Delivery
                </label>
                <label
                  htmlFor="schedule-delivery"
                  className={`btn cursor-pointer duration-300 transition-all w-12 ${
                    !inputChecked
                      ? "bg-white border border-gray-border"
                      : "bg-black border border-black"
                  } h-7 relative rounded-full`}
                >
                  <span
                    className={` w-[20px] h-[20px] absolute rounded-full transition-all duration-300 top-[3px] ${
                      !inputChecked ? "left-1 bg-black" : " left-6 bg-white"
                    }`}
                  ></span>
                </label>
                <input
                  hidden
                  checked={inputChecked}
                  onChange={handleInputChange}
                  type="radio"
                  name="schedule-delivery"
                  id="schedule-delivery"
                />
              </div>

              {inputChecked ? (
                <div className="items flex gap-4 flex-col">
                  <div className="inputDates flex flex-col w-full">
                    <label htmlFor="Dates" className="text-sm">
                      Dates
                    </label>
                    <input
                      type="datetime-local"
                      id="Dates"
                      className="bg-light-white border border-gray-border p-2 rounded-md outline-none"
                      placeholder="Dates"
                    />
                  </div>
                  <div className="inputNotes flex flex-col w-full">
                    <label htmlFor="name" className="text-sm">
                      Notes
                    </label>
                    <input
                      type="text"
                      id="Notes"
                      className="bg-light-white border border-gray-border p-2 rounded-md outline-none"
                      placeholder="Notes"
                    />
                  </div>
                </div>
              ) : null}
            </div>
            <hr className="p-2 w-[90%] m-auto" />
            <div className="payment-method p-4 pt-0 gap-4 flex flex-col pb-6 mb-6">
              <h1 className="font-semibold text-xl">Payment Methods</h1>
              <div className="payment flex gap-4 flex-row">
                <RadioGroup
                  onChange={setValue}
                  colorScheme="gray"
                  value={value}
                >
                  <Stack direction="row">
                    <Radio value="1">
                      <p
                        className={`font-semibold text-sm  ${
                          value == 1 ? "text-black" : "text-gray"
                        }`}
                      >
                        Online Payment
                      </p>
                    </Radio>
                    <Radio value="2">
                      <p
                        className={`font-semibold text-sm  ${
                          value == 2 ? "text-black" : "text-gray"
                        }`}
                      >
                        Cash on delivery
                      </p>
                    </Radio>
                  </Stack>
                </RadioGroup>
              </div>
            </div>
          </div>
          <div className="summary bg-container-white max-w-[480px] w-full p-4 border border-gray-border rounded-sm gap-2 flex flex-col">
            <h1 className="font-semibold text-lg">Order summary</h1>
            <div className="items-details flex flex-col justify-between h-full">
              <div className="products flex flex-col gap-4">
                <div className="product-item flex h-16 gap-2 w-full">
                  <Image
                    src="./suit.png"
                    className="aspect-square w-full max-w-[75px] object-cover rounded-md"
                  />
                  <div className="product-detail flex flex-row justify-between w-full items-center">
                    <div>
                      <h1 className="font-semibold">Green Suit</h1>
                      <p className="text-sm text-gray-light">Green Large </p>
                      <p className="price font-semibold">$59</p>
                    </div>
                    <div className="btn gap-2 cursor-pointer rounded-sm bg-light-white border border-gray-border items-center flex flex-row">
                      <div className="minus hover:bg-gray-border transition-all p-2 px-2">
                        <AiOutlineMinus />
                      </div>
                      <p>1</p>
                      <div className="minus hover:bg-gray-border transition-all p-2 px-2">
                        <AiOutlinePlus />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="totals flex flex-col gap-2">
                <hr />
                <div className="subtotal py-2 flex flex-row justify-between">
                  <p className="text-gray-light">Subtotal</p>
                  <p className="font-semibold">$59.00</p>
                </div>
                <div className="subtotal py-2 flex flex-row justify-between">
                  <p className="text-gray-light">Shipping</p>
                  <p className="font-semibold">$00.00</p>
                </div>
                <hr />
                <div className="total py-2 flex flex-row justify-between">
                  <p className="text-gray-light">total</p>
                  <p className="font-semibold">$59.00</p>
                </div>
                <Button style={{ background: "black", color: "white" }}>
                  Confirm order
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;

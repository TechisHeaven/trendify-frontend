import {
  Box,
  Button,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
} from "@chakra-ui/react";
import React from "react";

const OrderTracking = ({ isOpen, onOpen, onClose }) => {
  return (
    <Modal size={"3xl"} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Order Tracking</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <div className="wrapper p-8 border border-gray-border rounded-md flex flex-col gap-8">
            <div>
              <p>Order ID</p>
              <h1 className="font-semibold text-2xl">#88087664</h1>
            </div>
            <div className="status">
              <Slider defaultValue={0} value={100} min={0} max={300} step={100}>
                <SliderTrack bg="gray.300">
                  <Box position="relative" right={10} />
                  <SliderFilledTrack bg="black" />
                </SliderTrack>
                <SliderMark
                  className="relative"
                  value={0}
                  mt="1"
                  ml="-2.5"
                  fontSize="sm"
                >
                  <div className="absolute -top-3 left-2 bg-black rounded-full w-4 h-4"></div>
                  Pending
                </SliderMark>
                <SliderMark value={100} mt="1" ml="-2.5" fontSize="sm">
                  Schedule
                </SliderMark>
                <SliderMark value={200} mt="1" ml="-2.5" fontSize="sm">
                  Dispatch
                </SliderMark>
                <SliderMark value={300} mt="1" ml="-16" fontSize="sm">
                  Delivered
                </SliderMark>
                <SliderThumb boxSize={6} />
              </Slider>
            </div>
            <div className="info bg-black flex flex-row p-4 rounded-md gap-8 w-full">
              <div>
                <p className="capitalize text-sm text-gray-light">
                  Delivery Address
                </p>
                <h1 className="capitalize text-white text-2xl w-[70%]">
                  B-2 Patel Garden Dwarka New Delhi
                </h1>
              </div>
              <div>
                <p className="capitalize text-sm text-gray-light">
                  Estimated Delivery
                </p>
                <h1 className="capitalize text-white text-2xl">
                  15 Dec - 25 Dec
                </h1>
              </div>
            </div>
            <div className="product">
              <div className="flex flex-row gap-2">
                <Image src="./suit.png" className="w-16 rounded-md" />
                <div className="product-info flex flex-row justify-between w-full">
                  <div>
                    <h1 className="capitalize font-semibold">Green Suit</h1>
                    <p className="capitalize text-gray-light">green | large</p>
                  </div>
                  <div>
                    <h1 className="capitalize font-semibold">$232</h1>
                    <p className="capitalize text-gray-light">Qty 1</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="wrapper flex justify-between gap-8">
              <div className="order-summary w-full">
                <h1 className="font-semibold text-xl">Payment</h1>
                <div className="flex gap-2 flex-col">
                  <p className="text-gray capitalize">cash on delivery</p>
                  <p className="text-gray capitalize">need help?</p>
                  <p className="text-gray capitalize">delivery info</p>
                  <p className="text-gray capitalize">return</p>
                </div>
              </div>
              <div className="order-summary-main w-full">
                <h1 className="font-semibold text-xl">Order Summary</h1>
                <div className="flex gap-2 flex-col">
                  <div className="flex justify-between">
                    <p className="text-gray capitalize">subtotal</p>
                    <p className="text-black capitalize">$59.00</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-gray capitalize">discount</p>
                    <p className="text-black capitalize">-$12.00</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-gray capitalize">total</p>
                    <p className="text-black capitalize">$47.00</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="buttons flex flex-row gap-4">
              <button className="p-2 px-4 capitalize bg-black text-white rounded-md text-sm">
                Cancel order
              </button>
              <button className="p-2 px-4 capitalize bg-black text-white rounded-md text-sm">
                Explore more
              </button>
            </div>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default OrderTracking;

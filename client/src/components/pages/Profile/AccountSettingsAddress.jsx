import { useDisclosure } from "@chakra-ui/react";
import React from "react";
import { FiEdit2 } from "react-icons/fi";
import ProfileEdit from "./ProfileEdit";

const AccountSettingsAddress = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div className="border border-gray-border p-4 rounded-md">
      <div className="wrapper flex flex-col gap-8">
        <div className="flex flex-row justify-between ">
          <h1 className="font-semibold text-xl">Address</h1>
          <div
            onClick={onOpen}
            className="p-2 bg-white-light border border-gray-border flex capitalize items-center gap-2 rounded-lg text-gray text-sm  cursor-pointer"
          >
            edit
            <FiEdit2 />
          </div>
        </div>
        <div className="details flex flex-wrap gap-4 capitalize">
          <div className="input w-[48%]">
            <label htmlFor="name" className="text-gray-light text-sm">
              Country
            </label>
            <p>India</p>
          </div>
          <div className="input w-[48%]">
            <label htmlFor="name" className="text-gray-light text-sm">
              City
            </label>
            <p>New Delhi</p>
          </div>
          <div className="input w-[48%]">
            <label htmlFor="name" className="text-gray-light text-sm">
              Postal code
            </label>
            <p>110078</p>
          </div>
        </div>
      </div>
      <ProfileEdit isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
    </div>
  );
};

export default AccountSettingsAddress;

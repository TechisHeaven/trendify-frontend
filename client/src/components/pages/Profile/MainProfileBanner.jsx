import { Avatar } from "@chakra-ui/react";
import React from "react";

const MainprofileBanner = () => {
  return (
    <div className="border border-gray-border p-4 rounded-md">
      <div className="wrapper">
        <Avatar size={'2xl'} name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
        <div className="info">
          <p className="font-semibold text-xl">Himanshu verma</p>
          <span className="text-sm text-gray">example@gmail.com</span>
        </div>
      </div>
    </div>
  );
};

export default MainprofileBanner;

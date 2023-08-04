import React from "react";
import { Image } from "@chakra-ui/react";

const Banner = () => {
  const BannerData = {
    _id: 1,
    img: "../banner.png",
    heading: "Level Up Your Style With Trendify",
  };

  return (
    <div className="h-[500px] p-8 relative top">
      <Image
        src={BannerData.img}
        alt="Banner"
        className="object-cover w-full h-full bg-center rounded-md"
      />
      <div className="absolute top-0 w-full h-full flex justify-center items-center m-auto flex-col gap-8">
        <h1 className="text-5xl w-[40%] text-center font-bold">
          {BannerData.heading}
        </h1>
      </div>
    </div>
  );
};

export default Banner;

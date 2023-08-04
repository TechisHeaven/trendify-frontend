import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from "swiper/react";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";

import "swiper/css";
import "swiper/css/pagination";
// import required modules
import SwiperCore from "swiper";
import { Pagination } from "swiper/modules";
import { Image } from "@chakra-ui/react";
import BannerNavBtns from "./BannerNavBtns";

SwiperCore.use([Pagination]);

const BannerData = [
  {
    _id: 1,
    img: "./banner.png",
    heading: "Level Up Your Style With Trendify",
  },
  {
    _id: 2,
    img: "./banner.png",
    heading: "lorem ipsum dolor sit amet",
  },
  {
    _id: 3,
    img: "./banner.png",
    heading: "Level Up more and more Your Style With Trendify",
  },
  {
    _id: 4,
    img: "./banner.png",
    heading: "Not level up more and more Your Style With Trendify",
  },
];

const BannerSlider = () => {
  const [swiper, setSwiper] = useState(null);

  const onSwiperChange = (swiperInstance) => {
    setSwiper(swiperInstance); // Update the swiper instance
  };

  const handlePrevSlide = () => {
    if (swiper) {
      swiper.slidePrev(); // Call slidePrev method on the swiper instance
    }
  };

  const handleNextSlide = () => {
    if (swiper) {
      swiper.slideNext(); // Call slideNext method on the swiper instance
    }
  };

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class=" bg-white ' + className + '"></span>';
    },
  };

  return (
    <div className="h-[500px] p-8 relative top">
      <Swiper
        className="h-full rounded-md overflow-hidden"
        spaceBetween={50}
        slidesPerView={1}
        modules={[Pagination]}
        pagination={pagination}
        loop={true}
        onSwiper={onSwiperChange}
      >
        {BannerData.map((value) => {
          return (
            <SwiperSlide key={value._id} className="bg-black relative">
              <Image
                src={value.img}
                alt="Banner"
                className="object-cover w-full h-full bg-center"
              />
              <div className="absolute top-0 w-full h-full flex justify-center items-center m-auto flex-col gap-8">
                <h1 className="text-5xl w-[40%] text-center font-bold">
                  {value.heading}
                </h1>
                <button className="capitalize bg-white flex items-center rounded-md shadow-sm px-2  hover:scale-105 transition-all">
                  <Link
                    to={"/category"}
                    className="p-2 font-semibold text-sm text-gray"
                  >
                    Shop now
                  </Link>
                  <AiOutlineArrowRight />
                </button>
              </div>
            </SwiperSlide>
          );
        })}
        <BannerNavBtns
          handlePrevSlide={handlePrevSlide}
          handleNextSlide={handleNextSlide}
        />
      </Swiper>
    </div>
  );
};

export default BannerSlider;

import React from "react";
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";

const BannerNavBtns = ({handlePrevSlide, handleNextSlide}) => {
  return (
    <div className="swiper-nav-btns nav-btns absolute bg-white top-10 right-10 flex flex-row rounded-sm z-10">
      <button className="p-2 cursor-pointer" onClick={handlePrevSlide}>
        <BsChevronLeft />
      </button>
      <div className="h-8 bg-gray-light w-[1px]"></div>
      <button className="p-2 cursor-pointer" onClick={handleNextSlide}>
        <BsChevronRight />
      </button>
    </div>
  );
};

export default BannerNavBtns;

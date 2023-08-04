import React, { useState } from "react";
import Banner from "../../utils/Banner/Banner";
import ProductCard from "../../utils/ProductCard/ProductCard.jsx/ProductCard";
import SideBar from "../../utils/SideBar/SideBar";
import { useDisclosure } from "@chakra-ui/react";
import ProductPreview from "../../utils/Modals/ProductPreview";
import { useParams, useSearchParams } from "react-router-dom";

const index = () => {
  const productData = [
    {
      _id: 1,
      Heading: "Heading",
      Catog: "Shirts",
      Img: "../shirt.png",
      price: "200",
      size: "L",
      color: "#ffffff",
    },
    {
      _id: 2,
      Heading: "Green suit",
      Catog: "Suits",
      Img: "../suit.png",
      price: "200",
      size: "L",
      color: "#00FF00",
    },
    {
      _id: 3,
      Heading: "Heading",
      Catog: "Shirts",
      Img: "https://m.media-amazon.com/images/I/712GTx78xmL._UY741_.jpg",
      price: "200",
      size: "L",
      color: "#00FF00",
    },
    {
      _id: 4,
      Heading: "Heading",
      Catog: "Shirts",
      Img: "../suit.png",
      price: "200",
      size: "L",
      color: "#ffffff",
    },
    {
      _id: 5,
      Heading: "Heading",
      Catog: "Shirts",
      Img: "../shirt.png",
      price: "200",
      size: "L",
      color: "#ffffff",
    },
  ];

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    onOpen();
  };

  const [searchParams] = useSearchParams();
  const size = searchParams.get('size');
  const color = searchParams.get('color');
  const search = searchParams.get('search');
  const category = useParams().id;


  return (
    <div className="max-w-[1280px] m-auto">
      <Banner />
      <div className="main-wrapper flex flex-row gap-8 p-8 pt-0">
        <div className="lg:block hidden">
          <SideBar />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <ProductCard
            category={category}
            size={size}
            color={color}
            search={search}
            handleOpenModal={handleOpenModal}
            productData={productData}
          />
        </div>
      </div>
      <ProductPreview
        isOpen={isOpen}
        onClose={onClose}
        data={selectedProduct}
      />
    </div>
  );
};

export default index;

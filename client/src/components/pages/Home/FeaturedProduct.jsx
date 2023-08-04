import {
  Skeleton,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import ProductPreview from "../../utils/Modals/ProductPreview";
import ProductCard from "../../utils/ProductCard/ProductCard.jsx/ProductCard";
const productData = [
  {
    _id: 1,
    Heading: "Heading",
    Catog: "Shirts",
    Img: "./shirt.png",
    price: "200",
    size: "L",
    color: "#ffffff",
  },
  {
    _id: 2,
    Heading: "Green suit",
    Catog: "Suits",
    Img: "./suit.png",
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
    Img: "./shirt.png",
    price: "200",
    size: "L",
    color: "#ffffff",
  },
  {
    _id: 5,
    Heading: "Heading",
    Catog: "Shirts",
    Img: "./shirt.png",
    price: "200",
    size: "L",
    color: "#ffffff",
  },
];
const FeaturedProduct = () => {
  
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    onOpen();
  };

  const loading = false;
  return (
    <div className="p-8 pt-0 flex flex-col gap-4">
      <h1 className="font-semibold text-3xl">Featured Products</h1>
      <div className="wrapper">
        <div className="products grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {loading && (
            <div className="product group relative w-[290px] h-full flex flex-col gap-2 border-gray-border border p-3 rounded-md">
              <div className="relative">
                <Skeleton height="260px" />
              </div>
              <div className="product-info flex gap-2 flex-col">
                <h1 className="font-semibold text-xl capitalize">
                  <Skeleton height="30px" />
                </h1>
                <p className="category capitalize text-gray-light">
                  <Skeleton height="10px" />
                </p>
                <Skeleton height="20px" />
              </div>
            </div>
          )}
         <ProductCard handleOpenModal={handleOpenModal} productData={productData}/>
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

export default FeaturedProduct;

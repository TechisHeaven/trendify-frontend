import React, { useState } from "react";
import Product from "./Product";
import RelatedProduct from "./RelatedProduct";
import { useDisclosure } from "@chakra-ui/react";
import ProductPreview from "../../utils/Modals/ProductPreview";

const productData = {
  _id: 1,
  Heading: "Heading",
  Catog: "Shirts",
  Img: "../shirt.png",
  price: "200",
  size: "L",
  color: "#ffffff",
};

const RelatedproductData = [
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
    Img: "../shirt.png",
    price: "200",
    size: "L",
    color: "#ffffff",
  }
];

const index = () => {
  // const [selectedImage, setSelectedImage] = useState(data.Img || null);
  const [selectedImage, setSelectedImage] = useState(productData.Img);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    onOpen();
  };

  const handleImageSelection = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className="max-w-[1280px] m-auto">
      <Product
        selectedImage={selectedImage}
        handleImageSelection={handleImageSelection}
        productData={productData}
      />
      <hr className="p-2"/>
      <RelatedProduct
        handleOpenModal={handleOpenModal}
        productData={RelatedproductData}
      />

      <ProductPreview
        isOpen={isOpen}
        onClose={onClose}
        data={selectedProduct}
      />
    </div>
  );
};

export default index;

import React from "react";
import { Image } from "@chakra-ui/react";
import { AiOutlineShoppingCart } from "react-icons/ai";
const Product = ({selectedImage,handleImageSelection, productData}) => {
  return (
    <div className="product-wrapper p-8">
      <div className="main flex flex-row gap-8">
        <div className="Image-container w-full aspect-square flex flex-col gap-4">
          <Image
            src={selectedImage}
            alt="image"
            className="w-full rounded-md"
          />
          <div className="image-gallery">
            <button
              className="w-32 aspect-square p-0"
              onClick={() => handleImageSelection(productData.Img)}
            >
              <Image
                className="w-full h-full object-cover"
                src={productData.Img}
              />
            </button>
          </div>
        </div>
        <div className="product-description w-full flex flex-col gap-4">
          <div className="product-heading flex flex-col gap-2">
            <h1 className="heading font-semibold text-3xl ">
              {productData.Heading}
            </h1>
            <p className="price font-medium text-xl">${productData.price}.00</p>
          </div>
          <hr />
          <div className="product-varient flex flex-col gap-4">
            <p className="flex gap-4 text-base font-semibold items-center">
              Size:
              <span className="font-normal text-base text-center">
                {productData.size}
              </span>
            </p>
            <p className="flex gap-4 text-base font-semibold items-center">
              Color:
              <span
                className={`w-6 h-6 border rounded-full border-black`}
                style={{ backgroundColor: productData.color }}
              ></span>
            </p>
          </div>
          <div className="btn">
            <button className="addtocart text-white px-4 py-3 rounded-3xl mt-4 bg-black">
              <p className="capitalize font-normal flex items-center gap-2">
                add to cart
                <AiOutlineShoppingCart size={"24px"} />
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

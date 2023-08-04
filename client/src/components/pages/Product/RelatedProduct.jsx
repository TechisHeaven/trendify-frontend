import { Image } from "@chakra-ui/react";
import React from "react";
import { MdZoomOutMap } from "react-icons/md";

const RelatedProduct = ({ handleOpenModal, productData }) => {
  return (
    <div className="p-8 flex flex-col gap-4">
      <h1 className="font-semibold text-3xl">Related items</h1>
      <div className="wrapper grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {productData.map((product) => {
          return (
            <div
              key={product._id}
              className="product group relative max-w-[310px] flex flex-col gap-2 border-gray-border border p-3 rounded-md"
            >
              <div className="relative aspect-square">
                <Image
                  className="rounded-sm aspect-square object-cover object-center"
                  src={product.Img}
                  alt={product.Heading + product.Catog}
                />
                <div
                  onClick={() => handleOpenModal(product)}
                  className="previewImg absolute bg-white p-2 opacity-0 group-hover:opacity-100 rounded-full bottom-[50%] right-[50%] hover:scale-110 transition-all cursor-pointer"
                >
                  <MdZoomOutMap size={"20px"} />
                </div>
              </div>
              <div className="product-info">
                <h1 className="font-semibold text-xl capitalize">
                  {product.Heading}
                </h1>
                <p className="category capitalize text-gray-light">
                  {product.Catog}
                </p>
                <div className="price-btn flex items-center justify-between">
                  <p className="font-semibold text-lg">${product.price}</p>
                  <button className="text-white p-2 px-4 rounded-3xl bg-black">
                    <p className="capitalize font-normal">add to cart</p>{" "}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RelatedProduct;

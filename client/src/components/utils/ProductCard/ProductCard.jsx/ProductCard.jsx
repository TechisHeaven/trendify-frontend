import { Image } from "@chakra-ui/react";
import React from "react";
import { MdZoomOutMap } from "react-icons/md";
import { Link } from "react-router-dom";

const ProductCard = ({
  handleOpenModal,
  productData,
  color,
  size,
  category,
  search,
}) => {
  if (!productData) return;
  // filter by category
  let product = productData.filter((items) => {
    if (category) {
      return items.Catog.toLowerCase() === category.toLowerCase();
    }
    return true;
  });
  // filter by category filter size or colors
  let newData = product.filter((item, index) => {
    if (size && color) {
      return item.color == color && item.size == size;
    } else if (color) {
      return item.color == color;
    } else if (size) {
      return item.size == size;
    }
    return true; // If no filters selected, return all items
  });
  //search data
  let FinalData = newData.filter((item) => {
    if (search) {
      return item.Heading.toLowerCase().includes(search.toLowerCase());
    }
    return true;
  });

  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <>
      {FinalData.length <= 0 && (
        <div className="p-4 font-semibold text-xl capitalize text-gray-dark">
          No Result Found
        </div>
      )}
      {FinalData.map((product) => {
        return (
          <div
            key={product._id}
            className="product group relative max-w-[290px] flex flex-col gap-2 border-gray-border border p-3 rounded-md"
          >
            <div className="relative aspect-square ">
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
            <Link className="product-info" to={`/product/${product._id}`}>
              <h1 className="font-semibold text-xl capitalize">
                {product.Heading}
              </h1>
              <p className="category capitalize text-gray-light">
                {product.Catog}
              </p>
              <div className="price-btn flex items-center justify-between">
                <p className="font-semibold text-lg">${product.price}</p>
                <button
                  onClick={handleClick}
                  className="text-white p-2 px-4 rounded-3xl bg-black"
                >
                  <p className="capitalize font-normal">add to cart</p>
                </button>
              </div>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default ProductCard;

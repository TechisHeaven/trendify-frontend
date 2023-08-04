import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const Sizes = [
    { _id: "M", size: "medium" },
    { _id: "L", size: "large" },
    { _id: "S", size: "small" },
    { _id: "ES", size: "extra small" },
  ];
  const Colors = [
    { _id: 1, color: "blue" },
    { _id: "#ffffff", color: "white" },
    { _id: 3, color: "red" },
    { _id: "#00FF00", color: "green" },
    { _id: 5, color: "black" },
  ];
  const sizeQuery = new URLSearchParams(location.search).get("size");
  const colorQuery = new URLSearchParams(location.search).get("color");
  const [selectedSize, setSelectedSize] = useState(sizeQuery);
  const [selectedColor, setSelectedColor] = useState(colorQuery);
  const navigate = useNavigate();
  const HandleSelectedSize = (id) => {
    const basePath = location.pathname.replace(/\/+$/, "");
    const searchParams = new URLSearchParams(location.search);
    // Check if the selected size is already set
    if (selectedSize === id) {
      searchParams.delete("size");
      setSelectedSize(null); // Unselect the size
    } else {
      searchParams.set("size", id);
      setSelectedSize(id);
    }

    const query = searchParams.toString() ? `?${searchParams.toString()}` : "";

    navigate(`${basePath}${query}`, { replace: true }); // Add { replace: true } to avoid creating a new entry in the history
  };

  // handle color size or name
  const HandleColorSize = (id) => {
    setSelectedColor(id);
    const basePath = location.pathname.replace(/\/+$/, "");
    const searchParams = new URLSearchParams(location.search);

    // Check if the selected color is already set
    if (selectedColor === id) {
      searchParams.delete("color");
      setSelectedColor(null); // Unselect the color
    } else {
      searchParams.set("color", id);
      setSelectedColor(id);
    }

    const query = searchParams.toString() ? `?${searchParams.toString()}` : "";

    navigate(`${basePath}${query}`, { replace: true });
  };

  return (
    <div>
      <div className="wrapper max-w-[220px]">
        <div className="sizes">
          <h1 className="py-2 font-semibold text-lg">Sizes</h1>
          <hr className="text-gray" />
          <div className="btns flex flex-wrap gap-2 py-4">
            {Sizes.map((btn) => {
              return (
                <button
                  key={btn._id}
                  onClick={() => HandleSelectedSize(btn._id)}
                  className={`p-2 border rounded-md capitalize font-semibold hover:text-gray-light transition-all text-sm ${
                    selectedSize == btn._id
                      ? "bg-black text-white"
                      : "bg-white text-gray-dark"
                  }`}
                >
                  {btn.size}
                </button>
              );
            })}
          </div>
        </div>
        <div className="sizes">
          <h1 className="py-2 font-semibold text-lg">Colors</h1>
          <hr className="text-gray" />
          <div className="btns flex flex-wrap gap-2 py-4">
            {Colors.map((btn) => {
              return (
                <button
                  key={btn._id}
                  onClick={() => HandleColorSize(btn._id)}
                  className={`p-2 border rounded-md capitalize font-semibold hover:text-gray-light transition-all text-sm ${
                    selectedColor == btn._id
                      ? "bg-black text-white"
                      : "bg-white text-gray-dark"
                  }`}
                >
                  {btn.color}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;

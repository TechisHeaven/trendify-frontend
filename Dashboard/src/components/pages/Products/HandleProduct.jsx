import { Button, Checkbox, Select } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { BiImageAdd } from "react-icons/bi";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const HandleBillboard = () => {
  const Products = {
    _id: 1,
    name: "green suit",
    catogeries: "suit",
    price: "100",
    archieved: true,
    stock: 10,
    size: "lg",
    color: "white",
    pic: ["../../suit.png", "../../banner.png"],
    date: "june 20th,2023",
  };
  const { type } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");
  useEffect(() => {
    if (type === "edit")
      if (!id) {
        navigate("/products");
      }
  }, []);

  const [name, setName] = useState(type === "edit" ? Products?.name : "");
  const [price, setPrice] = useState(type === "edit" ? Products?.price : "");
  const [stock, setStock] = useState(type === "edit" ? Products?.stock : "");
  const [categeries, setCatogeries] = useState(
    type === "edit" ? Products?.catogeries : ""
  );
  const [size, setSize] = useState(type === "edit" ? Products?.size : "");
  const [color, setColor] = useState(type === "edit" ? Products?.color : "");
  const [archieved, setArchieved] = useState(
    type === "edit" ? Products?.archieved : ""
  );

  return (
    <div className="max-w-[1280px] m-auto p-8">
      <div className="wrapper">
        <div className="heading flex justify-between">
          <div>
            <h1 className="font-semibold text-2xl">
              {type === "add" ? "Add Products" : "Edit Products"}
            </h1>
            <p className="text-gray text-sm">
              {type === "add" ? "Add a Products" : "Edit a Products"}
            </p>
          </div>

          {type === "edit" && (
            <Button style={{ background: "#FF3131", color: "white" }}>
              <AiOutlineDelete />
            </Button>
          )}
        </div>
        <hr className="my-4" />
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4 items-start">
            <label htmlFor="background-image" className="font-semibold text-sm">
              Images
            </label>
            {Products && type === "edit" && (
              <div className="preview flex relative gap-2 flex-row rounded-md overflow-hidden  h-full">
                {Products.pic.map((image, i) => {
                  return (
                    <img
                      key={i}
                      src={image}
                      alt="banner"
                      className="h-full rounded-md w-44 aspect-square object-cover"
                    />
                  );
                })}
                <div className={`absolute top-2 right-2`}>
                  <Button
                    style={{
                      background: "#FF3131",
                      color: "white",
                      padding: 0,
                    }}
                  >
                    <AiOutlineDelete className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            )}
            <Button style={{ display: "flex", gap: ".5rem" }}>
              <BiImageAdd className="w-5 h-5" />{" "}
              <p className="text-sm">Upload an Image</p>
            </Button>
          </div>
          <div className="flex flex-col gap-2 items-start">
            <div className="input grid grid-cols-3 grid-rows-2 gap-4">
              <div className="flex flex-col">
                <label htmlFor="name" className="font-semibold text-sm">
                  Name
                </label>
                <input
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  placeholder="Product Name"
                  className="p-2 border border-gray-border rounded-md outline-none w-full"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="price" className="font-semibold text-sm">
                  Price
                </label>
                <input
                  type="number"
                  onChange={(e) => setPrice(e.target.value)}
                  value={price}
                  placeholder="Price"
                  className="p-2 border border-gray-border rounded-md outline-none w-full"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="catogeries" className="font-semibold text-sm">
                  Catogeries
                </label>
                <Select
                  id="catogeries"
                  onChange={(e) => setCatogeries(e.target.value)}
                  value={categeries}
                  placeholder="Select Catogeries"
                >
                  <option value="suit">suit</option>
                  <option value="shirt">shirt</option>
                  <option value="glasses">glasses</option>
                </Select>
              </div>
              <div className="flex flex-col">
                <label htmlFor="catogeries" className="font-semibold text-sm">
                  Size
                </label>
                <Select
                  id="catogeries"
                  className="uppercase"
                  value={size}
                  onChange={(e) => setSize(e.target.value)}
                  placeholder="Select Size"
                >
                  <option value="lg" className="uppercase">
                    lg
                  </option>
                  <option value="sm" className="uppercase">
                    sm
                  </option>
                  <option value="xs" className="uppercase">
                    xs
                  </option>
                </Select>
              </div>
              <div className="flex flex-col">
                <label htmlFor="color" className="font-semibold text-sm">
                  Color
                </label>
                <Select
                  id="color"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  placeholder="Select Size"
                >
                  <option value="white" className="uppercase">
                    white
                  </option>
                  <option value="green" className="uppercase">
                    green
                  </option>
                </Select>
              </div>
              <div className="flex flex-col">
                <label htmlFor="price" className="font-semibold text-sm">
                  Stock
                </label>
                <input
                  type="number"
                  onChange={(e) => setStock(e.target.value)}
                  value={stock}
                  placeholder="Stock 1, 10 ,20"
                  className="p-2 border border-gray-border rounded-md outline-none w-full"
                />
              </div>
              <div className="archieved border border-gray-border rounded-md p-4">
                <Checkbox
                  isChecked={archieved}
                  onChange={() => {
                    setArchieved(!archieved);
                  }}
                >
                  <h1 className="font-semibold">Archieved</h1>
                  <p>This product will not appear anywhere in store</p>
                </Checkbox>
              </div>
            </div>
            {type === "add" ? (
              <Button
                style={{
                  background: "black",
                  color: "white",
                  marginTop: "1rem",
                }}
              >
                <p className="text-sm">Create</p>
              </Button>
            ) : (
              <Button
                style={{
                  background: "black",
                  color: "white",
                  marginTop: "1rem",
                }}
              >
                <p className="text-sm">Save changes</p>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HandleBillboard;

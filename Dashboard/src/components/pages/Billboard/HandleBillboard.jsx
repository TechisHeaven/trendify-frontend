import { Button } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { BiImageAdd } from "react-icons/bi";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const HandleBillboard = () => {
  const BillboardData = {
    _id: 1,
    name: "Explore The Suits Collection ",
    img: "../../banner.png",
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
        navigate("/billboards");
      }
  }, []);

  const [name, setName] = useState(type === "edit" ? BillboardData?.name : "");

  return (
    <div className="max-w-[1280px] m-auto p-8">
      <div className="wrapper">
        <div className="heading flex justify-between">
          <div>
            <h1 className="font-semibold text-2xl">
              {type === "add" ? "Add billboard" : "Edit billboard"}
            </h1>
            <p className="text-gray text-sm">
              {type === "add" ? "Add a billboard" : "Edit a billboard"}
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
          <div className="flex flex-col gap-2 items-start">
            <label htmlFor="background-image" className="font-semibold text-sm">
              Background image
            </label>
            {BillboardData && type === "edit" && (
              <div className="preview relative rounded-md overflow-hidden  w-44 aspect-square h-full">
                <img
                  src={BillboardData?.img}
                  alt="banner"
                  className="h-full w-full object-cover"
                />
                <div className="absolute top-2 right-2">
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
            <label htmlFor="name" className="font-semibold text-sm">
              Label
            </label>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="Billboard Name"
              className="p-2 border border-gray-border rounded-md outline-none max-w-[300px] w-full"
            />
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

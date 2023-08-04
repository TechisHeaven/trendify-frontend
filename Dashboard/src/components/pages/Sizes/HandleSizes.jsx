import { Button, Select } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const HandleSizes = () => {
  const Sizes = {
    _id: 1,
    name: "Small",
    value: "s",
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
        navigate("/Sizes");
      }
  }, []);

  const [name, setName] = useState(type === "edit" ? Sizes?.name : "");
  const [value, setValue] = useState(type === "edit" ? Sizes?.value.toUpperCase() : "");

  return (
    <div className="max-w-[1280px] m-auto p-8">
      <div className="wrapper">
        <div className="heading flex justify-between">
          <div>
            <h1 className="font-semibold text-2xl">
              {type === "add" ? "Add Sizes" : "Edit Sizes"}
            </h1>
            <p className="text-gray text-sm">
              {type === "add" ? "Add a Sizes" : "Edit a Sizes"}
            </p>
          </div>

          {type === "edit" && (
            <Button style={{ background: "#FF3131", color: "white" }}>
              <AiOutlineDelete />
            </Button>
          )}
        </div>
        <hr className="my-4" />
        <div className="flex flex-row gap-4">
          <div className="flex flex-col gap-2 items-start max-w-xs w-full">
            <label htmlFor="name" className="font-semibold text-sm">
              Name
            </label>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="Size Name"
              className="p-2 border border-gray-border rounded-md outline-none max-w-xs w-full"
            />
          </div>
          <div className="flex flex-col gap-2 items-start w-full max-w-xs">
            <label htmlFor="catogeries" className="font-semibold text-sm">
              Value
            </label>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={value}
              placeholder="Value Name  ex:lg xl"
              className="p-2 border border-gray-border rounded-md outline-none max-w-xs w-full"
            />
          </div>
        </div>
        {type === "add" ? (
          <Button
            style={{ background: "black", color: "white", marginTop: "1rem" }}
          >
            <p className="text-sm">Create</p>
          </Button>
        ) : (
          <Button
            style={{ background: "black", color: "white", marginTop: "1rem" }}
          >
            <p className="text-sm">Save changes</p>
          </Button>
        )}
      </div>
    </div>
  );
};

export default HandleSizes;

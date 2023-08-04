import { Code, Link, useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { AiOutlineCopy, AiOutlineLoading3Quarters } from "react-icons/ai";
import {
  TbHttpDelete,
  TbHttpGet,
  TbHttpPatch,
  TbHttpPost,
  TbHttpPut,
} from "react-icons/tb";
import { useLocation } from "react-router-dom";
import { APIS_Endpoint } from "./data";

const API_container = () => {
  const [isCopied, setIsCopied] = useState(false);
  const [filteredData, setFilteredData] = useState(APIS_Endpoint);
  const [loading, setLoading] = useState(true);

  const toast = useToast();
  const location = useLocation();

  //copy id from user and show a toast
  const handleCopyClick = (api) => {
    navigator.clipboard
      .writeText(api)
      .then(() => {
        setIsCopied(true);

        // Show an toast to notify the user
        toast({
          title: "API Copied.",
          status: "success",
          duration: 2000,
          position: "top",
          isClosable: true,
        });

        // Reset the copied status after a short delay
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      })
      .catch((error) => {
        console.error("Failed to copy: ", error);
        toast({
          title: `Failed to copy:${error}`,
          status: "erro",
          duration: 2000,
          position: "top",
          isClosable: true,
        });
      });
  };

  const pathname = location.pathname;

  useEffect(() => {
    setLoading(true);
    let newData = APIS_Endpoint.filter((value) => {
      return (
        value.Categories.toLowerCase() ===
        pathname.substring(1, pathname.length).toLowerCase()
      );
    });
    setFilteredData(newData);
    setLoading(false);
  }, [pathname]);

  return (
    <div className="max-w-7xl m-auto p-8">
      <div className="wrappper">
        <div className="flex flex-col gap-2">
          <div>
            <h1 className="font-semibold text-2xl">API</h1>
            <p className="text-sm text-gray">
              API calls for {""}
              <span className="capitalize">
                {pathname === "/" && "overview"}
                {pathname.substring(1, pathname.length)}
              </span>
            </p>
          </div>
          <div className="apis flex flex-col gap-4">
            {loading && (
              <div className="flex items-center justify-center p-4 w-full">
                <AiOutlineLoading3Quarters className="animate-spin w-8 h-8" />
              </div>
            )}
            {filteredData.length <= 0 && (
              <div className="capitalize text-center text-gray-light">
                No APIs found
              </div>
            )}
            {!loading &&
              filteredData.map((value, i) => {
                return (
                  <div
                    key={i}
                    className="api-callback border border-gray-border p-4 rounded-md"
                  >
                    <div className="flex flex-row items-center gap-2">
                      {value.method.toUpperCase() === "GET" && (
                        <TbHttpGet className="w-7 h-7" />
                      )}
                      {value.method.toUpperCase() === "POST" && (
                        <TbHttpPost className="w-7 h-7" />
                      )}
                      {value.method.toUpperCase() === "PUT" && (
                        <TbHttpPut className="w-7 h-7" />
                      )}
                      {value.method.toUpperCase() === "DELETE" && (
                        <TbHttpDelete className="w-7 h-7" />
                      )}
                      {value.method.toUpperCase() === "PATCH" && (
                        <TbHttpPatch className="w-7 h-7" />
                      )}
                      <p className="api-method uppercase font-semibold">
                        {value.method}
                      </p>
                      {value.admin ? (
                        <p className="p-[2px] px-[4px] text-xs bg-red-500 text-white capitalize rounded-lg">
                          admin
                        </p>
                      ) : (
                        <p className="p-[2px] px-[4px] text-xs bg-gray-light text-black capitalize rounded-lg">
                          public
                        </p>
                      )}
                    </div>
                    <div className="api flex flex-row items-center justify-between px-8">
                      <Link
                        color="teal.500"
                        target="__blank"
                        href={`${import.meta.env.VITE_API_BASE_URL}${
                          value.url
                        }`}
                      >
                        <Code>
                          {import.meta.env.VITE_API_BASE_URL}
                          {value.url}
                        </Code>
                      </Link>
                      <div
                        className="p-2 border border-gray-border cursor-pointer hover:bg-gray-light transition-all active:bg-gray rounded-sm"
                        onClick={() =>
                          handleCopyClick(
                            `${import.meta.env.VITE_API_BASE_URL}${value.url}`
                          )
                        }
                      >
                        <AiOutlineCopy />
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default API_container;

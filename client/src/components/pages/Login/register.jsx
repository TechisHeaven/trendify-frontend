import { Button, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { validateEmail } from "../../../functions/validateEmail";
import { AiOutlineEye } from "react-icons/ai";
import { BsEyeSlash } from "react-icons/bs";
import { IoArrowBackOutline } from "react-icons/io5";

const register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [haveEmail, setHaveEmail] = useState(false);
  const [show, setShow] = useState(false);
  const toast = useToast();

  const handleEmail = () => {
    if (email && name) {
      if (name.length <= 3) {
        return toast({
          title: "Minimum 3 Characters Needed.",
          status: "error",
          position: "top",
          duration: 3000,
          isClosable: true,
        });
      }
      let isValid = validateEmail(email);
      if (isValid) {
        return setHaveEmail(true);
      } else {
        toast({
          title: "Email is not valid.",
          status: "error",
          position: "top",
          duration: 3000,
          isClosable: true,
        });
        return;
      }
    }
    toast({
      title: "Fill all credantials",
      position: "top",
      status: "error",
      duration: 3000,
      isClosable: true,
    });
    return setHaveEmail(false);
  };

  return (
    <div className="max-w-[480px] w-full m-auto h-[calc(100vh-160px)] grid place-items-center">
      <div className="wrapper flex flex-col p-8 border w-full border-gray-border bg-container-white gap-2">
        <div className="flex flex-col gap-1">
          <h1 className="font-semibold text-2xl">Register</h1>
          <p className="text-sm text-gray-light">
            to Continue Register with Trendify
          </p>
        </div>
        <div className="container flex flex-col gap-8">
          <Button
            className="relative w-full flex flex-row-reverse items-center gap-2 border border-gray-border rounded-md pl-2 bg-white"
            style={{ background: "white", color: "black" }}
          >
            <p className="w-full text-left p-2 text-gray-light font-medium">
              Continue with google
            </p>
            <FcGoogle className="w-5 h-5" />
          </Button>
          <div className="relative">
            <p className="absolute bg-container-white left-[50%] -top-5 p-2">
              or
            </p>
            <hr />
          </div>
          {!haveEmail ? (
            <div className="flex flex-col gap-2">
              <div className="name w-full flex flex-col gap-4">
                <div className="inputs flex flex-col gap-1">
                  <label htmlFor="name" className="text-sm text-gray">
                    Full Name
                  </label>
                  <input
                    required
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    id="name"
                    placeholder="Full Name"
                    className="p-2 rounded-md outline-none border border-gray-border text-sm"
                  />
                </div>
              </div>
              <div className="email w-full flex flex-col gap-4">
                <div className="inputs flex flex-col gap-1">
                  <label htmlFor="email" className="text-sm text-gray">
                    Email Address
                  </label>
                  <input
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    id="email"
                    placeholder="Email Address"
                    className="p-2 rounded-md outline-none border border-gray-border text-sm"
                  />
                </div>
                <Button
                  type="submit"
                  onClick={() => handleEmail()}
                  style={{ background: "black", color: "white" }}
                >
                  Continue
                </Button>
              </div>
            </div>
          ) : (
            <div className="password w-full flex flex-col gap-4 items-start">
              <div onClick={()=>setHaveEmail(false)} className="p-2 cursor-pointer bg-white rounded-full shadow-md">
                <IoArrowBackOutline />
              </div>
              <div className="inputs flex flex-col gap-1 w-full">
                <label htmlFor="email" className="text-sm text-gray">
                  Password
                </label>
                <div className="flex flex-row items-center border border-gray-border">
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    type={show ? "text" : "password"}
                    placeholder="Password"
                    className="p-2 w-full rounded-md outline-none border-r rounded-r-none text-sm"
                  />
                  {show ? (
                    <div
                      className="cursor-pointer p-2 bg-white hover:bg-gray-border h-full transition-all"
                      onClick={() => setShow(!show)}
                    >
                      <AiOutlineEye />
                    </div>
                  ) : (
                    <div
                      className="cursor-pointer p-2 bg-white hover:bg-gray-border h-full transition-all"
                      onClick={() => setShow(!show)}
                    >
                      <BsEyeSlash />
                    </div>
                  )}
                </div>
              </div>
              <Button className=" w-full" style={{ background: "black", color: "white" }}>
                Login
              </Button>
            </div>
          )}

          <div className="flex flex-row gap-2 items-center">
            <p className="text-sm text-gray-light">No account?</p>
            <Link to={"/login"}>Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default register;

import { Button } from "@nextui-org/react";
import { Cross, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isopen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isopen);
  };

  return (
    <>
      <div className="bg-[#A59472]">
        <div className="container mx-auto">
          {/* big navbar start */}
          <div className="hidden md:flex justify-center items-center h-[15vh] ">
            {/* nav item start */}
            <div className="flex lg:justify-end lg:space-x-8 space-x-4 font-medium w-1/3 text-white">
              <div className="ease-in-out duration-200 transform hover:scale-110">
                <Link
                  href={"/"}
                  className="md:text-sm hover:text-yellow-300 ease-in-out duration-200">
                  Home
                </Link>
              </div>
              <div className="ease-in-out duration-200 transform hover:scale-110">
                <Link
                  href={"/about"}
                  className="md:text-sm hover:text-yellow-300 ease-in-out duration-200">
                  About
                </Link>
              </div>
              <div className="ease-in-out duration-200 transform hover:scale-110">
                <Link
                  href={"/menu"}
                  className="md:text-sm hover:text-yellow-300 ease-in-out duration-200">
                  Our Menu
                </Link>
              </div>
              <div className="ease-in-out duration-200 transform hover:scale-110">
                <Link
                  href={"/signup"}
                  className="md:text-sm hover:text-yellow-300 ease-in-out duration-200">
                  Sign Up
                </Link>
              </div>
            </div>

            {/* nav item end */}

            {/* logo start */}
            <div className="flex justify-center w-1/3">
              <img
                src="logo-regular.png"
                alt="logo"
                className="md:w-[150px] h-auto translate-x-4"
              />
            </div>
            {/* logo end */}

            {/* BIG BUTTON START */}
            <div className="ml-10 w-1/3 flex justify-start">
              <motion.div
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
                whileTap={{
                  scale: 0.95,
                  transition: { duration: 0.2 },
                }}
                className="relative rounded-full overflow-hidden">
                <Button
                  variant="bordered"
                  className="text-white text-xl rounded-full p-7 bg-transparent border-yellow-400 hover:bg-yellow-400 hover:text-red-600 border-2 transition-colors duration-300">
                  MAKE RESERVATION
                </Button>
              </motion.div>
            </div>
            {/* BIG BUTTON END */}
          </div>
          {/* big navbar end */}

          {/* mobile navbar start */}
          <div className="h-[15vh] flex md:hidden justify-between items-center px-5">
            {/* logo start */}
            <div className="">
              <img
                src="logo-regular.png"
                alt="logo"
                className="w-[130px] h-auto"
              />
            </div>
            {/* logo end */}

            <div className="">
              <Menu onClick={toggle} className="" color="white" />
            </div>

            <div
              className={`flex flex-col justify-between items-end p-5 fixed top-0 left-0 w-full h-full z-50 transform bg-[#A59472] ${
                isopen ? "translate-y-0" : "-translate-y-full"
              } transition-transform duration-300 ease-in-out md:hidden`}>
              <div className="">
                <X className="" onClick={toggle} color="white" />
              </div>
              <div className="flex flex-col space-y-7 justify-center items-center w-full h-full">
                <div className="w-full text-center flex flex-col space-y-7 justify-center font-medium  text-white">
                  <div className="py-5 ease-in-out duration-200 transform hover:scale-110">
                    <Link
                      href={"/"}
                      className="text-xl hover:text-yellow-300 ease-in-out duration-200">
                      Home
                    </Link>
                  </div>
                  <div className="py-5 ease-in-out duration-200 transform hover:scale-110">
                    <Link
                      href={"/about"}
                      className="text-xl hover:text-yellow-300 ease-in-out duration-200">
                      About
                    </Link>
                  </div>
                  <div className="py-5 ease-in-out duration-200 transform hover:scale-110">
                    <Link
                      href={"/menu"}
                      className="text-xl hover:text-yellow-300 ease-in-out duration-200">
                      Our Menu
                    </Link>
                  </div>
                  <div className="py-5 ease-in-out duration-200 transform hover:scale-110">
                    <Link
                      href={"/signup"}
                      className="text-xl hover:text-yellow-300 ease-in-out duration-200">
                      Sign Up
                    </Link>
                  </div>
                </div>
                {/* BIG BUTTON START */}
                <div className="w-full flex justify-center items-center">
                  <motion.div
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.3 },
                    }}
                    whileTap={{
                      scale: 0.95,
                      transition: { duration: 0.2 },
                    }}
                    className="relative rounded-full ">
                    <Button
                      variant="bordered"
                      className="text-white text-xl rounded-full p-7 bg-transparent border-yellow-400 hover:bg-yellow-400 hover:text-red-600 border-2 transition-colors duration-300">
                      MAKE RESERVATION
                    </Button>
                  </motion.div>
                </div>
                {/* BIG BUTTON END */}
              </div>
            </div>
          </div>
          {/* mobile navbar end */}
        </div>
      </div>
    </>
  );
};

export default Navbar;

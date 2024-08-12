import { Divider } from "@nextui-org/react";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="h-[50dvh] bg-[#b9a681]">
        <div className="mx-24 h-full flex justify-center items-center">
          <div className="flex flex-col items-center">
            <div className="">
              <img
                src="logo-regular.png"
                className="md:w-[150px] w-[130px]"
                alt=""
              />
            </div>
            <div className="flex justify-center font-medium  text-white mt-6">
              <div className="px-5">
                <Link href={"/"}>Home</Link>
              </div>
              <div className="px-5">
                <Link href={"/about"}>About</Link>
              </div>
              <div className="px-5">
                <Link href={"/menu"}>Our Menu</Link>
              </div>
              <div className="px-5">
                <Link href={"/signup"}>Sign Up</Link>
              </div>
            </div>
            <Divider className="w-[80dvw] h-1 mt-8" />
            <div className="text-white text-center mt-5">
              Copyright © 2024 Eggcellent Restaurant | powered by Eggcellent
              Restaurant
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

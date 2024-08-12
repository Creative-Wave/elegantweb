import { Button } from "@nextui-org/react";
import { Bebas_Neue } from "next/font/google";

const newfont2 = Bebas_Neue({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

interface InfoProps {
  fImg: string;
  fName: string;
  fPrice: string;
}

const Menucard = ({ info }: { info: InfoProps }) => {
  return (
    <div className="group flex justify-center items-center">
      <div className="h-[400px] sm:h-[500px] w-[240px] sm:w-[280px] border-[1px] group-hover:border-none flex flex-col justify-center items-center ease-in-out duration-500 hover:rounded-lg hover:scale-105 group-hover:bg-[#897A5E] group-hover:shadow-2xl">
        <div className="h-[40%] sm:h-[40%] flex justify-center items-center">
          <img src={info.fImg} className="w-[200px] sm:w-[300px]" alt="" />
        </div>
        <div className="text-center text-white text-lg sm:text-xl font-bold mt-10">
          {info.fName}
        </div>
        <div className="text-center text-xl sm:text-3xl text-white mt-2">
          <span className={newfont2.className}>{info.fPrice}</span>
        </div>
        <Button className="bg-white w-[70%] sm:w-64 mx-auto mt-2 font-bold">
          Order Now
        </Button>
      </div>
    </div>
  );
};

export default Menucard;

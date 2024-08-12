import { Button, Divider } from "@nextui-org/react";
import { Bebas_Neue } from "next/font/google";
import { motion, useInView } from "framer-motion";

import { useRef } from "react";

const newfont2 = Bebas_Neue({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

const Contactheading = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-50% 0px" }); // Adjust margin as needed

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      <div
        className="md:h-[80dvh] h-auto md:p-0 p-8 bg-[#A59472] flex flex-col justify-center items-center"
        ref={ref}>
        <div className="flex flex-col items-center">
          <Divider className="h-32 w-1 bg-white" />

          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={textVariants}
            className="md:text-7xl text-4xl text-white mt-5">
            <span className={newfont2.className}>Loceation</span>
          </motion.div>
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={textVariants}
            className="text-white text-xl mt-3">
            Where you can find us
          </motion.div>
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={buttonVariants}
            className="md:mt-16 mt-8">
            <Button
              variant="bordered"
              className="md:px-10 px-8 md:py-8 py-7 md:text-3xl text-xl rounded-full text-white border-white hover:border-yellow-400 hover:text-yellow-400">
              <span
                className={newfont2.className}
                style={{ letterSpacing: "2px" }}>
                know more
              </span>
            </Button>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Contactheading;

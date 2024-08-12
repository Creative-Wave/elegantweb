import { Input } from "@nextui-org/react";
import { Bebas_Neue } from "next/font/google";
import { useState } from "react";
import { motion } from "framer-motion";

const newfont2 = Bebas_Neue({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

const Reservation = () => {
  // State to track form submission, loading, and success
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Handle form submission
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent the default form submission

    // Set loading state to true
    setLoading(true);

    // Simulate a delay for loading (e.g., API call)
    setTimeout(() => {
      // Set loading state to false and submitted state to true to show the success message
      setLoading(false);
      setSubmitted(true);
    }, 2000); // Adjust the delay as needed
  };

  const handleGoBack = () => {
    setSubmitted(false);
  };

  return (
    <div className="md:h-screen h-auto bg-[#A59472] flex justify-center items-center">
      {!submitted ? (
        <div className="p-8 rounded-lg shadow-2xl md:mx-24 mx-10 w-full lg:h-[80vh] h-auto relative">
          <div
            className="w-full h-full absolute top-0 left-0 bg-[#1d1a1694]"
            style={{ zIndex: 1 }}></div>
          <img
            src="hero-03.jpg"
            className="absolute w-full h-full inset-0 left-0 top-0 object-cover object-center"
            alt=""
          />
          <form
            onSubmit={handleSubmit}
            className="md:flex h-full block justify-between items-start lg:mt-8 gap-10 relative z-20">
            <div className="w-full">
              <div className="mb-8">
                <label
                  className="block text-white text-lg font-bold"
                  htmlFor="name">
                  Name
                </label>
                <Input
                  id="name"
                  type="text"
                  variant="underlined"
                  placeholder="Enter Your Name"
                  color="warning"
                  className="placeholder:text-white"
                  classNames={{
                    input: "text-white placeholder-white",
                    innerWrapper: "text-white",
                  }}
                />
              </div>
              <div className="mb-8">
                <label
                  className="block text-white text-lg font-bold mb-2"
                  htmlFor="email">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  variant="underlined"
                  placeholder="Enter Your Email"
                  color="warning"
                  className="placeholder:text-white"
                  classNames={{
                    input: "text-white placeholder-white",
                    innerWrapper: "text-white",
                  }}
                />
              </div>
              <div className="mb-8">
                <label
                  className="block text-white text-lg font-bold mb-2"
                  htmlFor="phone">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  type="tel"
                  variant="underlined"
                  placeholder="Enter Your Phone Number"
                  color="warning"
                  className="placeholder:text-white"
                  classNames={{
                    input: "text-white placeholder-white",
                    innerWrapper: "text-white",
                  }}
                />
              </div>
              <div className="md:flex items-center justify-between hidden">
                <button
                  type="submit"
                  className="bg-[#A59472] hover:bg-[#8a7854] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                  Reserve Now
                </button>
              </div>
            </div>
            <div className="w-full">
              <div className="mb-8">
                <label
                  className="block text-white text-lg font-bold mb-2"
                  htmlFor="date">
                  Date
                </label>
                <Input
                  id="date"
                  type="date"
                  variant="underlined"
                  placeholder=""
                  color="warning"
                  className="placeholder:text-white"
                  classNames={{
                    input: "text-white placeholder-white",
                    innerWrapper: "text-white",
                  }}
                />
              </div>
              <div className="mb-8">
                <label
                  className="block text-white text-lg font-bold mb-2"
                  htmlFor="time">
                  Time
                </label>
                <Input
                  id="time"
                  type="time"
                  variant="underlined"
                  placeholder=""
                  color="warning"
                  className="placeholder:text-white"
                  classNames={{
                    input: "text-white placeholder-white",
                    innerWrapper: "text-white",
                  }}
                />
              </div>
              <div className="">
                <label
                  className="block text-white text-lg font-bold mb-2"
                  htmlFor="guests">
                  Number Of Guests
                </label>
                <Input
                  id="guests"
                  type="number"
                  variant="underlined"
                  placeholder="Enter Guests Number"
                  color="warning"
                  className="placeholder:text-white"
                  classNames={{
                    input: "text-white placeholder-white",
                    innerWrapper: "text-white",
                  }}
                />
              </div>
              <div className="md:hidden items-center justify-between flex mt-5">
                <button
                  type="submit"
                  className="bg-[#A59472] hover:bg-[#8a7854] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                  Reserve Now
                </button>
              </div>
            </div>
          </form>
          {loading && (
            <div className="w-full h-full bg-black/50 top-0 left-0 absolute z-20 flex justify-center items-center">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-white text-2xl ">
                Loading...
              </motion.div>
            </div>
          )}
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className=" p-8 rounded-lg shadow-lg max-w-md w-full text-center">
          <h2 className="text-7xl text-white font-bold mb-6">
            <span className={newfont2.className}>Reservation Successful</span>
          </h2>
          <p className="text-lg text-white">
            Thank you for your reservation. We look forward to seeing you!
          </p>{" "}
          <button
            onClick={handleGoBack}
            className="bg-[#A59472] mt-5 hover:bg-[#8a7854] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Go Back
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default Reservation;

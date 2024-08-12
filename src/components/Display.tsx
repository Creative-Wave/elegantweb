import { Button } from "@nextui-org/react";
import { Permanent_Marker } from "next/font/google";
import { Bebas_Neue } from "next/font/google";
import ImageSlider from "./ImageSlider";
import AnimatedText from "@/components/AnimatedText"; // Import the AnimatedText component
import Hero from "./Hero";
import Menubar from "./Menubar";
import Fooditem from "./Fooditem";
import Blog1 from "./Blog1";
import Philosopy from "./Philosopy";
import Reservation from "./Reservation";
import Reservationheading from "./Reservationheading";
import Footer from "./Footer";
import Contactus from "./Contactus";
import Contactheading from "./Contactheading";

const newfont = Permanent_Marker({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});
const newfont2 = Bebas_Neue({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

const Display = () => {
  return (
    <>
      <div className="h-screen relative">
        <div className="h-full w-full overflow-hidden absolute">
          <ImageSlider />
        </div>
        <div className="h-full w-full bg-black/30 absolute left-0 z-10"></div>
        {/* content section start */}
        <div className="h-full w-full flex flex-col justify-center items-center text-center absolute z-20 ">
          <div className="md:text-7xl text-5xl text-white">
            <span className={newfont.className}>Eat Well, Live Well</span>
          </div>
          <div className="text-white text-xl mt-3">
            Eggstraordinary flavors for any appetite
          </div>
          <div className="mt-16">
            <Button
              variant="bordered"
              className="px-10 py-8 rounded-full text-white md:text-3xl text-xl border-white hover:border-yellow-400 hover:text-yellow-400">
              <span
                className={newfont2.className}
                style={{ letterSpacing: "2px" }}>
                View More
              </span>
            </Button>
          </div>
        </div>
        {/* content section end */}
      </div>

      <Hero />

      <Menubar />

      <Fooditem />

      <Philosopy />

      <Blog1 />

      <div className="h-screen flex justify-center items-center relative">
        <div className="absolute inset-0 bg-[#A59472] z-[-20]"></div>
        {/* Video element */}
        <video
          autoPlay
          muted
          loop
          className="fixed inset-0 w-full h-full object-cover"
          style={{ zIndex: -1 }}>
          <source src="video.mp4" type="video/mp4" />
        </video>

        {/* Content over video */}
        <div className="relative z-10 font-bold flex items-center justify-center lg:justify-start px-5 md:px-24 text-center lg:text-left h-screen">
          <div className="w-full md:w-1/2">
            <div
              className="text-white lg:text-6xl text-2xl"
              style={{ letterSpacing: "2px" }}>
              <span className={newfont2.className}>
                We believe that good food should be both delicious and
                nutritious
              </span>
            </div>
            <div className="text-white mt-3 lg:text-xl text-base">
              Sed bibendum feugiat leo ut iaculis. Sed congue, dolor quis
              molestie viverra, metus ante hendrerit libero, ac dictum augue
              purus sed metus. In tincidunt lectus vitae ex euismod blandit.
              Donec pharetra, odio ut facilisis imperdiet, magna ex commodo
              nibh, in pharetra augue velit sed leo. Nullam in iaculis erat,
              vitae suscipit odio. Mauris eu scelerisque nisi. Vestibulum orci
              urna, sollicitudin nec aliquet in, lobortis nec urna.
            </div>
          </div>
        </div>
      </div>

      <Reservationheading />

      <Reservation />

      <Contactheading />

      <Contactus />

      <Footer />
    </>
  );
};

export default Display;

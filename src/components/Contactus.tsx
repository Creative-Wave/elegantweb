import { Divider } from "@nextui-org/react";
import { Bebas_Neue } from "next/font/google";

const newfont2 = Bebas_Neue({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

const Contactus = () => {
  return (
    <>
      <div className="md:h-screen h-auto bg-[#A59472]">
        <div className="md:mx-24 mx-10 h-full flex justify-center items-center">
          <div className="w-full md:h-[80dvh] h-auto md:flex block justify-center items-center md:space-x-9 space-x-0">
            {/* contact section start */}
            <div className="md:w-1/2 w-full h-full">
              <div className="text-4xl text-white">
                <span className={newfont2.className}>Contact Us</span>
              </div>
              <Divider className="mt-3 mb-3 bg-white h-[1px]" />
              <div className="flex w-full justify-between items-center text-white text-xl">
                <div className="">
                  <span className={newfont2.className}>Phone</span>
                </div>
                <div className="">
                  <span className={newfont2.className}>+91 123 456 789</span>
                </div>
              </div>
              <Divider className="mt-3 mb-3 bg-white h-[1px]" />
              <div className="flex w-full justify-between items-center text-white text-xl">
                <div className="">
                  <span className={newfont2.className}>Address</span>
                </div>
                <div className="text-right">
                  <span className={newfont2.className}>
                    Barasat Barruckpur road, <br /> kol-700121
                  </span>
                </div>
              </div>
              <Divider className="mt-3 bg-white h-[1px]" />
              <div className="text-4xl mt-4 text-white">
                <span className={newfont2.className}>Opening Hours</span>
              </div>
              <Divider className="mt-3 bg-white h-[3px] w-1/3" />
              <div className="flex w-full justify-between items-center text-white text-xl mt-3">
                <div className="">
                  <span className={newfont2.className}>Monday-Friday</span>
                </div>
                <div className="">
                  <span className={newfont2.className}>9:00 AM - 10:00 PM</span>
                </div>
              </div>
              <Divider className="mt-3 mb-3 bg-white h-[1px]" />
              <div className="flex w-full justify-between items-center text-white text-xl">
                <div className="">
                  <span className={newfont2.className}>Saturday</span>
                </div>
                <div className="text-right">
                  <span className={newfont2.className}>9:00 AM - 18:00 PM</span>
                </div>
              </div>
              <Divider className="mt-3 bg-white h-[1px]" />{" "}
              <div className="flex w-full justify-between items-center text-yellow-400 text-xl mt-3">
                <div className="">
                  <span className={newfont2.className}>Sunday</span>
                </div>
                <div className="text-right">
                  <span className={newfont2.className}>closed</span>
                </div>
              </div>
            </div>

            {/* map section start */}
            <div className="md:w-1/2 w-full h-full md:mt-0 mt-10 md:mb-0 mb-10">
              {" "}
              <iframe
                className="w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d3680.059004250939!2d88.46359873492506!3d22.726048171263425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x39f898bbeb1a7ac3%3A0xd8b2536e9dee5e79!2z4Kal4KeHIOCmk-Cmr-CmvOCnh-CmrOCnjeCmnOCmqOCnhyDgppXgp43gpq_gpr7gpqvgp4cgVEhFIFdFQlpPTkUgQ0FGRQ!3m2!1d22.7245082!2d88.4657194!4m5!1s0x39f8988d5afff335%3A0xe235c16c2851981c!2z4KaV4Kay4KaV4Ka-4Kak4Ka-LCDgppPgpq_gprzgp4fgprjgp43gpp8g4Kas4KeH4KaZ4KeN4KaX4KayIDcwMDEyNg!3m2!1d22.7245061!2d88.4658058!5e0!3m2!1sbn!2sin!4v1722522731790!5m2!1sbn!2sin"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactus;

import { Bebas_Neue } from "next/font/google";

const newfont2 = Bebas_Neue({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

const Blog1 = () => {
  return (
    <>
      <div className="min-h-screen bg-[#A59472] flex justify-center items-center p-10 md:p-24">
        <div className="flex flex-col lg:flex-row justify-between items-center w-full space-y-10 md:space-y-0">
          <div className="lg:w-1/2 w-full mb-5 lg:mb-0">
            <div
              className="text-[20px] md:text-[35px] text-white"
              style={{ lineHeight: "1.2" }}>
              <span className={newfont2.className}>
                At our restaurant, we believe that eggs are one of the most
                versatile and delicious ingredients out there. That's why we've
                made it our mission to create exceptional egg-based dishes that
                showcase the incredible flavors and textures that eggs can
                offer.
              </span>
            </div>
            <div className="mt-4 text-white text-base md:text-xl">
              Sed bibendum feugiat leo ut iaculis. Sed congue, dolor quis
              molestie viverra, metus ante hendrerit libero, ac dictum augue
              purus sed metus. In tincidunt lectus vitae ex euismod blandit.
              Donec pharetra, odio ut facilisis imperdiet, magna ex commodo
              nibh, in pharetra augue velit sed leo. Nullam in iaculis erat,
              vitae suscipit odio. Mauris eu scelerisque nisi. Vestibulum orci
              urna, sollicitudin nec aliquet in, lobortis nec urna.
            </div>
          </div>
          <div className="lg:w-1/2 w-full h-full">
            <img
              src="blog1.jpg"
              className="w-full h-auto object-cover"
              alt="Egg-based dish"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog1;

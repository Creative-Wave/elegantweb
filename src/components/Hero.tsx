import { Bebas_Neue } from "next/font/google";

const newfont2 = Bebas_Neue({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

const Hero = () => {
  return (
    <>
      <div className="lg:h-screen h-auto bg-[#A59472] flex justify-center items-center text-center">
        <div className="md:mx-24 mx-10">
          <div className="text-xl text-white mb-10 lg:mt-0 mt-5">About Us</div>
          <div className="md:text-4xl text-2xl text-white ">
            <span className={newfont2.className}>
              We are a New York's premier eggs specialty restaurant founded by{" "}
              Jack Bloom. We have a dedicated menu showcasing the versatility
              and deliciousness of eggs in all their forms, from classic
              omelettes and egg sandwiches to more unique creations like our egg
              and avocado toast or our smoked salmon and scrambled eggs{" "}
            </span>
          </div>
          <div className="mt-10 text-white font-bold">
            Donec ac rutrum libero, vitae gravida leo. Quisque in nulla purus.{" "}
            <br />
            Nulla scelerisque neque turpis, ac sagittis lorem volutpat a. Sed{" "}
            sed neque massa. Mauris blandit accumsan semper. Vestibulum <br />
            consectetur congue nunc. Proin blandit mauris nibh, ut ornare turpis{" "}
            gravida vel. Vivamus ac mi enim. Sed tincidunt quam ac risus <br />
            egestas, ut ornare ex hendrerit
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

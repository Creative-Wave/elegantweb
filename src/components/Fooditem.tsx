import Menucard from "./Menucard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Fooditem = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 3000,
    className: "slider variable-width",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerMode: true,
          centerPadding: "0px",
        },
      },
    ],
  };

  const foodcard = [
    {
      fId: "01",
      fImg: "menu-01.png",
      fName: "Photo Eggs Basil Breakfast Butterbrot Food",
      fPrice: "$4.40",
    },
    {
      fId: "02",
      fImg: "menu-02.png",
      fName: "oasted wheat bread with fried egg,",
      fPrice: "$3",
    },
    {
      fId: "03",
      fImg: "menu-03.png",
      fName: "Egg Tost",
      fPrice: "$1.40",
    },
    {
      fId: "04",
      fImg: "menu-04.png",
      fName: "Egg Side",
      fPrice: "$5.0",
    },
    {
      fId: "05",
      fImg: "menu-05.png",
      fName: "Grilled chicken with salad and rice ",
      fPrice: "$6.45",
    },
    {
      fId: "06",
      fImg: "menu-06.png",
      fName: "Mustard Crusted Chicken & Pumpkin",
      fPrice: "$7.40",
    },
    {
      fId: "07",
      fImg: "menu-07.png",
      fName: "Lemon Butter",
      fPrice: "$5.70",
    },
    {
      fId: "08",
      fImg: "menu-08.png",
      fName: "Mixed Fried Rice",
      fPrice: "$2.40",
    },
  ];

  return (
    <div className="h-screen bg-[#A59472] flex items-center justify-center px-10 md:px-20">
      <div className="w-full h-full">
        <Slider {...settings}>
          {foodcard.map((foodcard) => (
            <Menucard key={foodcard.fId} info={foodcard} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Fooditem;

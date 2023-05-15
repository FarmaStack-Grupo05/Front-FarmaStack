import { useState, useEffect } from "react";
import { Link  } from "react-router-dom";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
// import { Link } from "react-router-dom";

const Slides = () => {
  const slides = [
    {
      id: 1,
      url: "https://i.ibb.co/gdD9Q8t/Beauty-Product-Banner-Landscape.png",
      category: "personal-care",
    },
    {
      id: 2,
      url: "https://i.ibb.co/zbHH9Hw/Purple-and-White-Elegant-Lavender-Flowers-Cosmetics-Product-Medium-Banner-691-345-px.png",
      category: "personal-care",
    },
    {
      id: 3,
      url: "https://i.ibb.co/BNwCd8x/Green-Yellow-Product-Big-Sale-Banner-Landscape.png",
      category: "sexual-health",
    },
    {
      id: 4,
      url: "https://i.ibb.co/X5Sg42C/Green-Yellow-Product-Big-Sale-Banner-Landscape-1.png",
      category: "maternity",
    },
    {
      id: 5,
      url: "https://i.ibb.co/s6qNjtb/70972816-excelentes-anuncios-cosm-ticos-crema-facial-y-crema-para-manos-para-el-anuncio-de-venta-o.webp",
      category: "personal-care",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(currentIndex);
  //nuevo estado

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setActiveIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setActiveIndex(newIndex);
  };

  // const navigate = useNavigate();

  // const redirectToDetail = (e, index) => {
  //   const detailUrl = `farmastack/products`;
  //   navigate(detailUrl);
  //   setActiveIndex(index); //nuevo
  //   if (e.target.tagName === "A") {
  //     e.preventDefault();
  //   }
  // };

  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(slideInterval);
  });

  return (
    <div
      className="max-w-[1400px] h-[400px] w-full m-auto py-16 px-4 relative group
"
    >
      <Link  to= "farmastack/products"
              state={{category:slides[currentIndex].category}} >
        <div
          style={{
            backgroundImage: `url(${slides[currentIndex].url})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundColor: "white",
            padding: "50px",
            boxShadow:
              "5px 0px 5px -5px rgba(128,128,128,0.75), -5px 0px 5px -5px rgba(128,128,128,0.75)",
          }}
          className="w-full h-full rounded-2xl bg-center bg-cover duration-500 cursor-pointer"
        
        ></div>
      </Link>

      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, index) => (
          <span
            key={index}
            className={`text-2xl cursor-pointer ${
              activeIndex === index ? "text-blue-500" : "text-gray-500"
            }`}
            onClick={() => {
              const newIndex = index;
              setCurrentIndex(newIndex);
              setActiveIndex(newIndex);
            }}
          >
            <RxDotFilled />
          </span>
        ))}
      </div>
    </div>
  );
};
export default Slides;

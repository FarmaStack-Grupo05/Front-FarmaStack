import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { Link } from "react-router-dom";

const Slides = () => {
  const slides = [
    { 
      id:1,
      url: "https://i.ibb.co/gdD9Q8t/Beauty-Product-Banner-Landscape.png",
    },
    {
      id:2,
      url: "https://i.ibb.co/zbHH9Hw/Purple-and-White-Elegant-Lavender-Flowers-Cosmetics-Product-Medium-Banner-691-345-px.png",
    },
    { 
      id:3,
      url: "https://i.ibb.co/BNwCd8x/Green-Yellow-Product-Big-Sale-Banner-Landscape.png",
    },
    {
      id:4,
      url: "https://i.ibb.co/X5Sg42C/Green-Yellow-Product-Big-Sale-Banner-Landscape-1.png",
    },
    {
      id:5,
      url: "https://i.ibb.co/s6qNjtb/70972816-excelentes-anuncios-cosm-ticos-crema-facial-y-crema-para-manos-para-el-anuncio-de-venta-o.webp",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const navigate = useNavigate();

  // const redirectToDetail = (id) => {
  //   const detailUrl = `/products/${id}`;
  //   navigate(detailUrl);
  // };

  const redirectToDetail = (id) => {
    const detailUrl = `/products/${id}`;
    navigate(detailUrl);
  };
  
  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(slideInterval);
  });

  return (
    <div className="max-w-[1400px] h-[400px] w-full m-auto py-16 px-4 relative group
">
      <div
        style={{
          backgroundImage: `url(${slides[currentIndex].url})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "black",
          padding: "50px",
        }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
      ></div>
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="flex top-4 justify-center py-2">
      {slides.map((slide, slideIndex) => (
        <Link
          key={slideIndex}
          to={`/products/${slide.id}`} // Agregar la URL del componente Detail correspondiente
          className="text-2xl cursor-pointer"
          onClick={(e) => {
            e.preventDefault(); // Evitar que se recargue la página
            redirectToDetail(slide.id); // Llamar a la función redirectToDetail con el identificador único de la imagen del carrusel correspondiente
          }}
        >
          <RxDotFilled />
        </Link>
      ))}
      </div>
    </div>
  );
};
// let res = await axios.get(`${URL}/products/${id}`);
export default Slides;
import React, { useEffect, useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/slices/products/sliceProducts';

const Slide = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const { results } = useSelector(state => state.productsState.list);
  let slides = [];

  if (Array.isArray(results)) {
    slides = results.map(result => ({ url: result.image }));
  }

  const [currentIndex, setCurrentIndex] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [currentImageHeight, setCurrentImageHeight] = useState(0);

  useEffect(() => {
    if (slides[currentIndex]) {
      const img = new Image();
      img.onload = () => {
        setCurrentImageHeight(img.height);
      };
      img.src = slides[currentIndex].url;
    }
  }, [currentIndex, slides]);
  

  
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

  const goToSlide = slideIndex => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const handleMouseEnter = () => {
      clearInterval(intervalId);
      setIntervalId(null);
    };
    const handleMouseLeave = () => {
      const newIntervalId = setInterval(() => {
        nextSlide();
      }, 5000);
      setIntervalId(newIntervalId);
    };
    const newIntervalId = setInterval(() => {
      nextSlide();
    }, 5000);
    setIntervalId(newIntervalId);
    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex]);

  return (
    <div
      className="max-w-[1400px] w-full m-auto py-16 px-4 relative group"
      // style={{ height: '350px' }}
    >
      {slides.length > 0 && (
        <div
          style={{
            backgroundImage: `url(${slides[currentIndex].url})`,
            backgroundSize: '100% auto',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '350px',
          }}
          className="w-full rounded-2xl bg-center bg-cover duration-50"
        ></div>
  
      )}

      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
      <BsChevronCompactRight onClick={nextSlide} size={30} />
    </div>
    <div className='flex top-4 justify-center py-2'>
      {slides?.map((slide, slideIndex) => (
        <div
          key={slideIndex}
          onClick={() => goToSlide(slideIndex)}
          className='text-2xl cursor-pointer'
        >
          <RxDotFilled />
        </div>
      ))}
    </div>
  </div>
);

}
export default Slide

import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { RxDotFilled } from "react-icons/rx";
import { slides } from "./ModelDesc";

function Slider() {
  const goToSlide = (slideIndex: any) => {
    setCurrentIndex(slideIndex);
  };
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
  const openUrl = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div className="max-w-[1440px] mt-[-56px] w-full h-screen mx-auto py-28 px-4 relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full  bg-center bg-cover duration-500"
        onClick={() =>
          openUrl("https://www.ikea.com.tr/kategori/tabberas-koleksiyonu")
        }
      ></div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-10 text-2xl rounded-full p-2 bg-black text-white cursor-pointer">
        <IoIosArrowBack onClick={prevSlide} size={25} />
      </div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-10 text-2xl rounded-full p-2 bg-black text-white cursor-pointer">
        <IoIosArrowForward onClick={nextSlide} size={25} />
      </div>
      <div className="flex relative top-[-50px] justify-center py-2 z-50">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer  "
          >
            <RxDotFilled color="#8c8b8b99" size={35} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;

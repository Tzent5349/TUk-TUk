import Image from "next/image";
import { useState, useEffect } from "react";
import Swipe from "react-easy-swipe";
import Banner from "./Banner";

export default function Carousel({ images }) {
  useEffect(() => {
    const changeSlide = setInterval(() => {
      setCurrentSlide((currentSlide) =>
        currentSlide < images.length - 1 ? currentSlide + 1 : 0
      );
    }, 10000);
    return () => clearInterval(changeSlide);
  }, []);

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    let newSlide = currentSlide === images.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide);
  };

  const handlePrevSlide = () => {
    let newSlide = currentSlide === 0 ? images.length - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
  };

  return (
    <div className="relative min-w-full max-w-full  flex flex-col mt-2 ">
      {/*       <AiOutlineLeft
        onClick={handlePrevSlide}
        className="absolute left-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-gray-400 z-20"
      /> */}
      <div className="w-full h-[70vh] overflow relative m-auto">
        <Swipe
          onSwipeLeft={handleNextSlide}
          onSwipeRight={handlePrevSlide}
          className="relative z-10 w-full h-full"
        >
          {images.map((image, index) => {
            if (index === currentSlide) {
              return (
                <Image
                  key={index}
                  src={image.url}
                  fill
                  /* width={1131}
                  height={1600} */
                  style={{ objectFit: "fill" }}
                  className="animate-fadeIn  rounded-lg shadow-2xl overflow "
                  alt=""
                />
              );
            }
          })}
        </Swipe>
      </div>
      {/*       <AiOutlineRight
        onClick={handleNextSlide}
        className="absolute right-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-gray-400 z-20"
      />
 */}
      {/*       <div className="relative flex justify-center -top-8 z-20 p-2">
        {images.map((_, index) => {
          return (
            <div
              className={
                index === currentSlide
                  ? "h-4 w-4 bg-gray-700 rounded-full mx-2 mb-2 cursor-pointer"
                  : "h-4 w-4 bg-gray-300 rounded-full mx-2 mb-2 cursor-pointer"
              }
              key={index}
              onClick={() => {
                setCurrentSlide(index);
              }}
            />
          );
        })}
      </div> */}
    </div>
  );
}

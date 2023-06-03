import React, { useEffect, useState } from "react";

import fourStar from "../public/assets/images/fourStar.png";
import fiveStar from "../public/assets/images/fiveStar.png";
import Image from "next/image";

const Reviews = () => {
  const reviews = [
    {
      name: "Alex Reis",
      review:
        "“Great introduction to Lisbon. Suraj is engaging and speaks perfect English and we saw so much of the city. Cannot recommend highly enough! MUST do. Absolutely amazing 2+ hour tour.”",
      star: fourStar,
    },
    {
      name: "Xavier Barrel",
      review:
        "“Great surprise! Fantastic guide, interesting and rich information. Perfect ecological way to visit old part of Lisbon, especially if you have kids that don’t walk long distances easily.”",
      star: fiveStar,
    },
    {
      name: "Luis Corner",
      review:
        "Suraj is a great tour guide. He showed us so many sites in the historic area. So many highlights. Nuno has the perfect job for who he is!”",
      star: fiveStar,
    },
  ];

  useEffect(() => {
    const changeSlide = setInterval(() => {
      setCurrentSlide((currentSlide) =>
        currentSlide < reviews.length - 1 ? currentSlide + 1 : 0
      );
    }, 10000);
    return () => clearInterval(changeSlide);
  }, []);

  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="reviewsCaontainer w-full mt-10 bg-secondary flex justify-center py-2 items-center ">
      <div className="reviews px-4 grow md:grow-0 w-2/3">
        {reviews.map((review, id) => {
          if (id === currentSlide) {
            return (
              <div key={id} className="riv flex flex-col h-fit  text-neutral font-serif italic w-full">
                <h1 className=" tracking-widest ">{review.review}</h1>
                <div className="flex h-fit px-4">
                  <h1>{review.name}</h1>
                  <Image src={review.star} width={100} alt=""  className="ml-auto -mt-1 h-fit" />
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Reviews;

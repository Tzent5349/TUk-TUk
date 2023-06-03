import React from "react";

import Tram28 from "../public/assets/images/Follow1.jpg";
import OldTown from "../public/assets/images/OldTown1.webp";
import GoWest from "../public/assets/images/GoWest1.jpg";
import Shore from "../public/assets/images/Shore1.jpg";
import AllInclu from "../public/assets/images/Follow2.webp";
import Image from "next/image";
import Link from "next/link";

const Tours = () => {
  const TourPackage = [
    {
      name: "Follow Tram 28",
      price: "FROM €129",
      img: Tram28,
      time: "Duration 2h",
      link: "tour/followTram",
    },
    {
      name: "Old Town Lisbon",
      price: "FROM €99",
      img: OldTown,
      time: "Duration 1h30",
      link: "tour/oldTown",
    },
    {
      name: "Go West to Belém",
      price: "FROM €129",
      img: GoWest,
      time: "Duration 2h",
      link: "tour/belem",
    },
    {
      name: "Shore Excursion",
      price: "FROM €169",
      img: Shore,
      time: "Duration 2h30",
      link: "tour/shore",
    },
    {
      name: "All inclusive",
      price: "FROM €269",
      img: AllInclu,
      time: "Duration 5h",
      link: "tour/allInc",
    },
  ];

  return (
    <div className="toursWrapper w-full px-4 md:px-18  mt-10">
      <h2 className="text-center text-5xl font-black text-secondary">
        Packages Available
      </h2>
      <h3 className="leading-loose text-center text-xl font-medium pb-2 underline-offset-8 underline">
        Are you tuking me?
      </h3>
      <div className="tours flex gap-10 flex-wrap px-10 justify-center mt-10">
        {TourPackage.map((packages) => {
          return (
            <div
              key={packages.name}
              className="packWrapper flex flex-col border-2  "
            >
              <div className="imageContainer">
                <Image src={packages.img} width={400} alt="" />
              </div>
              <div className="info px-10 ">
                <h1 className="text-center text-xl font-semibold ">
                  {packages.name}
                </h1>
                <div className="priceNDuration flex justify-between">
                  <p className="text-lg">{packages.price}</p>
                  <p className="text-lg">{packages.time}</p>
                </div>
              </div>
              <Link href={packages.link}>
                <button className="w-full py-2 font-bold text-secondary bg-neutral-2 text-2xl border-t">
                  Book Now
                </button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tours;

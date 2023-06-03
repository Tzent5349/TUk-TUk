import React from "react";
import { Query } from "../components";
import { useRouter } from "next/router";

import Tram28 from "../public/assets/images/Follow1.jpg";
import OldTown from "../public/assets/images/OldTown1.webp";
import GoWest from "../public/assets/images/GoWest1.jpg";
import Shore from "../public/assets/images/Shore1.jpg";
import AllInclu from "../public/assets/images/Follow2.webp";
import Carte from "../public/assets/images/carte.webp";

import Image from "next/image";
import Link from "next/link";

const tours = () => {
  const router = useRouter();
  const TourPack = [
    {
      name: "Follow Tram 28",
      price1: "€129",
      people1: "1-3 People",
      price2: "€139",
      people2: "4-6 People",
      img: AllInclu,
      time: "2h",
      link: "tour/followTram",
      desc: "The 28 Tram is Lisbon’s beloved and legendary attraction. And that’s why we’ll comfortably “follow it” aboard our eco tuk-tuks!",
    },
    {
      name: "Old Town Lisbon",
      price1: "€99",
      people1: "1-3 People",
      price2: "€109",
      people2: "4-6 People",
      img: OldTown,
      time: "1h30",
      link: "tour/oldTown",
      desc: "Our fearless drivers will to take you along Lisbon's oldest quarters and iconic views, perfect for those who wish to discover the city through its historic and cultural heritage.",
    },
    {
      name: "Go West to Belém",
      price1: "€129",
      people1: "1-3 People",
      price2: "€139",
      people2: "4-6 People",
      img: GoWest,
      time: "2h",
      link: "tour/belem",
      desc: "Do you remember when the Portuguese ruled the World? We do and we’re ready to show you what is left of the Golden Era. Get ready to discover remarkable conquests without nuclear weapons, missiles or Trump.",
    },
    {
      name: "Shore Excursion",
      price1: "€169",
      people1: "1-3 People",
      price2: "€199",
      people2: "4-6 People",
      img: Shore,
      time: "2h30",
      link: "tour/shore",
      desc: "Eco Tuk Tours Lisbon is the official partner of the Cruise Terminal and for that reason we have the honor of being the most reliable option in this great Lisbon discovery. Explore the most beautiful and interesting quarters of Lisbon.",
    },
    {
      name: "All inclusive",
      price1: "€269",
      people1: "1-3 People",
      price2: "€279",
      people2: "4-6 People",
      img: Tram28,
      time: "5h",
      link: "tour/allInc",
      desc: "This is our best-selling tour! In 5 hours you can visit the most important landmarks of Lisbon aboard an Eco Tuk-Tuk guided by a local Storyteller. The eco-tuk drivers have a natural vocation to tell stories and make people feel at home.",
    },
    {
      name: "À La Carte",
      price1: "€79",
      people1: "Price From",
      img: Carte,
      time: "1h to 5h",
      link: "tour/carte",
      desc: "Design a tour according to your preferences and following the best routes that may exist. Between 1h to 4h we want you to see as many beautiful and important locations as possible. Find the best attractions in town.",
    },
  ];

  return (
    <div className="tukToursWrapper w-full flex mt-10 flex-col justify-center ">
      <h1 className=" text-center text-4xl md:text-6xl font-black">
        LISBON TUK TUK TOURS
      </h1>
      <div className="toursContainer w-full mt-10 gap-20 px-4 md:px-32 flex flex-col items-center ">
        {TourPack.map((packages, id) => {
          return (
            <div
              key={id}
              className="mainWrapper w-full flex md:flex-row gap-4 flex-col items-center md:items-start shadow-xl pb-4 rounded-2xl overflow-hidden" 
            >
              <div className="md:w-1/2 md:h-[400px] flex">
                <Image src={packages.img} alt="" className="h-72 rounded-e-2xl-2xl" />
              </div>

              <div className="infoHolder flex flex-col gap-8 md:w-1/2 items-center md:pt-4 ">
                <h1 className="text-4xl font-sans font-bold">
                  {packages.name}
                </h1>
                <p className="text-lg font-mono ml-2 font-medium">
                  {packages.desc}
                </p>
                <div className="flex justify-around w-full">
                  <div className="prices flex flex-col items-center">
                    <p className="text-primary text-xl font-extrabold">{packages.price1}</p>
                    <p className="text-primary text-xl font-extrabold">{packages.people1}</p>
                  </div>
                  <div className="prices flex flex-col items-center">
                    <p className="text-primary text-xl font-extrabold">{packages.price2}</p>
                    <p className="text-primary text-xl font-extrabold">{packages.people2}</p>
                  </div>
                  <div className="prices flex flex-col items-center">
                    <p className="text-primary text-xl font-extrabold">{packages.time}</p>
                    <p className="text-primary text-xl font-extrabold">Duration</p>
                  </div>
                </div>

                <div className="button sm:w-full md:w-auto shadow-xl">
                  <Link href={{pathname:packages.link}} className="">
                    <button onClick={()=>{router.push("/"+packages.link)}} className="bg-primary text-center w-full  text-4xl text-neutral inline-block font-bold items-center justify-center px-14 md:px-28 py-4 rounded-lg">
                      Learn More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Query/>
    </div>
  );
};

export default tours;

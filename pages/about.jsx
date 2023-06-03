import React from "react";
import Image from "next/image";
import {PreFooter} from "../components";

import { AiOutlineStar } from "react-icons/ai";

import Imaf from "../public/assets/images/abt.jpeg";
import Ima from "../public/assets/images/view.jpg";


const about = () => {
  return (
    <div className="aboutWrapper">
      <div className="aboutContainer">
        <div className="Headl bg-AboutBack bg-cover bg-no-repeat bg-center  flex h-72 md:h-[80vh] items-center justify-center">
          <h1 className="text-6xl font-black font-moon bg-slate-400/60">
            About Us
          </h1>
        </div>
        <div className="firstAbout mt-14 flex flex-col  px-16 md:px-0 md:pl-20 md:flex-row w-full justify-center items-center gap-6">
          <div className="leftPart mt-8 leading-[4rem] flex flex-col md:pl-20 justify-end  w-full">
            <h1 className="heading font-moon ml-auto text-[#333333] leading-[3rem] md:leading-[5rem] md:text-right font-medium text-4xl md:text-6xl">
              The Ecological solution for tours in Lisbon!
            </h1>
            <p className="font-semibold tracking-wider hyphens-none leading-loose font-OpenSans text-4xl mt-8 md:text-right">
              We are passionate about Lisbon, and we will share our vision of
              the capital with you using our eco-friendly tuks.
            </p>
          </div>
          <div className="rightPart flex ml-auto">
            <div className="imageHolder rounded-xl md:rounded-none md:rounded-l-xl overflow-hidden">
              <Image src={Imaf} alt="" />
            </div>
          </div>
        </div>
        <div className="secondAbout text-[#747474] text mt-14 flex flex-col  px-16 md:px-0 md:pl-20 md:flex-row w-full gap-6">
          <div className="leftPart md:w-3/5 leading-8 gap-8 flex flex-col md:pl-42 ">
            <p className="">
              Welcome to the future of tourism tours! No doubt here: electrical
              mobility will save the world and that’s why we want you to
              discover Lisbon’s culture while you take care of our capital by
              choosing the eco-friendly tuks.
            </p>
            <p className="">
              Our mission is to take visitors around the city in an ecological
              and sustainable way. Lisbon is the self-proclaimed E-Tuk capital
              of Europe. Our smooth, 100% electric and pollution-free vehicles
              are already a lot more famous than Madonna.
            </p>
            <p className="">
              Inspired by a positive energy we’ve created the most particular
              and exciting tour experiences aboard these “green” vehicles. In
              case you didn’t notice, Lisbon has 7 hills and if you’ve been
              missing the gym lately, maybe it is a good idea to blink an eye to
              our tuk-tuk driver and ask him/her to take you on your dream tour
            </p>
          </div>
          <div className="rightPart md:w-2/4 flex flex-col ml-auto">
            <p className="md:w-4/5">
              Oh, by the way, our company was the first to introduce those
              eco-friendly tuk-tuks in Lisbon so, yes, we’re the best.
            </p>
            <div className="stars gap-6 flex md:w-4/5 flex-col mt-10">
              <div className=" flex gap-4">
                <span className="">
                  <AiOutlineStar className="text-[#FFCD00] text-2xl mt-1" />
                </span>
                <p>Lisbon is the self-proclaimed E-Tuk capital of Europe.</p>
              </div>
              <div className=" flex gap-4">
                <span className="">
                  <AiOutlineStar className="text-[#FFCD00] text-2xl mt-1" />
                </span>
                <p>
                  Eco Tuk Tours Lisboa was the first company in Portugal to
                  introduce the eco-friendly tuk-tuks.
                </p>
              </div>
              <div className=" flex gap-4">
                <span className="">
                  <AiOutlineStar className="text-[#FFCD00] text-2xl mt-1" />
                </span>
                <p>
                  Tuk tuks got their name from the sound that the earliest
                  models make. The engine makes a ‘tuk tuk tuk tuk tuk’ sound!
                </p>
              </div>
              <div className=" flex gap-4">
                <span className="">
                  <AiOutlineStar className="text-[#FFCD00] text-2xl mt-1" />
                </span>
                <p>
                  Eco Tuk Tours Lisboa provides the best tourism experiences in
                  a sustainable way”
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image src={Ima} alt="" className="my-16"/>
      <PreFooter />
    </div>
  );
};

export default about;

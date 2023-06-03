import React from "react";
import Image from "next/image";

import Carbon from "../public/assets/images/carbon.png";
import Eco from "../public/assets/images/recycle.png";

import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="footerWrapper w-full flex flex-col  bg-secondary  text-neutral">
      <div className="footer flex justify-center w-full">
        <div className="flex gap-8 items-center justify-center w-1/3 md:w-1/6  border-neutral">
          <Image src={Eco} alt="" className="w-12" />
          <Image src={Carbon} alt="" className="w-12" />
        </div>
        <div className="socialmedia flex w-1/3 md:w-1/6  flex-col justify-center border-l-2  items-center">
          <h1 className="text-xl">Follow us on:</h1>
          <div className="icons flex items-center gap-8">
            <Link href={""}>
              {" "}
              <AiFillFacebook className="text-2xl" />{" "}
            </Link>
            <Link href={""}>
              {" "}
              <AiFillInstagram className="text-2xl" />{" "}
            </Link>
            <Link href={""}>
              {" "}
              <FaTripadvisor className="text-3xl" />
            </Link>
          </div>
        </div>
        <div className="links border-l-2 w-1/3 md:w-1/6  pl-4 flex flex-col">
          <h1 className="text-xl text-center">Links:</h1>
          <div className="links flex items-center flex-col">
            <Link href={""}>Book a Tour Now</Link>
            <Link href={""}>Gallery</Link>
            <Link href={""}>Contact</Link>
          </div>
        </div>
      </div>

      <div className="copyright bg-primary flex w-full flex-wrap items-center justify-center">
        <h1>|| All rights reserved by Abhishek Sharma || </h1>
        <h1> &nbsp; Copyright © 2023 ||</h1>

      </div>

    </div>
  );
};

export default Footer;

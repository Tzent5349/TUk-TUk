import React, { useState } from "react";
import { useRouter } from "next/router";
import Logo from "../public/assets/images/t4.png";
import Image from "next/image";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Link from "next/link";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showMenuCloseButton, setShowMenuCloseButton] = useState(false);
  const [showMobileMenuButton, setShowMobileMenuButton] = useState(true);
  const router = useRouter();

  return (
    <div className="navbarWrapper px-4 md:px-12 w-screen py-6 bg-neutral-2 border-b text-primary shadow-2xl shadow-secondary rounded flex items-center ">
      <div className="navbar flex w-full items-center px-4">
        <div className="logo flex items-center">
          <Link href="/">
            <Image src={Logo} alt="" width={70}></Image>
          </Link>
        </div>

        <div className="mobileLinks flex items-center md:hidden ml-auto">
          {showMobileMenuButton && (
            <button
              onClick={() => {
                setShowMobileMenu(true);
                setShowMobileMenuButton(false);
              }}
            >
              <AiOutlineMenu className="text-6xl text-secondary hover:text-neutral" />
            </button>
          )}

          {showMobileMenuButton || (
            <button
              onClick={() => {
                setShowMobileMenu(false);
                setShowMobileMenuButton(true);
              }}
            >
              <AiOutlineClose className="text-6xl text-secondary hover:text-action" />
            </button>
          )}

          {showMobileMenu && (
            <div className="links z-50 flex flex-col justify-center px-4 pb-4 bg-neutral-2 rounded-b-md items-center gap-8 absolute top-28 right-1">
              <button onClick={() => {setShowMobileMenu(false);setShowMobileMenuButton(true)}}>
                <Link
                  href={"/Tours"}
                  className={
                    router.pathname == "/Tours" ? "activeLink" : "inactiveLink"
                  }
                >
                  Tours
                </Link>
              </button>
              <button onClick={() => {setShowMobileMenu(false);setShowMobileMenuButton(true)}}>
                <Link
                    href={"/About"}
                    className={
                        router.pathname == "/About" ? "activeLink" : "inactiveLink"
                    }
                    >
                    About
                </Link>

                </button>

                <button onClick={() => {setShowMobileMenu(false);setShowMobileMenuButton(true)}}>

              <Link
                href={"/Gallery"}
                className={
                    router.pathname == "/Gallery" ? "activeLink" : "inactiveLink"
                }
                >
                Gallery
              </Link>
                </button>

              <button onClick={()=>{}} className="text-2xl flex items-center font-bold border text-secondary rounded px-2 hover:text-action ">
                Book now
              </button>
            </div>
          )}
        </div>

        <div className="linksForBigScreen hidden md:flex ml-auto items-center">
          <div className="links flex justify-center px-4 pb-4 bg-neutral-2 rounded-b-md items-center gap-8">
            <Link
              href={"/Tours"}
              className={
                router.pathname === "/Tours" ? "activeLink" : "inactiveLink"
              }
            >
              Tours
            </Link>
            <Link
              href={"/About"}
              className={
                router.pathname === "/About" ? "activeLink" : "inactiveLink"
              }
            >
              About
            </Link>
            <Link
              href={"/Gallery"}
              className={
                router.pathname === "/Gallery" ? "activeLink" : "inactiveLink"
              }
            >
              Gallery
            </Link>

            <button className="text-3xl flex items-center font-bold border border-action text-secondary rounded px-2 hover:text-action ">
              Book now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

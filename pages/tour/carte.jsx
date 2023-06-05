import React,{useState} from 'react'
import Image from "next/image";
import Tram28 from "../../public/assets/images/carte.webp";
import { Sidebar,Questions } from "../../components";
import { MdDone } from "react-icons/md";
import { FaMapMarkedAlt } from "react-icons/fa";


const Carte = () => {
    const [showHardRock, setShowHardRock] = useState(true);
    const [showRuaComercio, setShowRuaComercio] = useState(false);
  
  return (
    <>
    <div className="mainWrapper mt-16">
      <div className="main w-full flex justify-center px-8">
        <div className="leftPartWithAll md:w-2/4 flex items-center flex-col gap-4">
          <div className="imageholder">
            <Image src={Tram28} alt="" />
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-wide">
          À La Carte
          </h1>
          <h3 className=" text-2xl tracking-widest font-semibold">
          CUSTOMIZE YOUR DAY. YOUR TIME, YOUR TOUR
          </h3>

          {/* Price and duration info */}
          <div className="flex px-4 text-base w-full justify-evenly gap-4 md:gap-14">
            <div className="prices flex flex-col items-center">
              <p className="text-primary text-2xl font-extrabold">from €79</p>
        
            </div>
            <div className="prices flex flex-col items-center">
              <p className="text-primary text-2xl font-extrabold">1h to 4h</p>
            </div>
          </div>

          {/* From here starts desc part */}
          <div className="routeDesc mt-6 flex flex-col gap-8 font-normal text-[#747474] font-Sans">
            <p>
            
1h to 4h

With this option we can do it your way! But don’t get too excited, of course we have the last word and that word is “reasonable”… We know that our imagination can be tricky sometimes and for that reason no, we can´t take you to Rome to eat a pizza and come back to Lisbon in time for a portuguese sardines’ dinner.
            </p>
            <p>
            Our drivers will design a tour according to your preferences and following the best routes that may exist. Between 1h to 4h we want you to see as many beautiful and important locations as possible, and you can trust our drivers, they know exactly where you can find the best attractions in town.
            </p>
            <p>
            If you’re short on time and only have 1 hour, our advice is to have a chat with your driver and choose one of the gorgeous 7 hills. We know all the hills of this city like the palm of our hands, and we will tell you a little bit about each of these beautiful viewpoints so you’ll be able to make the best choice for your group.
            </p>
            <p>The journey up to any of the 7 hills is always a beautiful circuit and you can even choose between either the modern or the historic part of the city.</p>
            <p>For a wider and deeper perspective of the city a longer tour will allow you to discover Lisbon in its full potential. From the historic districts to the most fashionable quarters and modern areas in town, you won’t be disappointed with the many hidden treasures that Lisbon has to offer you.</p>
            <p>We wish you a good choice!</p>
          </div>

          {/* Routes inclusive */}
          <div className="routeInc mt-10 flex w-fit justify-between  font-normal text-[#747474] font-Sans ">
            <div className="left flex w-full flex-col gap-4 ">
              <div className=" flex gap-4">
                <span>
                  <MdDone className="text-2xl text-[#95C11F] " />
                </span>
                <p className=""> Private Tour;</p>
              </div>
              <div className=" flex gap-4">
                <span>
                  <MdDone className="text-2xl text-[#95C11F] " />
                </span>
                <p className="">Storyteller(driver-guide)</p>
              </div>
            </div>
            <div className="right flex w-full flex-col  gap-4">
              <div className="flex gap-4 ">
                <span>
                  <MdDone className="text-2xl text-[#95C11F]" />
                </span>
                <p className="">Blankets</p>
              </div>
              <div className="flex  gap-4">
                <span>
                  <MdDone className="text-2xl text-[#95C11F] " />
                </span>
                <p>
                  Pick up and drop off at one of our two free-of-charge
                  meeting points (Hard Rock Café or Rua do Comércio).
                </p>
              </div>
            </div>
          </div>


          {/* From here start meeting points */}
          <div className="meetingPointConatiner w-full mt-14">
            <h1 className="font-bold text-4xl text-start tracking-widest">
              MEETING POINT
            </h1>
            <div className="meeting point w-full mt-10  border rounded-lg overflow-hidden">
              <div className="navbar  border flex w-full">
                <button
                  className="w-full h-full py-4 text-center text-xl font-semibold border-r active:shadow-inner focus:drop-shadow-2xl"

                  onClick={() => {
                    setShowHardRock(true);
                    setShowRuaComercio(false);
                  }}
                >
                  Hard Rock Café
                </button>
                <button
                  className="w-full h-full py-4 text-center text-xl font-semibold active:shadow-inner"
                  onClick={() => {
                    setShowHardRock(false);
                    setShowRuaComercio(true);
                  }}
                >
                  Rua do Comércio
                </button>
              </div>
              {showHardRock && (
                <div className="conent" id="rockCafe">
                  <iframe
                    tabIndex="0"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3113.0493622300105!2d-9.14394868438769!3d38.7166756651811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19338110b45f51%3A0xf96a8bcb4f69e12d!2sHard%20Rock%20Cafe!5e0!3m2!1spt-PT!2spt!4v1597766384616!5m2!1spt-PT!2spt"
                    width="100%"
                    height="480"
                    allowFullScreen="allowfullscreen"
                    aria-hidden="false"
                  ></iframe>
                </div>
              )}
              {showRuaComercio && (
                <div className="content" id="ruaComercio">
                  <iframe
                    loading="lazy"
                    tabIndex="0"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3424.0375136981074!2d-9.138011618217591!3d38.70803230711435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1934798e0fb3b5%3A0x7adaf06bc078d77c!2sR.%20do%20Com%C3%A9rcio%2C%20Lisboa!5e0!3m2!1spt-PT!2spt!4v1597766530493!5m2!1spt-PT!2spt"
                    width="100%"
                    height="480"
                    allowFullScreen="allowfullscreen"
                    aria-hidden="false"
                  ></iframe>
                </div>
              )}
            </div>
          </div>

          {/* From here starts Query */}
          <div className="w-full mt-20">
            <Questions/>
          </div>
        </div>

{/*           <div className="rightPartWithDate h-[84dvh] border-black border-2 top-20 sticky">
                  
                <h1>haha</h1>
        </div> */}
      </div>
    </div>
  </>
  )
}

export default carte
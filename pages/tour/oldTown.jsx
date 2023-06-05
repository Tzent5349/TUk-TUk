import React, { useState } from "react";
import Image from "next/image";
import Tram28 from "../../public/assets/images/OldTown1.webp";
import { Sidebar, Questions } from "../../components";
import { MdDone } from "react-icons/md";
import { FaMapMarkedAlt } from "react-icons/fa";

const OldTown = () => {
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
              Lisbon Old Town Tour
            </h1>
            <h3 className=" text-2xl tracking-widest font-semibold">
              TRAVEL BACK IN TIME AND LEARN ABOUT LISBON&apos;S STORIES
            </h3>

            {/* Price and duration info */}
            <div className="flex px-4 text-base w-full justify-evenly gap-4 md:gap-14">
              <div className="prices flex flex-col items-center">
                <p className="text-primary text-2xl font-extrabold">€99</p>
                <p className=" text-lg">1-3 People</p>
              </div>
              <div className="prices flex flex-col items-center">
                <p className="text-primary text-2xl font-extrabold">€109</p>
                <p className=" text-lg">4-6 People</p>
              </div>
              <div className="prices flex flex-col items-center">
                <p className="text-primary text-2xl font-extrabold">1h30m</p>
                <p className=" text-lg">Duration</p>
              </div>
            </div>

            {/* From here starts desc part */}
            <div className="routeDesc mt-6 flex flex-col gap-8 font-normal text-[#747474] font-Sans">
              <p>
                This tour is perfect for those who wish to discover the city
                through its historic and cultural heritage. Our fearless drivers
                will to take you along Lisbon&apos;s oldest quarters, the most
                picturesque and colourful neighbourhoods characterized by its
                narrow streets, winding alleyways, steep flights of steps and
                old ladies at the windows.
              </p>
              <p>
                Visitors always fall in love with the old districts such as
                Mouraria, Graça and Alfama and you will soon make part of this
                Lovers list. In addition to the eco tuk-tuks, you can expect a
                quick stop in Alfama for a 10 min walking tour, because there is
                nothing like a power walk in the old Arab district of the city.
                Be ready to see for yourself the well-lined lanes, small arches
                and stone-paved terraces that are a delight to explore.
              </p>
              <p>
                The highest point in Lisbon is located in Graça and we will
                climb it together in a 3 wheels electric tuk until we reach the
                beautiful belvedere that kisses the sky. It&apos;s called “Nossa
                Senhora do Monte” belvedere and it&apos;s high, impressive, with an
                astonishing view over the city and if you fall down… Forget that
                option.
              </p>
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

            {/* From here starts highlights */}
            <div className="highlights mt-14 ">
              <h1 className="font-bold text-4xl tracking-widest">HIGHLIGHTS</h1>
              <div className="highContain flex mt-10 flex-col w-full justify-between gap-6 md:gap-10 font-normal text-[#747474] font-Sans">
                <div className="upperPart flex  flex-col md:flex-row gap-6 md:gap-4 w-full justify-between">
                  <div className=" flex flex-col md:gap-4 w-full">
                    <span className="flex items-center gap-4">
                      <FaMapMarkedAlt className="text-[#95C11F] text-2xl " />
                      <h1 className="font-medium text-lg text-black">Alfama</h1>
                    </span>
                    <p>
                      The city&apos;s oldest neighborhood, home to traditional Fado
                      houses and colorful narrow streets. A place where you feel
                      like you&apos;ve stepped back in time.
                    </p>
                  </div>
                  <div className=" flex flex-col md:gap-4 w-full">
                    <span className="flex items-center gap-4">
                      <FaMapMarkedAlt className="text-[#95C11F] text-2xl " />
                      <h1 className="font-medium text-lg text-black">
                        {" "}
                        Mouraria
                      </h1>
                    </span>

                    <p>
                      The most multi-ethnic neighborhood in the city where you
                      find food from all over the world and one of the most
                      beautiful tiled façades (Viúva de lamego – tiles and
                      ceramics shop).
                    </p>
                  </div>
                </div>

                <div className="lowerPart flex flex-col md:flex-row gap-6 md:gap-4 w-full">
                  <div className=" flex flex-col md:gap-4 w-full">
                    <span className="flex items-center gap-4">
                      <FaMapMarkedAlt className="text-[#95C11F] text-2xl " />
                      <h1 className="font-medium text-lg text-black">Graça</h1>
                    </span>

                    <p>
                      On the highest of the seven hills, Graça is located next
                      to the iconic São Jorge Castle and is famous for the
                      superb views.
                    </p>
                  </div>

                  <div className=" flex flex-col md:gap-4 w-full">
                    <span className="flex items-center gap-4">
                      <FaMapMarkedAlt className="text-[#95C11F] text-2xl " />
                      <h1 className="font-medium text-lg text-black">
                        Nossa Senhora do Monte Belvedere
                      </h1>
                    </span>

                    <p>
                      One of the highest points in the city with a magnificent
                      view, especially popular at sunset.
                    </p>
                  </div>
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
              <Questions />
            </div>
          </div>

          {/*           <div className="rightPartWithDate h-[84dvh] border-black border-2 top-20 sticky">
                  
                <h1>haha</h1>
        </div> */}
        </div>
      </div>
    </>
  );
};

export default oldTown;

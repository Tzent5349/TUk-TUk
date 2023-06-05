import Image from "next/image";
import Tram28 from "../../public/assets/images/Follow1.jpg";
import { Sidebar, Questions } from "../../components";
import { MdDone } from "react-icons/md";
import { GiPieSlice, GiStairsCake } from "react-icons/gi";
import { FaMapMarkedAlt, FaWineGlassAlt } from "react-icons/fa";

import { useState } from "react";

export default function AllInc() {
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
              All Inclusive
            </h1>
            <h3 className=" text-2xl tracking-widest font-semibold">
              STROLL AND EAT: THE BEST OF BOTH WORLDS
            </h3>

            {/* Price and duration info */}
            <div className="flex px-4 text-base w-full justify-evenly gap-4 md:gap-14">
              <div className="prices flex flex-col items-center">
                <p className="text-primary text-2xl font-extrabold">€269</p>
                <p className=" text-lg">1-3 People</p>
              </div>
              <div className="prices flex flex-col items-center">
                <p className="text-primary text-2xl font-extrabold">€279</p>
                <p className=" text-lg">4-6 People</p>
              </div>
              <div className="prices flex flex-col items-center">
                <p className="text-primary text-2xl font-extrabold">5h00m</p>
                <p className=" text-lg">Duration</p>
              </div>
            </div>

            {/* From here starts desc part */}
            <div className="routeDesc mt-6 flex flex-col gap-8 font-normal text-[#747474] font-Sans">
              <p>
                This is our best-selling tour! In 5 hours you can visit the most
                important landmarks of Lisbon aboard an Eco Tuk-Tuk guided by a
                local Storyteller. The eco-tuk drivers have a natural vocation
                to tell stories and make people feel at home.
              </p>
              <p>
                This tour option will give you privilege access to almost every
                sights of this city hard to compare with any other city in the
                world. Discover the wonderful viewpoints, the rooftops, and
                museums, typical and unique neighbourhoods such as Graça, Alfama
                and Baixa.
              </p>
              <p>
                We have a list of things that we would like to show you in
                Lisbon. See if there’s something on this list that you may
                appreciate:
              </p>
              <p>
                A wide glittering river, limpid skies, steep cobbled streets,
                palaces, churches, a glorious castle, splendid decorative tiles,
                fresh seafood to eat outside a tasca (bar) in the sun, an
                exuberant district called Bairro Alto with more than 250
                appealing bars, the world’s best custard cakes, Fado music, the
                poetry of Fernando Pessoa, surf and ferries, fabulous design,
                museums, awarded wines, craft beer, 7 cinematic hills, ancient
                ruins, outstanding architecture, belvederes, the iconic yellow
                Tram 28, vintage shops, the out of space flea market, and very,
                very nice people…
              </p>
            </div>

            {/* From here starts tasting experince */}
            <div className="tastinExperince mt-10">
              <h1 className="font-bold text-4xl tracking-widest">
                TASTING EXPERINCE
              </h1>
              <div className="tastingMain mt-6 flex flex-col gap-8 font-normal text-[#747474] font-Sans">
                <p>
                  Custard Tart (pastel de nata) – The famous creamy custard tart
                  available in almost all the pastelarias across the city. The
                  recipe dates back to the 16th century, when the confections
                  were made by nuns in convents. The challenge: try to eat only
                  one.
                </p>
                <p>
                  Ginja Liquor – One typical drink that you must try in Lisbon.
                  Instructions: Order your liquor “com ginja” (with a cherry in
                  the glass) or “sem ginja” (without the cherry).
                </p>
                <p>
                  Codfish Cake – For a petisco (snack) you can´t miss the chance
                  to try the traditional “pastel de bacalhau” (codfish cake).
                  Bacalhau (codfish) is one of Portugal’s culinary mascots.
                </p>
              </div>
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
                      <h1 className="font-medium text-lg text-black">
                        Commerce Square
                      </h1>
                    </span>

                    <p>
                      Lisbon’s main square. Before it was destroyed by the
                      earthquake of 1755, the Royal Palace was located here and
                      this place worked as the commercial port of the city, it
                      was considered the “door” to Lisbon.
                    </p>
                  </div>
                  <div className=" flex flex-col md:gap-4 w-full">
                    <span className="flex items-center gap-4">
                      <FaMapMarkedAlt className="text-[#95C11F] text-2xl " />
                      <h1 className="font-medium text-lg text-black">
                        {" "}
                        Alfama
                      </h1>
                    </span>

                    <p>
                      The city’s oldest neighborhood, home to traditional Fado
                      houses and colorful narrow streets. A place where you feel
                      like you’ve stepped back in time.
                    </p>
                  </div>
                </div>
                <div className="upperPart flex  flex-col md:flex-row gap-6 md:gap-4 w-full justify-between">
                  <div className=" flex flex-col md:gap-4 w-full">
                    <span className="flex items-center gap-4">
                      <FaMapMarkedAlt className="text-[#95C11F] text-2xl " />
                      <h1 className="font-medium text-lg text-black">
                        Mouraria
                      </h1>
                    </span>
                    <p>
                      The most multi-ethnic neighborhood in the city where you
                      find food from all over the world and one of the most
                      beautiful tiled façades (Viúva de lamego – tiles and
                      ceramics shop)
                    </p>
                  </div>
                  <div className=" flex flex-col md:gap-4 w-full">
                    <span className="flex items-center gap-4">
                      <FaMapMarkedAlt className="text-[#95C11F] text-2xl " />
                      <h1 className="font-medium text-lg text-black"> Graça</h1>
                    </span>

                    <p>
                      On the highest of the seven hills, Graça is located next
                      to the iconic São Jorge Castle and is famous for the
                      superb views.
                    </p>
                  </div>
                </div>
                <div className="upperPart flex  flex-col md:flex-row gap-6 md:gap-4 w-full justify-between">
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
                  <div className=" flex flex-col md:gap-4 w-full">
                    <span className="flex items-center gap-4">
                      <FaMapMarkedAlt className="text-[#95C11F] text-2xl " />
                      <h1 className="font-medium text-lg text-black">Chiado</h1>
                    </span>

                    <p>The trendiest neighbourhood, a must!</p>
                  </div>
                </div>

                <div className="upperPart flex  flex-col md:flex-row gap-6 md:gap-4 w-full justify-between">
                  <div className=" flex flex-col md:gap-4 w-full">
                    <span className="flex items-center gap-4">
                      <FaMapMarkedAlt className="text-[#95C11F] text-2xl " />
                      <h1 className="font-medium text-lg text-black">
                        Carmo Square
                      </h1>
                    </span>
                    <p>
                      This historic and picturesque square was the scene of the
                      1974 Carnation Revolution.
                    </p>
                  </div>
                  <div className=" flex flex-col md:gap-4 w-full">
                    <span className="flex items-center gap-4">
                      <FaMapMarkedAlt className="text-[#95C11F] text-2xl " />
                      <h1 className="font-medium text-lg text-black">
                        {" "}
                        São Pedro de Alcântara
                      </h1>
                    </span>

                    <p>
                      This privileged location offers scenic panoramic views
                      over the Castle of Saint George and the centre of the
                      city.
                    </p>
                  </div>
                </div>

                <div className="upperPart flex  flex-col md:flex-row gap-6 md:gap-4 w-full justify-between">
                  <div className=" flex flex-col md:gap-4 w-full">
                    <span className="flex items-center gap-4">
                      <FaMapMarkedAlt className="text-[#95C11F] text-2xl " />
                      <h1 className="font-medium text-lg text-black">
                        Estrela
                      </h1>
                    </span>
                    <p>
                      A calm and prosperous district where you may see the Royal
                      Basilica of Estrela with its ornate Baroque facade and the
                      pleasant Estrela Garden.
                    </p>
                  </div>
                  <div className=" flex flex-col md:gap-4 w-full">
                    <span className="flex items-center gap-4">
                      <FaMapMarkedAlt className="text-[#95C11F] text-2xl " />
                      <h1 className="font-medium text-lg text-black">Belém</h1>
                    </span>

                    <p>
                      This is the monumental historic district of the Age of
                      Discovery, here you’ll find the magnificent World Heritage
                      monuments, wonderful parks, gardens and the Tagus River as
                      landscape.
                    </p>
                  </div>
                </div>

                <div className="lowerPart flex flex-col md:flex-row gap-6 md:gap-4 w-full">
                  <div className=" flex flex-col md:gap-4 w-full">
                    <span className="flex items-center gap-4">
                      <FaMapMarkedAlt className="text-[#95C11F] text-2xl " />
                      <h1 className="font-medium text-lg text-black">
                        Jerónimos Monastery
                      </h1>
                    </span>

                    <p>
                      A World Heritage monument, one of the most prominent
                      examples of the Portuguese Late Gothic Manueline style of
                      architecture in Lisbon.
                    </p>
                  </div>

                  <div className=" flex flex-col md:gap-4 w-full">
                    <span className="flex items-center gap-4">
                      <FaMapMarkedAlt className="text-[#95C11F] text-2xl " />
                      <h1 className="font-medium text-lg text-black">
                        Belém Tower
                      </h1>
                    </span>

                    <p>
                      Built on the northern bank of the Tagus River between 1514
                      and 1520, the Belém Tower is one of the architectural
                      jewels of the reign of Manuel I.
                    </p>
                  </div>
                </div>
                <div className="lowerPart flex flex-col md:flex-row gap-6 md:gap-4 w-full">
                  <div className=" flex flex-col md:gap-4 w-full">
                    <span className="flex items-center gap-4">
                      <FaMapMarkedAlt className="text-[#95C11F] text-2xl " />
                      <h1 className="font-medium text-lg text-black">
                        Monument to the Discoveries
                      </h1>
                    </span>

                    <p>
                      An impressive monument to praise the qualities of the
                      Portuguese people. It represents a three-sailed ship ready
                      to depart, with sculptures of important historical figures
                      such as King Manuel I, poet Camões, Vasco da Gama, and
                      several other notable Portuguese explorers.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* From here start tastsing experince */}
            <div className="highlights mt-14 ">
              <h1 className="font-bold text-4xl tracking-widest">
                TASTING EXPERINCE
              </h1>
              <div className="highContain flex mt-10 flex-col w-full justify-between gap-6 md:gap-10 font-normal text-[#747474] font-Sans">
                <div className="upperPart flex  flex-col md:flex-row gap-6 md:gap-4 w-full justify-between">
                  <div className=" flex flex-col md:gap-4 w-full">
                    <span className="flex items-center gap-4">
                      <GiPieSlice className="text-[#95C11F] text-2xl " />
                      <h1 className="font-medium text-lg text-black">
                        Custard Tart (pastel de nata)
                      </h1>
                    </span>

                    <p>
                      The famous creamy custard tart available in almost all the
                      pastelarias across the city. The recipe dates back to the
                      16th century, when the confections were made by nuns in
                      convents. The challenge: try to eat only one.
                    </p>
                  </div>
                  <div className=" flex flex-col md:gap-4 w-full">
                    <span className="flex items-center gap-4">
                      <FaWineGlassAlt className="text-[#95C11F] text-2xl " />
                      <h1 className="font-medium text-lg text-black">
                        {" "}
                        Ginja Liquor
                      </h1>
                    </span>

                    <p>
                      One typical drink that you must try in Lisbon.
                      Instructions: Order your liquor “com ginja” (with a cherry
                      in the glass) or “sem ginja” (without the cherry).
                    </p>
                  </div>
                </div>
                <div className="lowerPart flex  flex-col md:flex-row gap-6 md:gap-4 w-full justify-between">
                  <div className=" flex flex-col md:gap-4 w-full">
                    <span className="flex items-center gap-4">
                      <GiStairsCake className="text-[#95C11F] text-2xl " />
                      <h1 className="font-medium text-lg text-black">
                        {" "}
                        Codfish Cake
                      </h1>
                    </span>

                    <p>
                      For a petisco (snack) you can´t miss the chance to try the
                      traditional “pastel de bacalhau” (codfish cake). Bacalhau
                      (codfish) is one of Portugal’s culinary mascots.
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
}

import Image from "next/image";
import Tram28 from "../../public/assets/images/Shore1.jpg";
import { Sidebar, Questions } from "../../components";
import { MdDone } from "react-icons/md";
import { FaMapMarkedAlt } from "react-icons/fa";

export default function shore() {
  return (
    <>
      <div className="mainWrapper mt-16">
        <div className="main w-full flex justify-center px-8">
          <div className="leftPartWithAll md:w-2/4 flex items-center flex-col gap-4">
            <div className="imageholder">
              <Image src={Tram28} alt="" />
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-wide">
              Shore Excursion Half-Day Tuk Tour
            </h1>
            <h3 className=" text-2xl tracking-widest font-semibold">
              AHOY SAILORS! TIME TO EXPLORE LAND.
            </h3>

            {/* Price and duration info */}
            <div className="flex px-4 text-base w-full justify-evenly gap-4 md:gap-14">
              <div className="prices flex flex-col items-center">
                <p className="text-primary text-2xl font-extrabold">€169</p>
                <p className=" text-lg">1-3 People</p>
              </div>
              <div className="prices flex flex-col items-center">
                <p className="text-primary text-2xl font-extrabold">€199</p>
                <p className=" text-lg">4-6 People</p>
              </div>
              <div className="prices flex flex-col items-center">
                <p className="text-primary text-2xl font-extrabold">3h00m</p>
                <p className=" text-lg">Duration</p>
              </div>
            </div>

            {/* From here starts desc part */}
            <div className="routeDesc mt-6 flex flex-col gap-8 font-normal text-[#747474] font-Sans">
              <p>
                We curated this private tour specifically for a shore excursion.
                You’ll visit the top highlights historical Lisbon, the must have
                places in 3h00. Guarantee that it’s the best option to discover
                the most of Lisbon with a local guide.{" "}
              </p>
              <p>
                At the end, if you have spare time left, our guide will advise
                he best restaurants, museums and activities
              </p>
              <p>
                No fuss finding your tour, since pick-up and drop-off is in
                front of the cruise terminal, and we have a long experience in
                Lisbon with shorex customers and their specific needs.{" "}
              </p>
              <p>
                Best price guarantee, not the usual rip-off of shore excursions.
                Taking advantage of online democratization, being the most
                reliable option in this great Lisbon discovery.{" "}
              </p>
              <p>
                This tour is perfect for those who wish to discover the city
                through its historic and cultural heritage.
              </p>
              <p>
                Our local guides will to take you along Lisbon’s oldest
                quarters, the most picturesque and colorful neighborhoods
                characterized by its narrow streets, winding alleyways, steep
                flights of steps and old ladies at the windows.
              </p>
              <p>
                Visitors always fall in love with the old districts such as
                Mouraria, Graça, Alfama, Chiado and Downtown and you will soon
                make part of this Lovers list.
              </p>
              <p>
                The highest point in Lisbon is located in Graça and we will
                climb it together in a 3 wheels electric tuk until we reach the
                beautiful belvedere that kisses the sky. It’s called “Nossa
                Senhora do Monte” belvedere and it’s high, impressive, with an
                astonishing view over the city.
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
                  <p>Pick up and drop off at Lisbon’s Cruise Terminal.</p>
                </div>
                <div className="flex  gap-4">
                  <span>
                    <MdDone className="text-2xl text-[#95C11F] " />
                  </span>
                  <p>Typical tastings;</p>
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
                      The city’s oldest neighborhood, home to traditional Fado
                      houses and colorful narrow streets. A place where you feel
                      like you’ve stepped back in time.
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
                <div className="midPart flex  flex-col md:flex-row gap-6 md:gap-4 w-full justify-between">
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
                        {" "}
                        Nossa Senhora do Monte Belvedere
                      </h1>
                    </span>

                    <p>
                      TOne of the highest points in the city with a magnificent
                      view, especially popular at sunset.
                    </p>
                  </div>
                </div>

                <div className="lowerPart flex flex-col md:flex-row gap-6 md:gap-4 w-full">
                  <div className=" flex flex-col md:gap-4 w-full">
                    <span className="flex items-center gap-4">
                      <FaMapMarkedAlt className="text-[#95C11F] text-2xl " />
                      <h1 className="font-medium text-lg text-black">Chiado</h1>
                    </span>

                    <p>
                      On the 25th of august, 1988, this area was severely
                      affected by a terrible fire which destructed partially
                      this neighbourhood.{" "}
                    </p>
                  </div>

                  <div className=" flex flex-col md:gap-4 w-full">
                    <span className="flex items-center gap-4">
                      <FaMapMarkedAlt className="text-[#95C11F] text-2xl " />
                      <h1 className="font-medium text-lg text-black">Baixa</h1>
                    </span>
                    <p>
                      The heart of Lisbon connecting all quarters, it’s a true
                      fusion of Portuguese culture, history and houses the
                      capital’s most emblematic squares and streets.
                    </p>{" "}
                  </div>
                </div>

                <div className="lowerPart flex flex-col md:flex-row gap-6 md:gap-4 w-full">
                  <div className=" flex flex-col md:gap-4 w-full">
                    <span className="flex items-center gap-4">
                      <FaMapMarkedAlt className="text-[#95C11F] text-2xl " />
                      <h1 className="font-medium text-lg text-black">
                        Bairro Alto
                      </h1>
                    </span>

                    <p>
                      One of Lisbon’s oldest and most traditional neighborhoods
                      with a magnificent viewpoint over saint George castle.{" "}
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
              <div className="meeting point mt-10 w-full border rounded-lg overflow-hidden">
                <div className="navbar  border flex w-full">
                  <button className="w-full h-full py-4 text-center text-xl font-semibold border-r active:shadow-inner focus:drop-shadow-2xl">
                    Lisbon Cruise Port
                  </button>
                </div>

                <div className="content  " id="ruaComercio">
                  <iframe
                    loading="lazy"
                    tabIndex="0"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3113.2361946011797!2d-9.125394348869927!3d38.71238587949953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19340ad3edf913%3A0xf4b3092a10ddd415!2sCruise%20Port!5e0!3m2!1spt-PT!2spt!4v1597768735370!5m2!1spt-PT!2spt"
                    width="100%"
                    height="480"
                    allowFullScreen="allowfullscreen"
                    aria-hidden="false"
                  ></iframe>
                </div>
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

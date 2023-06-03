import Image from "next/image";
import { Carousel, Banner, Tours, Reviews, PreFooter } from "../components";
import Image1 from "../public/assets/images/car1.jpg";
import Image2 from "../public/assets/images/car2.jpg";
import Image3 from "../public/assets/images/car3.jpg";

import LetsGo from "../public/assets/images/letsgo.webp";

export default function Home() {
  const slides = [{ url: Image1 }, { url: Image2 }, { url: Image3 }];
  return (
    <div className="home Wrapper bg-neutral">
      <div className="home">
        <div className="carousel relative h-fit flex justify-center items-center w-full px-4">
          <Carousel images={slides} />
          <Banner />
        </div>
        <Tours />
        <Reviews />
        <PreFooter />
      </div>
    </div>
  );
}

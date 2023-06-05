import React from 'react'
import Image from 'next/image';

import Image1 from "../public/assets/images/gallery/1.jpeg";
import Image2 from "../public/assets/images/gallery/2.jpeg";
import Image3 from "../public/assets/images/gallery/3.jpeg";
import Image4 from "../public/assets/images/gallery/4.jpeg";
import Image5 from "../public/assets/images/gallery/5.jpeg";
import Image6 from "../public/assets/images/gallery/6.jpeg";
import Image7 from "../public/assets/images/gallery/7.jpeg";
import Image8 from "../public/assets/images/gallery/8.jpeg";
import Image9 from "../public/assets/images/gallery/9.jpeg";
import Image10 from "../public/assets/images/gallery/10.jpeg";
import Image11 from "../public/assets/images/gallery/11.jpeg";
import Image12 from "../public/assets/images/gallery/12.jpeg";
/* import Image13 from "../public/assets/images/gallery/13.jpeg"; */



const Gall = () => {
  const images = [{src:Image1},{src:Image2},{src:Image3},{src:Image4},{src:Image5},{src:Image6},{src:Image7},{src:Image8},{src:Image9},{src:Image10},{src:Image11},{src:Image12},/* {src:Image13}, */]
  return (
    <div className="gallerWrapper w-full mt-10">
      <h1 className="font-moon text-6xl font-extrabold text-center">Gallery</h1>
      <div className="galleryContainer mt-10 flex w-full items-center  justify-center px-10 md:px-20">
        <div className="gallery flex gap-14 justify-center flex-wrap">
          {images.map((image, idx)=>{
            return(
              <div key={idx} className="image  border">
                <Image src={image.src} alt='' className='aspect-[4/2] object-fill' />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Gall
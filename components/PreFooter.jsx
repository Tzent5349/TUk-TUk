import React from 'react';

import Image from 'next/image';

import LetsGo from "../public/assets/images/letsgo.webp"
import Tur from "../public/assets/images/tur.webp";
import Tur1 from "../public/assets/images/tur1.webp";
import Tur2 from "../public/assets/images/tur2.webp";
import Tur3 from "../public/assets/images/tur3.webp";
import Tur4 from "../public/assets/images/tur4.webp";
import Carbon from "../public/assets/images/carbon.png";
import Eco from "../public/assets/images/recycle.png";


const PreFooter = () => {
  return (
    <div className='PreFooterContainer flex flex-col w-full items-center justify-center mt-10'>
            <Image src={LetsGo} alt=''/>
        <div className="Prefooter mt-4 flex w-full  shrink justify-around px-10 ">
            <Image src={Tur} alt='' className='w-20' />
            <Image src={Tur1} alt='' className='w-20' />
            <Image src={Tur2} alt='' className='w-20' />
            <Image src={Tur3} alt='' className='w-20' />
            <Image src={Tur4} alt='' className='w-20' />

        </div>
        <div className=" flex gap-10 items-center">


        </div>

    </div>
  )
}

export default PreFooter
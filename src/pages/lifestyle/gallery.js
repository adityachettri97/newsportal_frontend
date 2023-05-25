import Image from "next/image"
import {data1, data2 ,data3 ,data4} from './gallerydata'
import Mobilegallery from "./mobilegallery";
import { useState, useEffect } from "react";

const Gallery = () => {
  const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 640); //set breakpoint for mobile screens
        }
        handleResize();
        window.addEventListener('resize', handleResize);
        return() => window.removeEventListener('resize', handleResize);
    },[]);
  return (
    <>
    {isMobile && <Mobilegallery/>}
    {!isMobile && 
    <div className="relative flex gap-0.5">

        <div className="relative overflow-hidden md:h-44 lg:h-72 w-full">
        <div className="absolute -right-16 duration-200 hover:scale-110">
          <Image className="md:h-44 lg:h-72" src={data1.image} alt="lifestyle_img" width={500} height={500}/>
        </div>
        <div className="absolute left-5 md:top-14 lg:top-32">
          <div>
            <button className="text-sm text-white">{data1.title}</button>
          </div>
          <div className="mt-1 md:w-36 lg:w-72">
            <h1 className="md:w-40 lg:text-2xl font-bold text-white">{data1.heading}</h1>
          </div>
          <div className="md:hidden flex gap-1 mt-1">
              <div>
                  <p className="text-xs text-white font-bold">{data1.name}</p>
              </div>
              <div>
                <p className="text-xs text-white ">{data1.date}</p>
              </div>
          </div>
        </div>
        </div>


        <div className="relative overflow-hidden md:h-44 lg:h-72 w-full">
        <div className="absolute -right-16 duration-200 hover:scale-110">
          <Image className="md:h-44 lg:h-72" src={data2.image} alt="lifestyle_img" width={500} height={500}/>
        </div>
        <div className="absolute left-5 md:top-14 lg:top-32">
          <div>
            <button className="text-sm text-white">{data2.title}</button>
          </div>
          <div className="mt-1 md:w-36 lg:w-72">
            <h1 className="md:w-40 lg:text-2xl font-bold text-white">{data2.heading}</h1>
          </div>
          <div className="md:hidden flex gap-1 mt-1">
              <div>
                  <p className="text-xs text-white font-bold">{data2.name}</p>
              </div>
              <div>
                <p className="text-xs text-white ">{data2.date}</p>
              </div>
          </div>
        </div>
        </div>

        <div className="relative overflow-hidden md:h-44 lg:h-72 w-full">
        <div className="absolute -right-16 duration-200 hover:scale-110">
          <Image className="md:h-44 lg:h-72" src={data3.image} alt="lifestyle_img" width={500} height={500}/>
        </div>
        <div className="absolute left-5 md:top-14 lg:top-32">
          <div>
            <button className="text-sm text-white">{data3.title}</button>
          </div>
          <div className="mt-1 md:w-36 lg:w-72">
            <h1 className="md:w-40 lg:text-2xl font-bold text-white">{data3.heading}</h1>
          </div>
          <div className="md:hidden flex gap-1 mt-1">
              <div>
                  <p className="text-xs text-white font-bold">{data3.name}</p>
              </div>
              <div>
                <p className="text-xs text-white ">{data3.date}</p>
              </div>
          </div>
        </div>
        </div>

        <div className="relative overflow-hidden md:h-44 lg:h-72 w-full">
        <div className="absolute -right-16 duration-200 hover:scale-110">
          <Image className="md:h-44 lg:h-72" src={data4.image} alt="lifestyle_img" width={500} height={500}/>
        </div>
        <div className="absolute left-5 md:top-14 lg:top-32">
          <div>
            <button className="text-sm text-white">{data4.title}</button>
          </div>
          <div className="mt-1 md:w-36 lg:w-72">
            <h1 className="md:w-40 lg:text-2xl font-bold text-white">{data4.heading}</h1>
          </div>
          <div className="md:hidden flex gap-1 mt-1">
              <div>
                  <p className="text-xs text-white font-bold">{data4.name}</p>
              </div>
              <div>
                <p className="text-xs text-white ">{data4.date}</p>
              </div>
          </div>
        </div>
        </div>


    </div>
}
    </>
  )
}

export default Gallery
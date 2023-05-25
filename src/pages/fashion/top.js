import Image from "next/image"
import Cover from "../../../public/fashionpage/cover.jpg"
import {RiArrowDropRightLine} from "react-icons/ri"
import Mobiletop from "./mobiletop";
import { useState, useEffect } from "react";

const Top = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);//set breakpoint for mobile screens
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return() => window.removeEventListener('resize', handleResize);
  }, []);
    return(
        <>
        {isMobile && <Mobiletop/>}
    {!isMobile && 
        <div className="relative">
            <div className="relative overflow-hidden h-96 z-0">
            <div className="absolute lg:-top-48">
                    <Image className="h-full w-screen" src={Cover} alt="cover_img"/>
            </div>
        </div>
        <div className="absolute z-10 top-0 h-96 w-full bg-transparentgrey"></div>
        <div className="absolute z-20 top-5 md:left-4 lg:left-24 flex items-center">
                <p className="text-xs text-white hover:text-lightgrey">Home</p>
                <p>
                    <RiArrowDropRightLine className="text-white font-extralight mt-1"/>
                    </p>
                <p className="text-xs text-white">Fashion</p>
            </div>
        <div className="absolute z-20 md:top-32 lg:top-40 md:left-4 lg:left-24 flex items-center">
            <h1 className="text-white text-4xl font-bold">FASHION</h1>    
        </div>
        <div className="absolute md:top-48 lg:top-56 z-20 md:left-4 lg:left-24 flex gap-1 items-center">
            <div className="h-4 w-16 pb-4 border border-orange bg-orange hover:bg-orange hover:opacity-80 hover:duration-500">
                <p className="text-xs ml-1 text-white">New Look</p>
            </div>
            <div className="h-4 w-24 pb-4 border border-orangered bg-orangered hover:bg-orangered hover:opacity-80 hover:duration-500">
                <p className="text-xs ml-3 text-white">Street Fashion</p>
            </div>
            <div className="h-4 w-20 pb-4 border border-pinkish bg-pinkish hover:bg-pinkish hover:opacity-80 hover:duration-500">
                <p className="text-xs ml-2 text-white">Style Hunter</p>
            </div>
            <div className="h-4 w-12 pb-4 border border-darkpink bg-darkpink hover:bg-darkpink hover:opacity-80 hover:duration-500">
                <p className="text-xs ml-2 text-white">Vogue</p>
            </div>
        </div>
        <div className="absolute z-20 md:top-56 lg:top-64 md:left-4 lg:left-24 flex items-center">
            <h2 className="text-white text-lg italic w-3/4">
            Custom category description. You must learn one thing. The world was made to be free in. 
            Give up all the other worlds Except the one in which you belong.
            </h2>    
        </div>
        </div>
    }
    </>
        
    )
}

export default Top
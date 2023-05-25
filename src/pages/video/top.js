import { useState, useEffect } from "react";
import {RiArrowDropRightLine} from "react-icons/ri"
import Gallery from "./gallery"
import Mobiletop from "./mobiletop";

const Top = () => {
    const [isMobile, setIsMobile] = useState(false);
  
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 640);
      };
  
      window.addEventListener("resize", handleResize);
      handleResize();
  
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  return (
    <>
    {isMobile ? (
      <Mobiletop />
    ) : (
        <div className="">
        <div className="flex items-center md:ml-4">
            <div className="">
                <p className="text-xs text-lightgrey hover:text-black">Home</p>
            </div>
            <div>
                <p>
                    <RiArrowDropRightLine className="text-lightgrey font-extralight mt-1"/>
                </p>
            </div>
            <div>
                <p className="text-xs text-lightgrey">Video</p>
            </div>
        </div>

        <div className="bg-thingrey w-full my-6 h-px "></div>

        <div className="md:ml-4">
            <h1 className="text-3xl font-bold">VIDEO</h1>
        </div>

        <div className="w-5/6 mt-4 md:ml-4">
            <p className="text-lg italic text-lightgrey">Custom category description. You must learn one thing. The world was made to be free in.
                 Give up all the other worlds Except the one in which you belong.</p>
        </div>

        <div>
            <Gallery/>
        </div>

    </div>

    )}


        


    </>
  )
}

export default Top
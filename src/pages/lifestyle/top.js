import { useEffect, useState } from "react"
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

        <>
        <div className="md:mx-2">
                  <div className="flex items-center">
                      <div>
                          <p className="text-xs text-lightgrey hover:text-black">Home</p>
                      </div>
                      <div>
                          <p>
                              <RiArrowDropRightLine className="text-lightgrey font-extralight mt-1" />
                          </p>
                      </div>
                      <div>
                          <p className="text-xs text-lightgrey">Lifestyle</p>
                      </div>
                  </div>

                  <div>
                      <h1 className="text-3xl font-bold">LIFESTYLE</h1>
                  </div>

                  <div className="flex gap-2 mt-4">
                      <div className="">
                          <button className="text-xs border border-thingrey px-1 hover:bg-black hover:text-white">Business</button>
                      </div>
                      <div className="">
                          <button className="text-xs border border-thingrey px-1 hover:bg-black hover:text-white">Health & Fitness</button>
                      </div>
                      <div className="">
                          <button className="text-xs border border-thingrey px-1 hover:bg-black hover:text-white">Recipes</button>
                      </div>
                      <div className="">
                          <button className="text-xs border border-thingrey px-1 hover:bg-black hover:text-white">Travel</button>
                      </div>
                  </div>

                  <div className="md:w-11/12 lg:w-5/6 lg:mt-4">
                      <p className="text-lg italic text-lightgrey">Custom category description. You must learn one thing. The world was made to be free in.
                          Give up all the other worlds Except the one in which you belong.</p>
                  </div>
              </div><div className="lg:mt-10">
                      <Gallery />
                  </div>
                  </>)}</>

  )
}

export default Top
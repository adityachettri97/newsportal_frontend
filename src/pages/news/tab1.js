/* eslint-disable react/no-unescaped-entities */

import { useEffect, useState } from "react";
import Mobiletab1 from "./mobiletab1";

const Tab1 = () => {

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
    {isMobile && <Mobiletab1/>}
    {!isMobile && 
    <>
    <div className="flex justify-between items-center md:gap-3">
        <div className="bg-goldenyellow w-24 p-1 text-sm text-center">DON'T MISS</div>
        <div className="flex gap-5">
            <div>
              <p className="md:text-xs lg:text-sm text-lightgrey cursor-pointer hover:text-goldenyellow">All</p>
            </div>
            <div>
              <p className="md:text-xs lg:text-sm text-lightgrey cursor-pointer hover:text-goldenyellow">Style Hunter</p>
            </div>
            <div>
              <p className="md:text-xs lg:text-sm text-lightgrey cursor-pointer hover:text-goldenyellow">Vogue</p>
            </div>
            <div>
              <p className="md:text-xs lg:text-sm text-lightgrey cursor-pointer hover:text-goldenyellow">Health & Fitness</p>
            </div>
            <div>
                <p className="md:text-xs lg:text-sm text-lightgrey cursor-pointer hover:text-goldenyellow">Travel</p>
            </div>
            <div>
                <p className="md:text-xs lg:text-sm text-lightgrey cursor-pointer hover:text-goldenyellow">Gadgets</p>
            </div>
            <div>
                <p className="md:text-xs lg:text-sm text-lightgrey cursor-pointer hover:text-goldenyellow">More</p>
            </div>
        </div>
      </div>
      <div className="h-0.5 w-full bg-goldenyellow"></div>
      </>
    }
      </>
  )
}

export default Tab1
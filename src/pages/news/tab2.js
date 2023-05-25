import { useEffect, useState } from "react";
import Mobiletab2 from "./mobiletab2";

const Tab2 = () => {
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
    {isMobile && <Mobiletab2/>}
    {!isMobile && 
    <>
        <div className="flex justify-between items-center">
        <div className="bg-leafgreen w-32 p-1 text-sm text-center text-white">LIFESTYLE NEWS</div>
        <div className="flex gap-5">
            <div>
              <p className="md:text-xs lg:text-sm text-lightgrey cursor-pointer hover:text-leafgreen">All</p>
            </div>
            <div>
                <p className="md:text-xs lg:text-sm text-lightgrey cursor-pointer hover:text-leafgreen">Travel</p>
            </div>
            <div>
              <p className="md:text-xs lg:text-sm text-lightgrey cursor-pointer hover:text-leafgreen">Recipes</p>
            </div>
            <div>
              <p className="md:text-xs lg:text-sm text-lightgrey cursor-pointer hover:text-leafgreen">Health & Fitness</p>
            </div>
            <div>
                <p className="md:text-xs lg:text-sm text-lightgrey cursor-pointer hover:text-leafgreen">Music</p>
            </div>
        </div>
      </div>
      <div className="h-0.5 w-full bg-leafgreen"></div>
      </>
    }
    </>
  )
}

export default Tab2
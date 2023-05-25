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
  return (
    <>
    {isMobile && <Mobiletop/>}
    {!isMobile && 
    <div className="absolute md:left-8 lg:left-24">
        <div className="mt-4">
        <h1 className="text-4xl font-bold">
            Gadgets
        </h1>
        <div className="mt-4">
            <div className="flex md:gap-2 lg:gap-4">
                <p className="text-xs">GADGETS</p>
                <p className="text-xs text-thingrey">/</p>
                <p className="text-xs text-skyblue hover:text-black">MOBILE PHONES</p>
                <p className="text-xs text-thingrey">/</p>
                <p className="text-xs text-skyblue hover:text-black">PHOTOGRAPHY</p>
                <p className="text-xs text-thingrey">/</p>
                <p className="text-xs text-skyblue hover:text-black">REVIEWS</p>
            </div>
        </div>
    </div>
    </div>
}
    </>
  )
}

export default Top
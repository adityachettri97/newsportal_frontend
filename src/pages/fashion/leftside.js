/* eslint-disable react/jsx-key */
import { useState, useEffect } from "react";
import Image from "next/image"
import Newsdata from "./fashion.json"
import Mobile_leftside from "./mobile_leftside";

const Leftside = () => {
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
        {isMobile && <Mobile_leftside/>}
    {!isMobile && 
        <div className="relative">
            <div className="absolute -top-5 md:left-3 lg:left-24 bg-black2 w-28">
                <p className="mx-3 text-white text-sm">LATEST NEWS </p>
            </div>
            <div className="absolute md:left-3 lg:left-24 h-0.5 md:w-full lg:w-10/12 bg-black2"></div>
           <div className="absolute md:left-3 lg:left-24 mt-10 grid grid-cols-2 gap-8">
            {
                Newsdata.map((data) => (
                    <div className="relative">
                        <div className="hover:text-skyblue">
                        <div className="overflow-hidden h-40">
                            <Image className="w-screen" src={data.image} width={500} height={500} alt="fashion1"/>
                        </div>
                        <div className="absolute top-28 mt-3 bg-black2 hover:bg-skyblue w-10">
                            <p className="text-white  text-xs font-medium mt-px p-0.5 mx-px">{data.tag}</p>
                        </div>
                        <div className="">
                            <p className="text-lg w-60 font-medium">{data.heading}</p>
                        </div>
                        </div>
                        <div className="flex gap-1 mt-1">
                            <div>
                                <p className="text-xs font-bold">{data.paragraph1}</p>
                            </div>
                            <div>
                                <p className="text-xs font-light text-lightgrey">{data.paragraph2}</p>
                            </div>
                        </div>
                    </div>

                )
            )}

           </div>
        </div>
}
        </>
    )
}

export default Leftside
import Image from "next/image"
import Link from "next/link"
import {RiArrowDropRightLine} from "react-icons/ri"
import {BsFillEyeFill} from "react-icons/bs"
import {TbMessageCircle2Filled} from "react-icons/tb"
import Dpicture from "../../../components/assests/dp.jpg"
import Links from "./links"
import Mobiletop from "./mobiletop"
import { useEffect, useState } from "react"

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
        <div className="lg:relative md:relative">
        <div className="ml-20">
            <div className="flex items-center">
    <Link className="text-xs text-lightgrey hover:text-black" href="/">Home</Link>
    <p><RiArrowDropRightLine className="text-lightgrey font-extralight mt-1"/></p>
    <Link className="text-xs text-lightgrey hover:text-black" href="/">Technology</Link>
    <p><RiArrowDropRightLine className="text-lightgrey font-extralight mt-1"/></p>
    <Link className="text-xs text-lightgrey hover:text-black" href="/">Reviews</Link>
    <p><RiArrowDropRightLine className="text-lightgrey font-extralight mt-1"/></p>
    <p className="text-lightgrey text-xs">Computer Filters Noise to Make You a Better Listener</p>
    </div>
    <div>
    <div className="flex items-center justify-center text-center">
        <button className="border bg-skyblue text-black hover:bg-brightskyblue border-skyblue duration-300 w-11 h-4 mt-2 text-xs font-light">Reviews</button>
        </div>
        <div className="flex items-center justify-center text-center">
            <h1 className="text-4xl mt-3 font-bold">Computer Filters Noise to Make You a Better Listener</h1>
        </div>
    </div>
        <div className="flex items-center justify-center text-center gap-8">
            <div className="flex gap-2 items-center">
                <div className="mt-3 flex gap-1 items-center">
                    <Image className="w-5 rounded-xl" src={Dpicture} alt="profile" />
                    <p className="text-lightgrey text-xs">By</p>
                    <p className="text-xs font-bold">Armin Vans</p>
                </div>
                <div className="mt-3">
                    <p className="text-lightgrey text-xs">- August 7, 2019</p>
                </div>
            </div>
            <div className="flex items-center gap-4 mt-3">
                <div className="flex items-center">
                <BsFillEyeFill className="text-darkgrey text-sm"/>
                <p className="text-darkgrey text-xs p-1">9885</p>
                </div>
                <div className="flex items-center">
                <TbMessageCircle2Filled className="text-darkgrey text-sm"/>
                <p className="text-darkgrey text-xs p-1">0</p>
                </div>
                
            </div>
            
        </div>
        <div className="my-6">
            <Links/>
        </div>
            </div>
    </div>
          )}
    </>
    )
}

export default Top
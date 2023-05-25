import Image from "next/image"
import VideoData from "./gallery.json"
import {BsPlayCircle} from "react-icons/bs"
import { useState, useEffect } from "react"
import Mobilegallery from "./mobilegallery"

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
    <div className="flex items-center justify-center gap-1 mt-5 md:mx-4">
         {VideoData.map((data) => (
        <>
            <div className="relative overflow-hidden">
            <div className="w-full md:h-80 lg:h-96 hover:scale-110 duration-300 ">
                <Image className="h-80 scale-x-150 " src={data.image} alt="video_img" width={520} height={500} />
            </div>
            <div className="absolute md:top-36 lg:top-32 md:left-40 lg:left-52 bg-transblack rounded-full ">
                <BsPlayCircle className="text-5xl text-white"/>
            </div>
            <div className="absolute md:top-52 lg:top-48 left-5">
                <div>
                    <button className="bg-transblack2 text-medium text-white text-xs px-1">{data.title}</button>
                </div>
                <div className="mt-1">
                    <h1 className=" lg:text-2xl font-bold text-white w-96">{data.heading}</h1>
                </div>
                <div className="flex gap-1 mt-2">
                    <div>
                        <p className="text-xs text-white font-bold">{data.name}</p>
                    </div>
                    <div>
                        <p className="text-xs text-white">{data.date}</p>
                    </div>
                </div>
            </div>
            </div>


            </>
    )
    )}

        


    </div>
}
    </>
  )
}

export default Gallery
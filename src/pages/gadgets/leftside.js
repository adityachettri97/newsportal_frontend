/* eslint-disable react/jsx-key */
import { useState, useEffect } from "react";
import Image from "next/image"
import Gadgetsdata from "./gadgets.json"
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
  return (
    <>
    {isMobile && <Mobile_leftside/>}
    {!isMobile && 
    <div>
        <div>
            {Gadgetsdata.map((data) => (
                <>
                    <div className="flex mt-8 md:ml-4 lg:gap-7">
                        <div className="flex flex-col w-60 gap-3">
                            <div>
                                <p className="text-xs text-skyblue font-medium">{data.title}</p>
                            </div>
                            <div className="md:w-52">
                                <h1 className="font-semibold text-lg">{data.heading}</h1>
                            </div>
                            <div>
                                <p className="text-sm text-lightgrey md:hidden">{data.paragraph}</p>
                            </div>
                            <div className="text-lightgrey text-xs lg:mt-1">{data.date}</div>
                        </div>
                        <div>
                            <Image className="w-72 h-36" src={data.image} alt="gadgets_img_cat" width={500} height={500}/>
                        </div>
                    </div>
                </>
            )
            )}

        </div>
    </div>
}
    </>
  )
}

export default Leftside
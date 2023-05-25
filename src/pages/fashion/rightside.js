import Image from "next/image"
import RightsideImg from "../../components/assests/rightside.jpg"
import Read from "../../components/Read/Read"
import Mobile_rightside from "./mobile_rightside";
import { useState, useEffect } from "react";

const Rightside = () => {
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
      {isMobile && <Mobile_rightside/>}
      {!isMobile && 
        <div>
            <div className="pt-4 ml-5">
            <Image src={RightsideImg} alt="right component img"/>
      </div>
      <div className="md:w-64 lg:w-80">
        <Read/>
      </div>
        </div>
      }
      </>
    )
}

export default Rightside
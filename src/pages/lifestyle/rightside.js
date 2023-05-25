import { useEffect, useState } from "react"
import Read from "./Read/Read"
import Image from "next/image"
import Rightsideimg from "../../components/assests/rightside.jpg"
import Follow from "./follow"
import Mobilerightside from "./mobilerightside"

const Rightside = () => {
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
      <Mobilerightside />
    ) : (
    <div className="">

      <div className="mt-8">
          <Image src={Rightsideimg} alt="rightsideimg"/>
      </div>
      <div className="mt-14">
        <Follow/>
      </div>
      <div>
        <Read/>
      </div>
      </div>
    )}
    </>
  )
}

export default Rightside
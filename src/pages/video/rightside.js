import { useEffect, useState } from "react"
import Image from "next/image"
import Rightsideimg from "../../components/assests/rightside.jpg"
import Mobileright from "./mobileright"
import Read from "./Read/Read"

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
      <Mobileright />
    ) : (
    <div>
      <div className="mt-8">
        <Image src={Rightsideimg} alt="rightsideimg"/>
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
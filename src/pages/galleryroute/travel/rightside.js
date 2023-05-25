import Most_popular from "@/components/Most_popular/Most_popular"
import Recent_comments from "@/components/Recent_comments/Recent_comments"
import Image from "next/image"
import { useEffect, useState } from "react"
import RightsideImg from "../../../components/assests/rightside.jpg"
import Mobilerightside from "./mobilerightside"


const Rightside = () => {
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
    {isMobile ? (
      <Mobilerightside />
    ) : (
    <div className="bg-white w-full h-full">
       <div>
            <div className="pt-4 ml-5">
            <Image src={RightsideImg} alt="right component img"/>
      </div>
      <div className="md:w-64 lg:w-80">
        <Most_popular/>
      </div>
      <div className="md:w-64 lg:w-80">
        <Recent_comments/>
      </div>
        </div>
    </div>
    )}
    </>
  )
}

export default Rightside
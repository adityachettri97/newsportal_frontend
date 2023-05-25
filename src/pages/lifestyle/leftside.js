import Lifestylecat from "./lifestylecat"
import { useState, useEffect } from "react";
import Mobileleftside from "./mobileleftside";

const Leftside = () => {
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
      <Mobileleftside />
    ) 
    : (
    <div>
      <Lifestylecat/>
    </div>
    )}
    </>
  )
}

export default Leftside
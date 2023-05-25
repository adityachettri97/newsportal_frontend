import Mobile_rightside from "./mobile_rightside";
import Recent_articles from "./recent_articles"
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
    <div>
      {isMobile && <Mobile_rightside/>}
    {!isMobile && 
        <Recent_articles/>
    }
    </div>
  )
}

export default Rightside
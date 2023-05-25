import {GiShare} from "react-icons/gi"
import {SlArrowRight} from "react-icons/sl"
import {FaFacebookSquare, FaTwitterSquare, FaPinterestSquare, FaWhatsappSquare} from "react-icons/fa"

const Sociallinks = () => {
    return (
        <div className="flex items-center gap-5">
        <div className="flex items-center relative">
      <div className="flex border border-thingrey border-r-1 w-24 h-9 items-center justify-center gap-3">
          <div className="text-darkgrey">
              <GiShare/>
          </div>
          <div className="text-thingrey font-extralight">|</div>
          <div>
              <p className="text-xs font-semibold">Share</p>
          </div>
      </div>
      <div className="absolute left-20">
        <SlArrowRight className="ml-3 text-thingrey"/>
      </div>
      </div>
      <div className="flex items-center">
        <FaFacebookSquare className="text-facebook text-4xl"/>
        <FaTwitterSquare className="text-twitter text-4xl"/>
        <FaPinterestSquare className="text-pinterest text-4xl"/>
        <FaWhatsappSquare className="text-whatsapp text-4xl"/>
      </div>
      </div>
    )

  }
  
  export default Sociallinks
  
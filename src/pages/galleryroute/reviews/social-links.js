import {GiShare} from "react-icons/gi"
import {SlArrowRight} from "react-icons/sl"
import {FaFacebookSquare, FaTwitterSquare, FaPinterestSquare, FaWhatsappSquare} from "react-icons/fa"

const Sociallinks = () => {
    return (
        <div className="flex items-center gap-5">
      <div className="flex items-center">
        <FaFacebookSquare className="text-facebook text-5xl"/>
        <FaTwitterSquare className="text-twitter text-5xl"/>
        <FaPinterestSquare className="text-pinterest text-5xl"/>
        <FaWhatsappSquare className="text-whatsapp text-5xl"/>
      </div>
      </div>
    )

  }
  
  export default Sociallinks
  
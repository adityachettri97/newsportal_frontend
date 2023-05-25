import {RiFacebookFill, RiTwitterFill, RiWhatsappLine} from "react-icons/ri"
import {TfiPinterest} from "react-icons/tfi"

const Links = () => {
    return (
        <div className="flex items-center justify-center ml-10">
        <div className="flex items-center relative gap-1">
      <div className="flex border bg-facebook border-thingrey border-r-1 w-28 h-9 items-center justify-center gap-3">
          <div className="text-white ml-3">
          <RiFacebookFill className= "text-sm"/>
          </div>
          <div className="text-thingrey font-extralight">|</div>
          <div>
              <p className="text-white text-xs mr-2 font-semibold">Facebook</p>
          </div>
      </div>
      {/* another */}
      <div className="flex border bg-twitter border-thingrey border-r-1 w-28 h-9 items-center justify-center gap-3">
          <div className="text-white ml-3">
          <RiTwitterFill className= "text-sm"/>
          </div>
          <div className="text-thingrey font-medium">|</div>
          <div>
              <p className="text-white text-xs mr-2 font-semibold">Twitter</p>
          </div>
      </div>
      {/* another */}
      <div className="flex border bg-pinterest border-thingrey border-r-1 w-28 h-9 items-center justify-center gap-3">
          <div className="text-white ml-3">
          <TfiPinterest className= "text-sm"/>
          </div>
          <div className="text-thingrey font-extralight">|</div>
          <div>
              <p className="text-white text-xs mr-2 font-semibold">Pinterest</p>
          </div>
      </div>
      {/* another */}
      <div className="flex border bg-whatsapp border-thingrey border-r-1 w-28 h-9 items-center justify-center gap-3">
          <div className="text-white ml-3">
          <RiWhatsappLine className= "text-lg"/>
          </div>
          <div className="text-thingrey font-extralight">|</div>
          <div>
              <p className="text-white text-xs mr-3 font-semibold">Whatsapp</p>
          </div>
      </div>
      </div>
      </div>
    )

  }
  
  export default Links
  
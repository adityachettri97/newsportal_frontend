import Image from "next/image"
import Link from "next/link"
import {RiArrowDropRightLine} from "react-icons/ri"
import {BsFillEyeFill} from "react-icons/bs"
import {TbMessageCircle2Filled} from "react-icons/tb"
import Dpicture from "../../../components/assests/dp.jpg"
import {RiFacebookFill, RiTwitterFill, RiWhatsappLine} from "react-icons/ri"
import {TfiPinterest} from "react-icons/tfi"

const Mobiletop = () => {
  return (
    <div>
        <div className="mx-5 mt-5">
            <div className="flex">
    <Link className="text-xs text-lightgrey hover:text-black" href="/">Home</Link>
    <p><RiArrowDropRightLine className="text-lightgrey font-extralight mt-1"/></p>
    <Link className="text-xs text-lightgrey hover:text-black" href="/">Technology</Link>
    <p><RiArrowDropRightLine className="text-lightgrey font-extralight mt-1"/></p>
    <Link className="text-xs text-lightgrey hover:text-black" href="/">Reviews</Link>
    <p><RiArrowDropRightLine className="text-lightgrey font-extralight mt-1"/></p>
    <p className="text-lightgrey text-xs">Computer Filters Noise to Make You a Better Listener</p>
    </div>
    <div>
    <div className="flex items-center justify-center text-center">
        <button className="border bg-skyblue text-black hover:bg-brightskyblue border-skyblue duration-300 w-11 h-4 mt-2 text-xs font-light">Reviews</button>
        </div>
        <div className="flex items-center justify-center text-center">
            <h1 className="text-4xl mt-3 font-bold">Computer Filters Noise to Make You a Better Listener</h1>
        </div>
    </div>
        <div className="flex flex-col items-center justify-center text-center gap-8">
            <div className="flex gap-2 items-center">
                <div className="mt-3 flex gap-1 items-center">
                    <Image className="w-5 rounded-xl" src={Dpicture} alt="profile" />
                    <p className="text-lightgrey text-xs">By</p>
                    <p className="text-xs font-bold">Armin Vans</p>
                </div>
                <div className="mt-3">
                    <p className="text-lightgrey text-xs">- August 7, 2019</p>
                </div>
            </div>
            <div className="flex items-center gap-4 mt-3">
                <div className="flex items-center">
                <BsFillEyeFill className="text-darkgrey text-sm"/>
                <p className="text-darkgrey text-xs p-1">9885</p>
                </div>
                <div className="flex items-center">
                <TbMessageCircle2Filled className="text-darkgrey text-sm"/>
                <p className="text-darkgrey text-xs p-1">0</p>
                </div>
                
            </div>
            
        </div>
    <div className="my-6">
    <div className="flex flex-col gap-2 items-center justify-center">
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
      </div>
      <div className="flex items-center relative gap-1">
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
        </div>
            </div>
    </div>
  )
}

export default Mobiletop
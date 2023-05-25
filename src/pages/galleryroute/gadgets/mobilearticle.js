import Image from "next/image"
import Gadgets2 from "../../../components/assests/gadgets2.jpg"
import Gadgets3 from "../../../components/assests/gadgets3.jpg"
import Gadgets4 from "../../../components/assests/gadgets4.jpg"

const Mobilearticle = () => {
  return (
    <div>
        <div className="bg-black2 w-36 mt-12">
            <p className="mx-3 text-white text-sm">RELATED ARTICLES </p>
        </div>
        <div className="h-px w-full bg-black2"></div>
        <div className="flex flex-col gap-5 mt-6">
            <div className="flex flex-row gap-5">
                <div className="flex flex-col">
                    <div>
                        <Image className="h-16 w-24" src={Gadgets2} alt="gadgets2"/>    
                    </div>  
                    <button className="bg-black2 text-white text-xs mt-px hover:bg-skyblue w-12">Gadgets
                    </button>
                </div> 
                <div className="flex flex-col">
                    <div className="relative w-44 hover:text-skyblue">
                        <p className="text-sm font-medium">Sneak Peak: Best Smart Home Gadgets & Features of 2020</p>
                    </div>
                    <div className="flex gap-5 mt-2">
                        <div>
                            <p className="text-xs font-bold">Armin Vans</p>
                        </div>
                        <div>
                            <p className="text-xs text-lightgrey">August 7, 2019</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="flex flex-col gap-5 mt-6">
            <div className="flex flex-row gap-5">
                <div className="flex flex-col">
                    <div>
                        <Image className="h-16 w-24" src={Gadgets3} alt="gadgets3"/>    
                    </div>  
                    <button className="bg-black2 text-white text-xs mt-px hover:bg-skyblue w-12">Gadgets
                    </button>
                </div> 
                <div className="flex flex-col">
                    <div className="relative w-44 hover:text-skyblue">
                        <p className="text-sm font-medium">New Action Game Refreshed With a Premium Hi-Fi Sound</p>
                    </div>
                    <div className="flex gap-5 mt-2">
                        <div>
                            <p className="text-xs font-bold">Armin Vans</p>
                        </div>
                        <div>
                            <p className="text-xs text-lightgrey">August 7, 2019</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="flex flex-col gap-5 mt-6">
            <div className="flex flex-row gap-5">
                <div className="flex flex-col">
                    <div>
                        <Image className="h-16 w-24" src={Gadgets4} alt="gadgets4"/>    
                    </div>  
                    <button className="bg-black2 text-white text-xs mt-px hover:bg-skyblue w-12">Gadgets
                    </button>
                </div> 
                <div className="flex flex-col">
                    <div className="relative w-44 hover:text-skyblue">
                        <p className="text-sm font-medium">Snapdragon Super Chip Mounted on the Latest Photo Cameras</p>
                    </div>
                    <div className="flex gap-5 mt-2">
                        <div>
                            <p className="text-xs font-bold">Armin Vans</p>
                        </div>
                        <div>
                            <p className="text-xs text-lightgrey">August 7, 2019</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Mobilearticle
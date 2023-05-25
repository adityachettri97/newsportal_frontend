import Image from "next/image"
import Travel2 from "../../../components/assests/travel2.jpg"
import Travel3 from "../../../components/assests/travel3.jpg"
import Travel4 from "../../../components/assests/travel4.jpg"

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
                        <Image className="h-16 w-24" src={Travel2} alt="travel2"/>    
                    </div>  
                    <button className="bg-black2 text-white text-xs mt-px hover:bg-skyblue w-12">Travel
                    </button>
                </div> 
                <div className="flex flex-col">
                    <div className="relative w-44 hover:text-skyblue">
                        <p className="text-sm font-medium">Best Things You Can Do on a Solo Mountain Climb</p>
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
                        <Image className="h-16 w-24" src={Travel3} alt="travel3"/>    
                    </div>  
                    <button className="bg-black2 text-white text-xs mt-px hover:bg-skyblue w-12">Travel
                    </button>
                </div> 
                <div className="flex flex-col">
                    <div className="relative w-44 hover:text-skyblue">
                        <p className="text-sm font-medium">Flying Over the Grand Canyon with a Helicopter</p>
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
                        <Image className="h-16 w-24" src={Travel4} alt="travel4"/>    
                    </div>  
                    <button className="bg-black2 text-white text-xs mt-px hover:bg-skyblue w-12">Travel
                    </button>
                </div> 
                <div className="flex flex-col">
                    <div className="relative w-44 hover:text-skyblue">
                        <p className="text-sm font-medium">Most Popular Recipes You Need To Try in 2020</p>
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
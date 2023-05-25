import Image from "next/image"
import { useState } from "react"
import { RiArrowDropRightLine, RiArrowDropDownLine, RiArrowDropUpLine  } from "react-icons/ri"
import Cover from "../../../public/fashionpage/cover.jpg"
const Mobiletop = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleDropdownClick = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };
    return(
        <div>
            
            <div>
               
                <div className="mt-10 ">
                    <Image className="" src={Cover} alt="cover_img"/>
                    <div class="absolute inset-0 bg-black bg-opacity-50 h-64"></div>
                </div>

                
            </div>
            
            <div className="absolute z-20 top-20 left-6 flex items-center">
                <p className="text-xs text-white hover:text-lightgrey">Home</p>
                <p>
                    <RiArrowDropRightLine className="text-white font-extralight mt-1"/>
                    </p>
                <p className="text-xs text-white">Fashion</p>
            </div>
            <div className="absolute z-20 top-24  mt-1 left-6 flex items-center">
            <h1 className="text-white text-xl font-bold">FASHION</h1>    
        </div>
        <div className="absolute top-32 mt-2 z-20 left-6 flex gap-2 items-center">
            <div className="h-4 w-16 pb-4 border border-orange bg-orange hover:bg-orange hover:opacity-80 hover:duration-500">
                <p className="text-xs ml-1 text-white">New Look</p>
            </div>
            <div className="h-4 w-24 pb-4 border border-orangered bg-orangered hover:bg-orangered hover:opacity-80 hover:duration-500">
                <p className="text-xs ml-3 text-white">Street Fashion</p>
            </div>
            <div className="h-4 w-20 pb-4 border border-pinkish bg-pinkish hover:bg-pinkish hover:opacity-80 hover:duration-500">
                <p className="text-xs ml-2 text-white">Style Hunter</p>
            </div>
            <div className="h-4 w-4">
            <p className="text-xs text-white cursor-pointer" onClick={handleDropdownClick}>
              {isDropdownOpen ? <RiArrowDropUpLine /> : <RiArrowDropDownLine className="text-2xl"/>}
              </p>
              </div>
              {isDropdownOpen && (
            <div className="h-4 w-12 pb-4 border border-darkpink bg-darkpink hover:bg-darkpink hover:opacity-80 hover:duration-500">
                <p className="text-xs ml-2 text-white">Vogue</p>
            </div>
              )}
        </div>
        <div className="absolute z-20 top-36 mt-3 left-6 flex items-center">
            <h2 className="text-white mr-4 italic w-full">
            Custom category description. You must learn one thing. The world was made to be free in. 
            Give up all the other worlds Except the one in which you belong.
            </h2>    
        </div>
        </div>

        
    )
}

export default Mobiletop
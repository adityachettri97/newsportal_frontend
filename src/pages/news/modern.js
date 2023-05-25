import Image from "next/image"
import ModernData from "./modern.json"
const Modern = () => {
  return (
 
    <div className="w-80">
        <div className="bg-black2 w-36 h-8">
        <p className="mx-3 pt-2 text-white text-sm">MAKE IT MODERN </p>
    </div>
    <div className="h-0.5 md:w-64 lg:w-80 bg-black2"></div>
    <div className="grid grid-cols-2 gap-5 md:w-64">
    {ModernData.map((data) => (
        <>
        
    
    <div className=" mt-6">
            <div className="relative md:w-28 lg:w-36 hover:text-skyblue">
                <Image src={data.image} alt="modern_img" width={500} height={500}/>
                <div className="absolute top-20 mt-1 md:top-14 md:mt-0.5 lg:top-20 lg:mt-0 bg-black2 hover:bg-skyblue w-24">
                    <p className="text-white text-xs mt-px p-px mx-1">{data.tag}</p>
                </div>
                <p className="md:text-xs lg:text-sm font-semibold mt-2">{data.heading}</p>
            </div>
        </div> 
        </>
    )
    )}
      </div>  
    </div>
  )
}

export default Modern
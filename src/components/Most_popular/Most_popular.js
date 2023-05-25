
import Image from "next/image"
import PopularData from "./Most_popular.json"
const Most_popular = () => {
  return (
 
    <div>
        <div className="bg-black2 w-36 h-8 mt-10">
        <p className="mx-3 pt-2 text-white text-sm">MOST POPULAR </p>
    </div>
    <div className="h-0.5 md:w-64 lg:w-80 bg-black2"></div>
    <div className="flex flex-col">
    {PopularData.map((data) => (
        <>
        
    
    <div className=" mt-6">
            <div className="relative flex w-full hover:text-skyblue gap-4">
                <div>
                <Image className="md:w-20 lg:w-28" src={data.image} alt="modern_img" width={500} height={500}/>
                </div>
                <div className="flex flex-col gap-1 md:w-40 lg:w-48">
                    <div><p className="text-sm font-semibold">{data.heading}</p></div>
                    <div><p className="text-xs text-lightgrey">{data.date}</p></div>
                </div>
            </div>
        </div> 
        </>
    )
    )}
      </div>  
    </div>
  )
}

export default Most_popular
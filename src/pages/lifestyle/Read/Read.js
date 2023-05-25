import Image from "next/image"
import ReadData from "./Read.json"
const Read = () => {
  return (
 
    <div>
        <div className="bg-black2 w-28 h-8 mt-10">
        <p className="mx-3 pt-2 text-white font-medium text-sm">MUST READ </p>
    </div>
    <div className="h-0.5 sm:w-52 lg:w-80 bg-black2"></div>
    <div className="flex flex-col mt-6 gap-8">
    {ReadData.map((data) => (
        <>
        
    
    <div className="mt-1">
            <div className="sm:72 lg:w-80">
              <Image className="h-40" src={data.image} alt="read_image" width={500} height={500}/>
            </div>
            <div className="sm:72 lg:w-80 mt-2">
              <p className="font-semibold hover:text-skyblue text-xl">{data.heading}</p>
            </div>
            <div className="flex items-center gap-1 mt-1">
                <div>
                    <p className="text-xs font-bold">{data.paragraph1}</p>
                </div>
                <div>
                    <p className="text-xs font-light text-lightgrey">{data.paragraph2}</p>
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

export default Read
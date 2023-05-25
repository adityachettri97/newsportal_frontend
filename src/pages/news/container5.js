import Image from "next/image"
import News2Data from "./container5.json"

const Container5 = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {News2Data.map((data) => (
            <>
        <div className="flex md:flex-col lg:flex-col justify-between gap-4 mt-6">
            <div className="relative overflow-hidden h-32 ">
                <div className="w-60 md:w-80 lg:w-80">
                    <Image className="absolute scale-105" src={data.image} alt="news1_img" width={500} height={500}/>
                </div>
                <div className="absolute top-12 md:top-20 lg:top-24 lg:mt-2">
                    <button className="bg-black2 text-white text-xs lg:p-1">Architecture</button>
                </div>
            </div>
            
            <div>
                <div className="md:relative flex flex-col gap-1">
                    <div>
                        <h1 className="md:absolute  md:-bottom-5 md:text-xs md:w-32 lg:text-sm font-medium lg:w-44 lg:-bottom-12 hover:text-bluishgrey">{data.heading}</h1>
                    </div>
                </div>
            </div>
           
        </div>
        </>
        )
        )}
    </div>
  )
}

export default Container5
import Image from "next/image"
import News2Data from "./container3.json"

const Container3 = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:gap-3 lg:gap-10">
        {News2Data.map((data) => (
            <>
        <div className="flex flex-col justify-between gap-4 mt-6">
            <div className="relative overflow-hidden h-36 md:h-28 lg:h-36 ">
                <div className="w-80">
                    <Image src={data.image} alt="news1_img" width={500} height={500}/>
                </div>
                <div className="absolute -bottom-1">
                    <button className="bg-black2 text-white text-xs p-1">Architecture</button>
                </div>
            </div>
            
            <div>
                <div className="flex flex-col gap-1">
                    <div>
                        <h1 className="lg:text-lg lg:font-medium md:w-52 lg:w-full hover:text-leafgreen">{data.heading}</h1>
                    </div>
                    <div className="flex gap-2">
                        <div>
                            <p className="text-xs font-bold">{data.name}</p>
                        </div>  
                        <div>
                            <p className="text-xs font-light text-lightgrey">{data.date}</p>
                        </div>
                    </div>
                    <div className="mt-2">
                        <p className="md:text-xs lg:text-sm text-lightgrey">{data.paragraph}</p>
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

export default Container3
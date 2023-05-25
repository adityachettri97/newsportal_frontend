import Image from "next/image"
import News3Data from "./container4.json"

const Container4 = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
        {News3Data.map((data) => (
            <>
        <div className="flex gap-3 mt-6">
            <div>
                <div className="w-20 md:w-20 lg:w-24">
                    <Image src={data.image} alt="news1_img" width={500} height={500}/>
                </div>
            </div>
            
            <div>
                <div className="flex flex-col gap-1">
                    <div>
                        <h1 className="text-xs font-medium w-46 hover:text-leafgreen">{data.heading}</h1>
                    </div>
                    <div>
                        <p className="text-xs font-light text-lightgrey">{data.date}</p>
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

export default Container4
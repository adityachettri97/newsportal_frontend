import Image from "next/image"
import News1Data from "./container2.json"

const Container2 = () => {
  return (
    <div>
        {News1Data.map((data) => (
            <>
        <div className="flex justify-between gap-1 md:gap-2 lg:gap-4 mt-6">
            <div>
                <div className="w-20 md:w-20 lg:w-24">
                    <Image src={data.image} alt="news1_img" width={500} height={500}/>
                </div>
            </div>
            
            <div>
                <div className="flex flex-col gap-1">
                    <div>
                        <h1 className="text-xs font-medium w-40 md:w-32 lg:w-48 hover:text-goldenyellow">{data.heading}</h1>
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

export default Container2
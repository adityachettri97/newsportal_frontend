import Image from "next/image"
import TrainingData from "./container6.json"

const Container6 = () => {
  return (
    <div>
        {TrainingData.map((data) => (
            <>
        <div className="flex justify-between gap-4 mt-6">
            <div className="w-96">
                <Image src={data.image} alt="news1_img" width={500} height={500}/>
            </div>
            
            <div>
                <div className="flex flex-col gap-1">
                    <div className="w-full">
                        <h1 className="text-lg font-medium w-full hover:text-leafgreen">{data.heading}</h1>
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
                        <p className="text-sm text-lightgrey">{data.paragraph}</p>
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

export default Container6
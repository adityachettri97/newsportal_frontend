import Image from "next/image"
import Gadgetsdata from "./gadgets.json"

const Mobile_leftside = () => {
  return (
    <div className="">
        <div>
            {Gadgetsdata.map((data) => (
                <>
                    <div className="flex flex-col mt-8 gap-10">

                        <div className="overflow-hidden h-40 mx-4 mt-4">
                            <div className="scale-y-125">
                                <Image className="w-full h-full" src={data.image} alt="gadgets_img_cat" width={500} height={500}/>
                            </div>
                        </div>
                        
                        <div className="flex flex-col gap-2">
                        <div className="ml-8">
                            <p className="text-xs text-skyblue font-medium">{data.title}</p>
                        </div>
                        <div className="ml-8 w-56">
                            <h1 className="font-bold text-lg">{data.heading}</h1>
                        </div>
                        <div className="mx-8">
                            <p className="text-sm text-lightgrey">{data.paragraph}</p>
                        </div>
                        <div className="mx-8 mt-3">
                            <p className="text-lightgrey text-xs">{data.date}</p>
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

export default Mobile_leftside
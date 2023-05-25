import Image from "next/image"
import LifestyleData from "./lifestyledata.json"

const Lifestylecat = () => {
  return (
    <div className="md:ml-4">
        <div className="flex flex-col gap-8">
            
            {
                LifestyleData.map((data) => (
                    <>
                        <div className="flex gap-6">
                            <div className="w-60">
                                <Image src={data.image} alt="category_img" width={500} height={500}/>
                            </div>
                            <div className="flex flex-col gap-2 w-96">
                                <div>
                                    <button className="text-xs bg-black hover:bg-skyblue text-white px-1 font-medium">{data.title}</button>
                                </div>
                                <div>
                                    <h1 className="text-xl font-semibold">{data.heading}</h1>
                                </div>
                                <div className="flex gap-1 items-center">
                                    <div>
                                        <p className="text-xs font-bold">{data.name}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-lightgrey">{data.date}</p>
                                    </div>
                            </div>
                            </div>
                        </div>
                    </>
                ))
            }
        </div>
    </div>
  )
}

export default Lifestylecat
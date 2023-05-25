/* eslint-disable react/jsx-key */
import Image from "next/image"
import Newsdata from "./fashion.json"

const Mobile_leftside = () => {
  return (
    <>
    <div>
        <div className="bg-black2 w-28 ml-4">
            <p className="mx-3 text-white text-sm">LATEST NEWS</p>
        </div>
        <div className="ml-4 h-0.5 w-72 bg-black2"></div>
    </div>

            <div className="mx-4 mt-10 grid grid-cols-1 gap-16">
            {
                
                Newsdata.map((data) => (
                    <div className="relative">
                        <div className="hover:text-skyblue">
                        <div className="overflow-hidden h-40">
                            <Image className="w-80" src={data.image} width={500} height={500} alt="fashion1"/>
                        </div>
                        <div className="absolute top-32  mt-3 bg-black2 hover:bg-skyblue w-10">
                            <p className="text-white  text-xs font-medium mt-px p-0.5 mx-px">{data.tag}</p>
                        </div>
                        <div className="mt-3">
                            <p className="text-xl w-72 font-medium">{data.heading}</p>
                        </div>
                        </div>
                        <div className="flex gap-1 mt-1">
                            <div>
                                <p className="text-xs font-bold">{data.paragraph1}</p>
                            </div>
                            <div>
                                <p className="text-xs font-light text-lightgrey">{data.paragraph2}</p>
                            </div>
                        </div>
                    </div>
                    

                )
            )}

           </div>
           </>
        
         
  )
}

export default Mobile_leftside
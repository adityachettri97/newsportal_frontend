import Image from 'next/image'
import React from 'react'
import Rightsideimg from "../../components/assests/rightside.jpg"
import ReadData from "./Read/Read.json"

const Mobileright = () => {
  return (
    <div className='w-72 overflow-hidden'>
      <div className="mt-8 w-64 ml-8">
        <Image src={Rightsideimg} alt="rightsideimg"/>
      </div>
      <div>
        <div className="bg-black2 w-28 h-8 ml-5 mt-10">
        <p className="mx-3 pt-2 text-white font-medium text-sm">MUST READ </p>
    </div>
    <div className="h-0.5 w-64 ml-5 bg-black2"></div>
    <div className="flex flex-col mt-6 gap-8">
    {ReadData.map((data) => (
        <>
        
    
    <div className="mt-1 flex w-96 gap-4 ml-5 ">
            <div className="">
              <Image className="w-28 h-16" src={data.image} alt="read_image" width={500} height={500}/>
            </div>
            <div className="flex flex-col">
                <div className="">
                    <p className=" w-32 font-semibold hover:text-skyblue">{data.heading}</p>
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
        </div> 
        </>
    )
    )}
      </div>  
    </div>
    </div>
  )
}

export default Mobileright
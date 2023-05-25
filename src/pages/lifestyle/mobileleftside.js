import Image from 'next/image'
import React from 'react'
import LifestyleData from "./lifestyledata.json"

const Mobileleftside = () => {
  return (
    <div className='ml-5'>
        <div className="flex flex-col gap-8">
            {
                LifestyleData.map((data) => (
                    <>
                        <div className="flex gap-6">
                            <div className="w-28">
                                <Image src={data.image} alt="category_img" width={500} height={500}/>
                            </div>
                            <div className="flex flex-col gap-2 w-52 mr-4">
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

export default Mobileleftside
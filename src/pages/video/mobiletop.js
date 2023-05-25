import React from 'react'
import { RiArrowDropRightLine } from 'react-icons/ri'
import Gallery from './gallery'

const Mobiletop = () => {
  return (
    <>
        <div className="mt-20 ml-5">
        <div className="flex items-center">
            <div className="">
                <p className="text-xs text-lightgrey hover:text-black">Home</p>
            </div>
            <div>
                <p>
                    <RiArrowDropRightLine className="text-lightgrey font-extralight mt-1"/>
                </p>
            </div>
            <div>
                <p className="text-xs text-lightgrey">Video</p>
            </div>
        </div>

        <div className="bg-thingrey w-full my-6 h-px "></div>

        <div>
            <h1 className="text-3xl font-bold">VIDEO</h1>
        </div>

        <div className="w-72 mt-4">
            <p className=" italic text-lightgrey">Custom category description. You must learn one thing. The world was made to be free in.
                 Give up all the other worlds Except the one in which you belong.</p>
        </div>
        </div>
        <Gallery/>
    </>
  )
}

export default Mobiletop
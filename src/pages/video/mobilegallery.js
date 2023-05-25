import Image from 'next/image'
import { BsPlayCircle } from 'react-icons/bs'
import VideoData from "./gallery.json"

const Mobilegallery = () => {
  return (
    <div className="flex flex-col gap-1 mt-5">
         {VideoData.map((data) => (
        <>
            <div className="relative overflow-hidden">
            <div className="w-full h-52 hover:scale-110 duration-300 ">
                <Image className="h-52 scale-x-150 " src={data.image} alt="video_img" width={500} height={500} />
            </div>
            <div className="absolute top-20 left-32 bg-transblack rounded-full ">
                <BsPlayCircle className="text-5xl text-white"/>
            </div>
            <div className="absolute top-20 left-5">
                <div>
                    <button className="bg-transblack2 text-medium text-white text-xs px-1">{data.title}</button>
                </div>
                <div className="mt-3">
                    <h1 className="text-xl font-bold text-white w-72">{data.heading}</h1>
                </div>
                <div className="flex gap-1 mt-2">
                    <div>
                        <p className="text-xs text-white font-bold">{data.name}</p>
                    </div>
                    <div>
                        <p className="text-xs text-white">{data.date}</p>
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

export default Mobilegallery
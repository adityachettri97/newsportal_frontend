import Image from "next/image"
import {data1, data2 ,data3 ,data4} from './gallerydata'

const Mobilegallery = () => {
 
  return (
    <>
    <div className="relative flex flex-col gap-0.5">

        <div className="relative overflow-hidden  h-52">
          <div className="absolute">
            <Image className="h-52" src={data1.image} alt="lifestyle_img" width={500} height={500}/>
          </div>
          <div className="absolute left-5 top-12">
            <div>
              <button className="text-sm text-white">{data1.title}</button>
            </div>
            <div className="mt-1 w-72">
              <h1 className="text-2xl font-bold text-white">{data1.heading}</h1>
            </div>
            <div className="flex gap-1 mt-1">
              <div>
                  <p className="text-xs text-white font-bold">{data1.name}</p>
              </div>
              <div>
                <p className="text-xs text-white ">{data1.date}</p>
              </div>
          </div>
          </div>
        </div>

        <div className="relative overflow-hidden h-52 ">
          <div className="absolute">
            <Image className="h-52 w-96" src={data2.image} alt="lifestyle_img" width={500} height={500}/>
          </div>
          <div className="absolute left-5 top-12">
            <div>
              <button className="text-sm text-white">{data2.title}</button>
            </div>
            <div className="mt-1 w-72">
              <h1 className="text-2xl font-bold text-white">{data2.heading}</h1>
            </div>
            <div className="flex gap-1 mt-1">
              <div>
                  <p className="text-xs text-white font-bold">{data2.name}</p>
              </div>
              <div>
                <p className="text-xs text-white ">{data2.date}</p>
              </div>
          </div>
          </div>
        </div>

        <div className="relative overflow-hidden h-52 ">
          <div className="absolute">
            <Image className="h-52 w-96" src={data3.image} alt="lifestyle_img" width={500} height={500}/>
          </div>
          <div className="absolute left-5 top-12">
            <div>
              <button className="text-sm text-white">{data3.title}</button>
            </div>
            <div className="mt-1 w-72">
              <h1 className="text-2xl font-bold text-white">{data3.heading}</h1>
            </div>
            <div className="flex gap-1 mt-1">
              <div>
                  <p className="text-xs text-white font-bold">{data3.name}</p>
              </div>
              <div>
                <p className="text-xs text-white ">{data3.date}</p>
              </div>
          </div>
          </div>
        </div>


        <div className="relative overflow-hidden h-52 ">
          <div className="absolute">
            <Image className="h-52 w-96" src={data4.image} alt="lifestyle_img" width={500} height={500}/>
          </div>
          <div className="absolute left-5 top-12">
            <div>
              <button className="text-sm text-white">{data4.title}</button>
            </div>
            <div className="mt-1 w-72">
              <h1 className="text-2xl font-bold text-white">{data4.heading}</h1>
            </div>
            <div className="flex gap-1 mt-1">
              <div>
                  <p className="text-xs text-white font-bold">{data4.name}</p>
              </div>
              <div>
                <p className="text-xs text-white ">{data4.date}</p>
              </div>
          </div>
          </div>
        </div>


    </div>
    </>
  )
}

export default Mobilegallery
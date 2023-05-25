/* eslint-disable react/jsx-key */
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import {data1, data2 ,data3 ,data4} from './gallerydata'
import Mobilegallery from './mobilegallery';


const Gallery = () => {
    const router = useRouter();

    function handleClickFashion() {
        router.push('/galleryroute/fashion');
      }
    function handleClickGadgets() {
        router.push('/galleryroute/gadgets');
      }
    function handleClickTravel() {
        router.push('/galleryroute/travel');
      }
    function handleClickReviews() {
        router.push('/galleryroute/reviews');
      }

      const [isMobile, setIsMobile] = useState(false);

      useEffect(() => {
          const handleResize = () => {
              setIsMobile(window.innerWidth < 640); //set breakpoint for mobile screens
          }
          handleResize();
          window.addEventListener('resize', handleResize);
          return() => window.removeEventListener('resize', handleResize);
      },[]);

  return (
    <>
    {isMobile && <Mobilegallery/>}
    {!isMobile && 
    <div className='relative'>
        <div className='absolute'>
           <div className='relative flex w-full gap-1'>
                <div className='w-1/2' onClick={handleClickFashion}>
                    <div className='overflow-hidden'>
                        <Image className='w-full h-96 duration-200 hover:scale-105' src={data1.image} width={500} height={500} alt="image1"/>
                        <div className='absolute top-52'>
                            <button className="border border-black2 hover:border-skyblue bg-black2 text-white hover:bg-skyblue duration-300 w-14 h-4 m-5 text-xs">{data1.tag}</button>
                        </div>
                    </div>
                <div className='absolute text-white top-64 mx-5 font-medium w-96 text-2xl'>
                    {data1.heading}
                </div>
                <div className='absolute top-80 mt-10 mx-5 flex items-center gap-1'>
                    <div className='text-white text-xs font-bold'>
                        {data1.paragraph1}
                    </div>
                    <div className='text-white text-xs font-light'>
                        {data1.paragraph2}
                    </div>
                </div>
            </div>




                <div className='flex flex-col gap-px w-1/2'>
                    <div className='1/2 overflow-hidden' onClick={handleClickGadgets}>
                        <Image className='w-full h-56 duration-200 hover:scale-105' src={data2.image} width={500} height={500} alt="image1"/>
                            <div className='absolute top-28 mt-3'>
                                <button className="border border-black2 hover:border-skyblue bg-black2 text-white hover:bg-skyblue duration-300 w-14 h-4 mx-5 text-xs">{data2.tag}</button>
                            </div>
                        <div className='absolute text-white top-36 mx-5 font-medium w-96 text-2xl'>
                            {data2.heading}
                        </div>
                    </div>
                    <div className='flex w-full gap-1'>
                            <div className='w-1/2 overflow-hidden' onClick={handleClickTravel}>
                                <Image className='w-full h-40 duration-200 hover:scale-105' src={data3.image} width={500} height={500} alt="image1"/>
                                <div className='absolute top-72 mt-6'>
                                    <button className="border border-black2 hover:border-skyblue bg-black2 text-white hover:bg-skyblue duration-300 w-12 h-4 mx-3 text-xs">{data3.tag}</button>
                                </div>
                                <div className='absolute text-white top-80 mt-4 mx-3 font-bold w-44 text-sm'>
                                    {data3.heading}
                                </div>
                            </div>
                        
                        
                        <div className='w-1/2 overflow-hidden'onClick={handleClickReviews}>
                            <Image className='w-full h-40 duration-200 hover:scale-105' src={data4.image} width={500} height={500} alt="image1"/>
                            <div className='absolute top-72 mt-6'>
                                <button className="border border-black2 hover:border-skyblue bg-black2 text-white hover:bg-skyblue duration-300 w-12 h-4 mx-3 text-xs">{data4.tag}</button>
                            </div>
                            <div className='absolute text-white top-80 mt-4 mx-3 font-bold w-56 text-sm'>
                                {data4.heading}
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </div>
    </div>
}
    </>
  )}
   
export default Gallery
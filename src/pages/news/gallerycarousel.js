import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {data2 ,data3 ,data4} from './gallerydata'
import { useRouter } from 'next/router'
import Image from 'next/image';

const Gallerycarousel = () => {
    const router = useRouter();
    function handleClickGadgets() {
        router.push('/galleryroute/gadgets');
      }
  return (
    <Swiper
    spaceBetween={2}
    slidesPerView={1.5}
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
  >
    <SwiperSlide>
        <div className="mt-4" onClick={handleClickGadgets}>
            <div className='overflow-hidden'>
                <Image className='w-56 h-40 duration-200 hover:scale-105' src={data2.image} width={500} height={500} alt="image1"/>
                <div className='absolute top-14'>
                    <button className="border border-black2 hover:border-skyblue bg-black2 text-white hover:bg-skyblue duration-300 w-14 h-4 m-5 text-xs">{data2.tag}</button>
                </div>
            </div>
            <div className='absolute text-white top-24 mx-5 font-medium w-44'>
                    {data2.heading}
            </div>
        </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className="mt-4" onClick={handleClickGadgets}>
            <div className='overflow-hidden'>
                <Image className='w-56 h-40 duration-200 hover:scale-105' src={data3.image} width={500} height={500} alt="image1"/>
                <div className='absolute top-14'>
                    <button className="border border-black2 hover:border-skyblue bg-black2 text-white hover:bg-skyblue duration-300 w-14 h-4 m-5 text-xs">{data3.tag}</button>
                </div>
            </div>
            <div className='absolute text-white top-24 mx-5 font-medium w-44'>
                    {data3.heading}
            </div>
        </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className="mt-4" onClick={handleClickGadgets}>
            <div className='overflow-hidden'>
                <Image className='w-56 h-40 duration-200 hover:scale-105' src={data4.image} width={500} height={500} alt="image1"/>
                <div className='absolute top-14'>
                    <button className="border border-black2 hover:border-skyblue bg-black2 text-white hover:bg-skyblue duration-300 w-14 h-4 m-5 text-xs">{data4.tag}</button>
                </div>
            </div>
            <div className='absolute text-white top-24 mx-5 font-medium w-44'>
                    {data4.heading}
            </div>
        </div>
    </SwiperSlide>
  </Swiper>
  )
}

export default Gallerycarousel
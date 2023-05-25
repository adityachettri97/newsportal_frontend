import Image from "next/image"
import {data1, data2 ,data3 ,data4} from './gallerydata'
import { useRouter } from 'next/router'
import Gallerycarousel from "./gallerycarousel";

const Mobilegallery = () => {
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
 
  return (
    <>
                <div className="mt-4" onClick={handleClickFashion}>
                    <div className='overflow-hidden'>
                        <Image className='w-full h-64 duration-200 hover:scale-105' src={data1.image} width={500} height={500} alt="image1"/>
                        <div className='absolute top-60'>
                            <button className="border border-black2 hover:border-skyblue bg-black2 text-white hover:bg-skyblue duration-300 w-14 h-4 m-5 text-xs">{data1.tag}</button>
                        </div>
                    </div>
                <div className='absolute text-white top-72 mx-5 font-medium w-73 text-xl'>
                    {data1.heading}
                </div>
                <div className='absolute bottom-16 mx-5 flex items-center gap-1'>
                    <div className='text-white text-xs font-bold'>
                        {data1.paragraph1}
                    </div>
                    <div className='text-white text-xs font-light'>
                        {data1.paragraph2}
                    </div>
                </div>
            </div>

            <div>
              <Gallerycarousel/>
            </div>

  </>
  )
}

export default Mobilegallery
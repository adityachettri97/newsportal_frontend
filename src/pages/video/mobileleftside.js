import Image from 'next/image'
import React, { useState } from 'react'
import { BsPlayCircle } from 'react-icons/bs'
import ModalVideo from 'react-modal-video'
import ArchitectureData from "./categorydata.json"
import VideoData from './video.json';

const Mobileleftside = () => {
    const [isOpen, setOpen] = useState(false)
  return (
    <React.Fragment>
			<ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />
			
			<div  className='grid grid-cols-1 ml-4 gap-10 mt-6'>
			{VideoData.map((data, index) => (
				
				<div key={index}>
					<div className="btn-primary cursor-pointer" onClick={()=> setOpen(true)}>
						<div className='hover:text-skyblue'>
						<div className='relative'>	
						<div className='w-72'>
							<Image src={data.image} alt="video_img" width={500} height={500} />
						</div>
						<div className="absolute top-16 left-32 bg-transblack rounded-full ">
                			<BsPlayCircle className="text-4xl text-white"/>
            			</div>
						
						<div className='absolute top-36 bg-black2 hover:bg-skyblue w-10'>
							<p className='text-xs text-white mx-1'>{data.tag}</p>
						</div>
						</div>
						<div className='w-64 mt-2'>
							<p className='text-xl font-medium'>{data.heading}</p>
						</div>
						</div>
						
						<div className='flex items-center gap-1 mt-1'>
							<div>
								<p className='text-xs font-bold'>{data.name}</p>
							</div>
							<div>
								<p className='text-xs text-lightgrey'>{data.date}</p>
							</div>
						</div>
					</div>
				</div>
			))}
			</div>
			<div className='mt-9 ml-4'>
            <div  className='relative grid grid-cols-1 gap-10'>
			{ArchitectureData.map((data, index) => (
				
				<div key={index}>
					<div className="btn-primary cursor-pointer" onClick={()=> setOpen(true)}>
						<div className='hover:text-skyblue'>
						<div className='relative overflow-hidden h-44'>	
						<div className='w-72'>
							<Image src={data.image} alt="video_img" width={500} height={500} />
						</div>
						<div className="absolute top-16 left-32 bg-transblack rounded-full ">
                			<BsPlayCircle className="text-4xl text-white"/>
            			</div>
						
						<div className='absolute top-40 bg-black2 hover:bg-skyblue w-20'>
							<p className='text-xs text-white  mx-1'>{data.tag}</p>
						</div>
						</div>
						<div className='w-64 mt-2'>
							<p className='text-xl font-medium'>{data.heading}</p>
						</div>
						</div>
						
						<div className='flex items-center gap-1 mt-1'>
							<div>
								<p className='text-xs font-bold'>{data.name}</p>
							</div>
							<div>
								<p className='text-xs text-lightgrey'>{data.date}</p>
							</div>
						</div>
					</div>
				</div>
			))}
			</div>
			</div>
			
			
		</React.Fragment>
  )
}

export default Mobileleftside
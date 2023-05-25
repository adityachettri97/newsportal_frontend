import React, { useState, useEffect } from 'react';
import ModalVideo from 'react-modal-video';
import VideoData from './video.json';
import 'node_modules/react-modal-video/scss/modal-video.scss';
import Image from 'next/image';
import {BsPlayCircle} from "react-icons/bs"
import CategoryArchi from './categoryArchi';
import Mobileleftside from './mobileleftside';

const Leftside = () =>  {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 640); //set breakpoint for mobile screens
		}
		handleResize();
		window.addEventListener('resize', handleResize);
		return() => window.removeEventListener('resize', handleResize);
	},[]);

	const [isOpen, setOpen] = useState(false)

	return (
		<>
		{isMobile ? (
      <Mobileleftside />
    ) 
    : (
		<React.Fragment>
			<ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />
			
			<div  className='relative grid grid-cols-2 md:gap-x-20 md:gap-y-6  lg:gap-x-10'>
			{VideoData.map((data, index) => (
				
				<div key={index}>
					<div className="btn-primary cursor-pointer" onClick={()=> setOpen(true)}>
						<div className='hover:text-skyblue'>
						<div className='relative'>	
						<div className='md:w-56 lg:w-72'>
							<Image src={data.image} alt="video_img" width={500} height={500} />
						</div>
						<div className="absolute md:top-12 md:left-24 lg:top-16 lg:left-32 bg-transblack rounded-full ">
                			<BsPlayCircle className="text-4xl text-white"/>
            			</div>
						
						<div className='absolute md:top-28 lg:top-36 lg:mt-px bg-black2 hover:bg-skyblue w-10'>
							<p className='text-xs text-white mx-1'>{data.tag}</p>
						</div>
						</div>
						<div className='md:w-60 lg:w-80 mt-2'>
							<p className='md:text-base text-xl font-medium'>{data.heading}</p>
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
			<div className='mt-9'>
				<CategoryArchi/>
			</div>
			
			
		</React.Fragment>
	)}
		</>

	)
}

export default Leftside

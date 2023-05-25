import Image from "next/image"
import { BsPlayCircle } from "react-icons/bs"
import ArchitectureData from "./categorydata.json"

const CategoryArchi = () => {
  return (
    <div  className='relative grid grid-cols-2 md:gap-x-20 md:gap-y-6 lg:gap-10'>
			{ArchitectureData.map((data, index) => (
				
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
						
						<div className='absolute md:top-32 lg:top-44  bg-black2 hover:bg-skyblue w-20'>
							<p className='text-xs text-white py-px mx-1'>{data.tag}</p>
						</div>
						</div>
						<div className='md:w-60 lg:w-72 mt-2'>
							<p className='md:text-base lg:text-xl font-medium'>{data.heading}</p>
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
  )
}

export default CategoryArchi
import Most_popular from '@/components/Most_popular/Most_popular'
import Recent_comments from '@/components/Recent_comments/Recent_comments'
import RightsideImg from "../../../components/assests/rightside.jpg"
import Image from 'next/image'
import React from 'react'

const Mobilerightside = () => {
  return (
    <div className="bg-white w-full h-full mx-5">
    <div>
         <div className="pt-4">
         <Image src={RightsideImg} alt="right component img"/>
   </div>
   <div>
     <Most_popular/>
   </div>
   <div>
     <Recent_comments/>
   </div>
     </div>
 </div>
  )
}

export default Mobilerightside
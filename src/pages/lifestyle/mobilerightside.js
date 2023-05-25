import Image from 'next/image'
import React from 'react'
import Rightsideimg from "../../components/assests/rightside.jpg"
import Follow from './follow'
import Read from './Read/Read'

const Mobilerightside = () => {
  return (
    <>
      <div className="mt-8 mx-5">
        <Image className='w-72' src={Rightsideimg} alt="rightsideimg"/>
      </div>
      <div className='mx-5 mt-14'>
        <Follow/>
      </div>
      <div className='mx-5'>
        <Read/>
      </div>
    </>
  )
}

export default Mobilerightside
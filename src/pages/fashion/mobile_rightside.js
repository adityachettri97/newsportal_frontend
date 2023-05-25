import Read from "@/components/Read/Read"
import Image from "next/image"
import RightsideImg from "../../components/assests/rightside.jpg"


const Mobile_rightside = () => {
  return (
    <div>
        <div>
            <div className="pt-4 mx-1">
            <Image src={RightsideImg} alt="right component img"/>
      </div>
    </div>
    <div className="mx-1">
        <Read/>
      </div>
    </div>
  )
}

export default Mobile_rightside
import Most_popular from "@/components/Most_popular/Most_popular"
import Recent_comments from "@/components/Recent_comments/Recent_comments"
import Image from "next/image"
import RightsideImg from "../../../components/assests/rightside.jpg"

const Mobilerightside = () => {
  return (
    <div className="bg-white w-full h-full">
       <div>
            <div className="pt-4 mx-5">
            <Image src={RightsideImg} alt="right component img"/>
      </div>
      <div className="mx-5">
        <Most_popular/>
      </div>
      <div className="mx-5">
        <Recent_comments/>
      </div>
        </div>
    </div>
  )
}

export default Mobilerightside
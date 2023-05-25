import Image from "next/image"
import Stayconnected from "./stayconnected"
import RightsideImg from "../../components/assests/rightside.jpg"
import Modern from "./modern"
import Recipe from "./recipe"
import Most_popular from "../../components/Most_popular/Most_popular"
import Recent_comments from "../../components/Recent_comments/Recent_comments"

const Rightside = () => {
  return (
    <div>
      <div>
        <Stayconnected/>
      </div>
      <div className="m-6 pt-4">
            <Image className="md:w-60" src={RightsideImg} alt="right component img"/>
      </div>
      <div className="mt-12">
        <Modern/>
      </div>
      <div className="m-6 pt-16">
            <Image className="md:60" src={RightsideImg} alt="right component img"/>
      </div>
      <div>
        <Recipe/>
      </div>
      <div>
        <Most_popular/>
      </div>
      <div className="lg:mt-80">
        <Recent_comments/>
      </div>
    </div>
  )
}

export default Rightside
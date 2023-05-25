import Image from "next/image"
import Container1 from "./container1"
import Container2 from "./container2"
import Container3 from "./container3"
import Container4 from "./container4"
import Container5 from "./container5"
import Container6 from "./container6"
import Tab1 from "./tab1"
import Tab2 from "./tab2"
import Tab3 from "./tab3"
import Tab4 from "./tab4"
import Banner from "../../components/assests/banner.jpg"
import Tab5 from "./tab5"
import Container7 from "./container7"

/* eslint-disable react/no-unescaped-entities */
const Leftside = () => {
  return (
    <div className="mx-5">
     <>
        <div>
          <Tab1/>
        </div>
          <div className="flex flex-col md:flex-row md:gap-4 lg:flex-row">
            <div>
              <Container1/>
            </div>
            <div>
              <Container2/>
            </div>
          </div>
          <div className="mt-20">
            <Tab2/>
          </div>
          <div>
            <Container3/>
          </div>
          <div>
            <Container4/>
          </div>
          <div className="mt-20">
            <Tab3/>
          </div>
          <div>
            <Container5/>
          </div>
          <div className="mt-20">
            <Tab4/>
          </div>
          <div>
            <Container6/>
          </div>
          <div className="flex justify-center w-screen my-16">
            <Image src={Banner} alt="banner_img"/>
          </div>
          <div>
            <Tab5/>
          </div>
          <div>
            <Container7/>
          </div>

      </>
    </div>
    
  )
}

export default Leftside
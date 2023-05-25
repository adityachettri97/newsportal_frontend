import Image from "next/image"
import ArticleData from "./recent_articles.json"
import Articleimg from "../../../public/gadgetspage/rightside_img.jpg"

const Mobile_rightside = () => {
  return (
    <div className="grid justify-center mt-10">
        <div>
          <div className="grid justify-center">
            <p className="font-bold text-2xl">Recent Articles </p>
         </div>
        <div className="flex flex-col mt-6 w-80 gap-4">
            {ArticleData.map((data) => (
           <>
        
    
      <div className="mx-4">
            <div>
              <p className="font-semibold hover:text-skyblue">{data.heading}</p>
            </div>
            <div className="flex items-center gap-4 mt-4">
                <div>
                    <p className="text-xs font-semibold text-skyblue hover:text-black">{data.paragraph1}</p>
                </div>
                <div>
                    <p className="text-xs text-lightgrey">{data.paragraph2}</p>
                </div>
            </div>
        </div> 
        </>
    )
    )}
            <div className="ml-3 mt-10">
                <Image src={Articleimg} alt="article_img"/>
            </div>
      </div>  
    </div>
    </div>
  )
}

export default Mobile_rightside
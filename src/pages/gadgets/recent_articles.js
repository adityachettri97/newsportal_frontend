import Image from "next/image"
import ArticleData from "./recent_articles.json"
import Articleimg from "../../../public/gadgetspage/rightside_img.jpg"
const Recent_articles = () => {
  return (
 
    <div>
        <div>
        <p className="font-bold md:text-xl lg:text-2xl">Recent Articles </p>
    </div>
    <div className="flex flex-col md:mt-4 lg:mt-6 w-72 lg:gap-4">
    {ArticleData.map((data) => (
        <>
        
    
    <div className="mt-1">
            <div>
              <p className="font-semibold hover:text-skyblue md:w-64">{data.heading}</p>
            </div>
            <div className="flex items-center gap-4 md:mt-2 md:mb-4 lg:mt-4">
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
                <Image className="md:w-56" src={Articleimg} alt="article_img"/>
            </div>
      </div>  
    </div>
  )
}

export default Recent_articles
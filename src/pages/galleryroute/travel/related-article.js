import Image from "next/image"
import Travel2 from "../../../components/assests/travel2.jpg"
import Travel3 from "../../../components/assests/travel3.jpg"
import Travel4 from "../../../components/assests/travel4.jpg"

const RelatedArticle = () => {

    return (
        <div>
            <div className="bg-black2 w-36 mt-12">
                <p className="mx-3 text-white text-sm">RELATED ARTICLES </p>
            </div>
            <div className="h-px w-full bg-black2"></div>
            <div className="flex items-center gap-5 mt-6">
                <div className="relative w-52 hover:text-skyblue">
                    <Image className="h-36" src={Travel2} alt="travel2"/>
                    <div className="absolute top-28 mt-3 bg-black2 hover:bg-skyblue w-10">
                <p className="text-white text-xs mt-0.5 p-px mx-1">Travel </p>
            </div>
            <p className="text-xs mt-2">Best Things You Can Do on a Solo Mountain Climb</p>
                </div>
                <div className="relative w-52 hover:text-skyblue">
                    <Image className="h-36" src={Travel3} alt="travel3"/>
                    <div className="absolute top-28 mt-3 bg-black2 hover:bg-skyblue w-10">
                <p className="text-white text-xs mt-0.5 p-px mx-1">Travel </p>
            </div>
            <p className="text-xs mt-2">Flying Over the Grand Canyon with a Helicopter</p>
                </div>
                <div className="relative w-52 hover:text-skyblue">
                    <Image className="h-36" src={Travel4} alt="travel4"/>
                    <div className="absolute top-28 mt-3 bg-black2 hover:bg-skyblue w-10">
                <p className="text-white text-xs mt-0.5 p-px mx-1">Travel </p>
            </div>
            <p className="text-xs mt-2">Most Popular Recipes You Need To Try in 2020</p>
                </div>
            </div>
        </div>
    )
}

export default RelatedArticle
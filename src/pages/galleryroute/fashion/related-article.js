import Image from "next/image"
import Article1 from "../../../components/assests/article1.jpg"
import Article2 from "../../../components/assests/article2.jpg"

const RelatedArticle = () => {

    return (
        <div>
            <div className="bg-black2 w-36 mt-12">
                <p className="mx-3 text-white text-sm">RELATED ARTICLES </p>
            </div>
            <div className="h-px w-full bg-black2"></div>
            <div className="flex items-center gap-5 mt-6">
                <div className="relative w-52 hover:text-skyblue">
                    <Image src={Article1} alt="article1"/>
                    <div className="absolute top-16 md:top-28 lg:top-28 mt-1 md:mt-2 lg:mt-2 bg-black2 hover:bg-skyblue w-12">
                <p className="text-white text-xs mt-px p-px mx-1">Fashion </p>
            </div>
            <p className="text-xs mt-2">Shop The Best Street Style From Paris Fashion Week Shows</p>
                </div>
                <div className="relative w-52 hover:text-skyblue">
                    <Image src={Article2} alt="article2"/>
                    <div className="absolute top-16 md:top-28 lg:top-28 mt-1 md:mt-2 lg:mt-2 bg-black2 hover:bg-skyblue w-12">
                <p className="text-white text-xs mt-px p-px mx-1">Fashion </p>
            </div>
            <p className="text-xs mt-2">Expert Advice: The Best Retro Chic Fashion for All Ages</p>
                </div>
            </div>
        </div>
    )
}

export default RelatedArticle
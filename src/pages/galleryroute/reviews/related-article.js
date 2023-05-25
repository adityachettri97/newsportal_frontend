import Image from "next/image"
import Reviews1 from "../../../components/assests/reviews1.jpg"
import Reviews2 from "../../../components/assests/reviews2.jpg"
import Reviews3 from "../../../components/assests/reviews3.jpg"

const RelatedArticle = () => {

    return (
        <div>
            <div className="bg-black2 w-36 mt-12">
                <p className="mx-3 text-white text-sm">RELATED ARTICLES </p>
            </div>
            <div className="h-px w-full bg-black2"></div>
            <div className="flex items-center gap-5 mt-6">
                <div className="relative w-52 hover:text-skyblue">
                    <Image className="h-36" src={Reviews1} alt="travel2"/>
                    <div className="absolute top-28 mt-3 bg-black2 hover:bg-skyblue w-12">
                <p className="text-white text-xs mt-0.5 p-px mr-1">Reviews </p>
            </div>
            <p className="text-xs mt-2">Laptop with 128-bit Processor, 32GB of RAM and 24MP Front Camera</p>
                </div>
                <div className="relative w-52 hover:text-skyblue">
                    <Image className="h-36" src={Reviews2} alt="travel3"/>
                    <div className="absolute top-28 mt-3 bg-black2 hover:bg-skyblue w-12">
                <p className="text-white text-xs mt-0.5 p-px mr-1">Reviews </p>
            </div>
            <p className="text-xs mt-2">Cisco Knows It’s Routers Are The Fastest Ever for Desktop PCs</p>
                </div>
                <div className="relative w-52 hover:text-skyblue">
                    <Image className="h-36" src={Reviews3} alt="travel4"/>
                    <div className="absolute top-28 mt-3 bg-black2 hover:bg-skyblue w-12">
                <p className="text-white text-xs mt-0.5 p-px mr-1">Reviews </p>
            </div>
            <p className="text-xs mt-2">This New Headphone from Sony Cancel Out Almost Every Background</p>
                </div>
            </div>
        </div>
    )
}

export default RelatedArticle
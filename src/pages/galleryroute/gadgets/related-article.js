import Image from "next/image"
import Gadgets2 from "../../../components/assests/gadgets2.jpg"
import Gadgets3 from "../../../components/assests/gadgets3.jpg"
import Gadgets4 from "../../../components/assests/gadgets4.jpg"

const RelatedArticle = () => {

    return (
        <div>
            <div className="bg-black2 w-36 mt-12">
                <p className="mx-3 text-white text-sm">RELATED ARTICLES </p>
            </div>
            <div className="h-px w-full bg-black2"></div>
                <div className="flex items-center gap-5 mt-6">
                <div className="relative w-52 hover:text-skyblue">
                        <Image className="h-36" src={Gadgets2} alt="gadgets2"/>
                    <div className="absolute top-28 mt-3 bg-black2 hover:bg-skyblue w-12">
                        <p className="text-white text-xs mt-0.5 p-px mx-1">Gadgets </p>
                    </div>
                    <p className="text-xs mt-2">Sneak Peak: Best Smart Home Gadgets & Features of 2020</p>
                </div>
                <div className="relative w-52 hover:text-skyblue">
                    <Image className="h-36" src={Gadgets3} alt="gadgets3"/>
                    <div className="absolute top-28 mt-3 bg-black2 hover:bg-skyblue w-12">
                <p className="text-white text-xs mt-0.5 p-px mx-1">Gadgets </p>
            </div>
            <p className="text-xs mt-2">New Action Game Refreshed With a Premium Hi-Fi Sound</p>
                </div>
                <div className="relative w-52 hover:text-skyblue">
                    <Image className="h-36" src={Gadgets4} alt="gadgets4"/>
                    <div className="absolute top-28 mt-3 bg-black2 hover:bg-skyblue w-12">
                <p className="text-white text-xs mt-0.5 p-px mx-1">Gadgets </p>
            </div>
            <p className="text-xs mt-2">Snapdragon Super Chip Mounted on the Latest Photo Cameras</p>
                </div>
            </div>
        </div>
    )
}

export default RelatedArticle
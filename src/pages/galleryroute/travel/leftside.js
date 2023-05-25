import Image from "next/image"
import Link from "next/link"
import {RiArrowDropRightLine} from "react-icons/ri"
import {BsFillEyeFill} from "react-icons/bs"
import {TbMessageCircle2Filled} from "react-icons/tb"
import {FaFacebookF, FaInstagram, FaTwitter, FaYoutube} from "react-icons/fa"
import Dpicture from "../../../components/assests/dp.jpg"
import NewsPortal2 from "../../../components/assests/newportal2.jpg"
import Sociallinks from "../fashion/social-links"
import RelatedArticle from "./related-article"
import Travel1 from "../../../components/assests/travel1.jpg"
import Viasource from "./viasource"
import Comment from "./comment"
import Vienna from "@/components/Vienna"
import { useEffect, useState } from "react"
import Mobileleftside from "./mobileleftside"


const Leftside = () => {
    const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 640); //set breakpoint for mobile screens
		}
		handleResize();
		window.addEventListener('resize', handleResize);
		return() => window.removeEventListener('resize', handleResize);
	},[]);
  return (
    <>
         {isMobile ? (
      <Mobileleftside />
    ) 
    : (
    <div className="">
        <div className="">
        <div className="flex items-center">
            <Link className="text-xs text-lightgrey hover:text-black" href="/">Home</Link>
            <p><RiArrowDropRightLine className="text-lightgrey font-extralight mt-1"/></p>
            <Link className="text-xs text-lightgrey hover:text-black" href="/">Lifestyle</Link>
            <p><RiArrowDropRightLine className="text-lightgrey font-extralight mt-1"/></p>
            <Link className="text-xs text-lightgrey hover:text-black" href="/">Travel</Link>
            <p><RiArrowDropRightLine className="text-lightgrey font-extralight mt-1"/></p>
            <p className="text-lightgrey text-xs">Discover the Most Magical Sunset in Santorini</p>
        </div>
        <div className="">
        <button className="border bg-purple text-white hover:bg-brightpurple duration-300 w-11 h-4 mt-2 text-xs">Travel</button>
        </div>
        <div>
            <h1 className="text-4xl mt-3">Discover the Most Magical Sunset in Santorini</h1>
        </div>
        <div>
            <h1 className="text-lg font-light mt-6 text-lightgrey italic">The full member list of the Trump Leadership Council, a group of corporate influencers who guided the president’s anti-regulatory policy blitz.</h1>
        </div>
        <div className="flex items-center justify-between">
            <div className="flex gap-4 items-center">
                <div className="mt-3 flex gap-1 items-center">
                    <Image className="w-5 rounded-xl" src={Dpicture} alt="profile" />
                    <p className="text-lightgrey text-xs">By</p>
                    <p className="text-xs font-bold">Armin Vans</p>
                </div>
                <div className="mt-3">
                    <p className="text-lightgrey text-xs">August 7, 2019</p>
                </div>
            </div>
            <div className="flex items-center gap-4 mt-3">
                <div className="flex items-center">
                <BsFillEyeFill className="text-darkgrey text-sm"/>
                <p className="text-darkgrey text-xs p-1">9185</p>
                </div>
                <div className="flex items-center">
                <TbMessageCircle2Filled className="text-darkgrey text-sm"/>
                <p className="text-darkgrey text-xs p-1">1</p>
                </div>
            </div>
        </div>
        <div className="mt-6">
            <Sociallinks/>
        </div>

        <div>
            <Image className="mt-8" src={Travel1} alt="travel1"/>
            <p className="m-8">
                We woke reasonably late following the feast and free flowing wine the night before. 
                After gathering ourselves and our packs, we headed down to our homestay family’s
                 small dining room for breakfast.
            </p>

            <p className="m-8 text-bold text-lg">
            Refreshingly, what was expected of her was the same thing that was expected of Lara Stone: 
            to take a beautiful picture.
            </p>

            <p className="m-8">
            We were making our way to the Rila Mountains, where we were visiting the Rila Monastery 
            where we enjoyed scrambled eggs, toast, mekitsi, local jam and peppermint tea.
            </p>

            <Image src={NewsPortal2} alt="newsportal"/>
            <p className="text-xs text-lightgrey italic mt-1">
                Adderall and flirting with bulimia in an attempt to whittle herself
            </p>

            <div>
                <Vienna/>
            </div>

            <div className="flex items-center text-center">
            <p className="text-3xl text-skyblue italic mt-5">IF YOU HAVE IT, YOU CAN MAKE ANYTHING LOOK GOOD</p>
            </div>
            <div className="mt-10">
                <p>
                Clothes can transform your mood and confidence. Fashion moves so quickly that, 
                unless you have a strong point of view, you can lose integrity. I like to be real. 
                I don’t like things to be staged or fussy. I think I’d go mad if I didn’t have a place to escape to. 
                You have to stay true to your heritage, that’s what your brand is about.
                </p>     
            </div>
            
        </div>
        <div>
                    <Viasource/>
                </div>

        <div className="mt-14 h-px w-full bg-thingrey"></div>
        <div className="my-8">
            <Sociallinks/>
        </div>
        <div className="h-px w-full bg-thingrey"></div>
        <div className="flex justify-between gap-10 mt-10">
            <div className="flex flex-col">
                <p className="text-lightgrey text-xs">Previous article</p>
                <div className="hover:text-skyblue">
                    <p>Best Things You Can Do on a Solo Mountain Climb</p>
                </div>
            </div>
            <div className="flex flex-col text-right">
                <p className="text-lightgrey  text-xs">Next article</p>
                <div className="hover:text-skyblue text-right">
                <p>Traditional Bakeries to Try When in the Big Apple</p>
                </div>
            </div>
        </div>

        <div className="flex justify-between gap-10 mt-10 border border-thingrey">
            <div className="flex items-center w-2/5">
            <Image className="m-5 w-28" src={Dpicture} alt="profile" />
            </div>
            <div className="flex flex-col gap-2 items-start mt-7">
                <h5 className="font-bold">Armin Vans</h5>
                <p className="text-xs italic text-lightgrey hover:text-skyblue">http://tagdiv.com</p>
                <p className="text-xs mr-2">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit. 
                    Vestibulum ac vehicula leo. Donec urna lacus gravida ac vulputate sagittis tristique vitae lectus. 
                    Nullam rhoncus tortor at dignissim vehicula.
                </p>
                <div className="flex justify-between gap-4 mt-4 mb-5">
                    <FaFacebookF className="text-sm"/>
                    <FaInstagram className="text-sm"/>
                    <FaTwitter className="text-sm"/>
                    <FaYoutube className="text-sm"/>
                </div>
                
            </div>
        </div>

        <div>
            <RelatedArticle/>
        </div>
        <div>
            <Comment/>
        </div>

        </div>
        
    </div>
    )}
    </>
  )
}

export default Leftside
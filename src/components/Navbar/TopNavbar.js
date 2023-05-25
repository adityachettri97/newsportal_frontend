import Link from "next/link"
import {GrFacebookOption} from "react-icons/gr"
import {AiOutlineInstagram, AiOutlineTwitter, AiFillYoutube} from "react-icons/ai"
import {FaVimeoV} from "react-icons/fa"
import {BsFillSunFill} from "react-icons/bs"

const TopNavbar = () => {


    return (
        <div className="relative max-w-full h-7 bg-[#1f1f1f] flex justify-between items-center">
            <div className="absolute flex items-center max-w-full gap-3 lg:left-24 md:left-4 ">
                <div className="flex justify-between items-center gap-4">
                <div className="relative flex items-center gap-1">
                    <BsFillSunFill className="text-white"/> 
                    <p className="text-white font-bold text-xs">30.9</p>
                    <p className="absolute -top-2 left-12 text-xs text-white">c</p>

                </div>
                <p className="text-white text-xs">Delhi</p>
                <p className="text-white text-xs mx-4">Wednesday,March 1,2023</p>
                </div>
                    
                    <Link className="text-white hover:text-skyblue text-xs font-sans" href="/signin">Sign in / Join</Link>
                    <Link className="text-white hover:text-skyblue text-xs font-sans sm:hidden md:block" href="/blog">Blog</Link>
                    <Link className="text-white hover:text-skyblue text-xs font-sans sm:hidden md:block" href="/forum">Forum</Link>
                    <Link className="text-white hover:text-skyblue text-xs font-sans sm:hidden md:block" href="/buynow">Buy now!</Link>
                </div>
                <div className="absolute lg:right-20 md:right-4 flex items-center gap-3">
                    <GrFacebookOption className="text-sm  text-white hover:text-skyblue"/>
                    <AiOutlineInstagram className="text-sm  text-white hover:text-skyblue"/>
                    <AiOutlineTwitter className="text-sm  text-white hover:text-skyblue"/>
                    <FaVimeoV className="text-sm  text-white hover:text-skyblue"/>
                    <AiFillYoutube className="text-sm  text-white hover:text-skyblue"/>
                </div>
        </div>
    )
}

export default TopNavbar
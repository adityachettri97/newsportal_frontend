import { useState } from "react";
import { FiMenu, FiSearch } from "react-icons/fi";
import Image from "next/image";
import iconsm from "../assests/iconsm.jpg";
import {TfiClose} from "react-icons/tfi"

const MobileNavbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative w-full h-full z-50">
      {open ? null : (
        <div className="bg-black h-14 max-w-screen-sm flex justify-evenly item-center">
          <div className="mt-4" onClick={() => setOpen(!open)}>
            <FiMenu className="text-white text-3xl" />
          </div>
          <div>
            <Image className="w-44 h-14" alt="website icon" src={iconsm} />
          </div>
          <div className="mt-4">
            <FiSearch className="text-white text-2xl font-bold" />
          </div>
        </div>
      )}
      {open && (
        <div className="bg-[url('https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2021/06/mobile-bg1.jpg')] h-screen bg-cover bg-center">
            <div className="relative h-full bg-transparentgrey z-10">
            <div className="m-6 absolute right-0 " onClick={() => setOpen(false)}>
            <TfiClose className="text-white text-2xl"/>
            </div>
            <div className="flex justify-center items-center text-white text-xl font-bold">
                <h2 className=" text-white text-xl font-bold mt-16">Sign in</h2>
                </div>
          <div className="flex justify-between gap-4 m-8 flex-col">
          <div className="text-white font-bold text-xl">Blog</div>
          <div className="text-white text-xl font-bold">Forum</div>
          <div className="text-white text-xl font-bold">Buy now!</div>
          </div>
            
          </div>
        </div>
      )}
    </nav>
  );
};

export default MobileNavbar;
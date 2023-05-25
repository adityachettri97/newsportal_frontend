import { useState } from "react";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

const Mobiletop = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <div className="">
        <div>
          <div className="mt-24 grid justify-center">
            <h1 className="text-3xl font-bold">Gadgets</h1>
          </div>
        </div>
      </div>

      <div className="grid justify-center ml-4 mt-3">
        <div className="">
          <div className="flex gap-3">
            <p className="text-xs">GADGETS</p>
            <p className="text-xs text-thingrey">/</p>
            <p className="text-xs text-skyblue hover:text-black w-24">MOBILE PHONES</p>
            <p className="text-xs text-black cursor-pointer" onClick={handleDropdownClick}>
              {isDropdownOpen ? <RiArrowDropUpLine /> : <RiArrowDropDownLine className="text-2xl"/>}
              </p>
            {isDropdownOpen && (
              <div className="flex flex-col gap-2 absolute top-5 left-28 z-10 bg-white p-2 rounded-md shadow-md">
                <p className="text-xs text-skyblue hover:text-black">PHOTOGRAPHY</p>
                <p className="text-xs text-skyblue hover:text-black">REVIEWS</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Mobiletop;

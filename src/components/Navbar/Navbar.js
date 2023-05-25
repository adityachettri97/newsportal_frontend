import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiSearch } from 'react-icons/fi';
import icon from '../assests/icon.jpg';
import banner from '../assests/banner.jpg';
import Image from 'next/image';
import TopNavbar from './TopNavbar';
import MobileNavbar from './MobileNavbar';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640); // Set breakpoint for mobile screens
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {isMobile && <MobileNavbar />}
      {!isMobile && <><TopNavbar />
      <div className="flex justify-between my-3 items-center mx-28 max-w-full">
              <div className="flex justify-items-start">
                  <Image className="lg:w-60 md:w-36 sm:w-60" alt="website icon" src={icon} />
              </div>
              <div className="flex justify-items-end">
                  <Image className="lg:max-w-2xl md:max-w-sm sm:max-w-xl" alt="banner" src={banner} />
              </div>
          </div><div className="flex justify-between max-w-full items-center bg-white mx-24">
                  <div className="flex justify-items-start max-w-full gap-8 p-4">
                      <Link className="text-black font-bold text-sm" href="/news">
                          NEWS
                      </Link>
                      <Link className="text-black font-bold text-sm" href="/fashion">
                          FASHION
                      </Link>
                      <Link className="text-black font-bold text-sm" href="/gadgets">
                          GADGETS
                      </Link>
                      <Link className="text-black font-bold text-sm" href="/lifestyle">
                          LIFESTYLE
                      </Link>
                      <Link className="text-black font-bold text-sm" href="/video">
                          VIDEO
                      </Link>
                      <Link className="text-black font-bold text-sm" href="/features">
                          FEATURES
                      </Link>
                  </div>
                  <div className="flex justify-items-end mr-4">
                      <FiSearch className="text-xl font-bold" />
                  </div>
              </div>
              </>
}
    </>
  );
};

export default Navbar;

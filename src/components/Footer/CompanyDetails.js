import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";


function CompanyDetails() {
  return (
    <>
      <div className="pt-10 mb-10 flex flex-col lg:flex-row items-center justify-between border-t-[0.1px] border-gray-600">
        <div>
          <h1 className="mb-5 lg:mb-0 text-4xl text-blue-400 font-bold uppercase">News Paper</h1>
        </div>

        <div className="lg:w-8/12 flex justify-between">
          <div className="w-full sm:w-8/12">
            <h1 className="mb-2 md:mb-6 text-sm md:text-2xl font-semibold uppercase">About Us</h1>
            <p className="text-[12px] md:text-sm mb-4" >Newspaper is your news, entertainment, music fashion website. We provide you with the latest breaking news and videos straight from the entertainment industry.</p>
            <p className="mb-5 md:mb-0 text-[12px] md:text-sm">Contact us: <span className="text-blue-400 cursor-pointer">contact@yoursite.com</span> </p>
          </div>

          <div>
            <h1 className="mb-2 md:mb-6 text-sm md:text-2xl font-semibold uppercase">Follow Us</h1>
            <div className="flex">
              <FaFacebookF className="mr-3 md:p-2 md:text-4xl md:border-2 border-gray-500 cursor-pointer hover:text-blue-500" />
              <BsInstagram className="mr-3 md:p-2 md:text-4xl md:border-2 border-gray-500 cursor-pointer hover:text-blue-500" />
              <AiOutlineTwitter className="mr-3 md:p-2 md:text-4xl md:border-2 border-gray-500 cursor-pointer hover:text-blue-500" />
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default CompanyDetails;
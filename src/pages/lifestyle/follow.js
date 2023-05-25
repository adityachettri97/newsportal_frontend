import {AiOutlineInstagram, AiOutlineTwitter, AiFillYoutube} from "react-icons/ai"

const Follow = () => {
  return (
    <div className="">
        <div className="bg-black2 w-28 h-7">
            <p className="ml-4 pt-1 text-white text-sm">FOLLOW US</p>
        </div>
        <div className="h-0.5 sm:52 lg:w-80 bg-black2"></div>
        <div className="flex gap-3">

            <div className="mt-6 border border-thingrey px-3 lg:px-5">
                <div className="flex flex-col items-center justify-center gap-1 py-3">
                    <div className="text-3xl text-offblue">
                        <AiOutlineInstagram/>
                    </div>
                    <div>
                        <p className="text-bold text-lg">2,354</p>
                    </div>
                    <div>
                        <p className="text-sm">Followers</p>
                    </div>

                </div>
            </div>

            <div className="mt-6 border border-thingrey px-3 lg:px-5">
                <div className="flex flex-col items-center justify-center gap-1 py-3">
                    <div className="text-3xl text-twitter">
                        <AiOutlineTwitter/>
                    </div>
                    <div>
                        <p className="text-bold text-lg">70,971</p>
                    </div>
                    <div>
                        <p className="text-sm">Followers</p>
                    </div>

                </div>
            </div>

            <div className="mt-6 border border-thingrey px-2 lg:px-5">
                <div className="flex flex-col items-center justify-center gap-1 py-3">
                    <div className="text-3xl text-youtube">
                        <AiFillYoutube/>
                    </div>
                    <div>
                        <p className="text-bold text-lg">189,000</p>
                    </div>
                    <div>
                        <p className="text-sm">Subscribers</p>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Follow
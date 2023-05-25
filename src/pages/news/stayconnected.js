import {AiFillFacebook, AiFillTwitterSquare, AiFillYoutube} from "react-icons/ai"


const Stayconnected = () => {

    return (
        <div>
            <div className="bg-black2 w-36 h-8">
                <p className="mx-3 pt-1 text-white text-sm">STAY CONNECTED </p>
            </div>
            <div className="h-0.5 md:w-64 lg:w-80 bg-black2"></div>
            <div className="flex flex-col">
                {/* 1st row */}
            <div className="flex justify-between items-center mt-6">
                <div className="flex justify-between items-center gap-36 md:gap-24 lg:gap-32">
                    <div className="flex items-center gap-2">
                        <div>
                            <AiFillFacebook className="text-facebook text-5xl"/>
                        </div>
                        <div>
                            <p className="font-bold text-xs">22,034</p>
                        </div> 
                        <div>
                            <p className="font-semibold text-xs">Fans</p>
                        </div>
                    </div>
                        <div>
                            <p className="font-bold text-xs">LIKE</p>
                        </div>
                </div>
            </div> 
            {/* second row */}
            <div className="flex justify-between items-center mt-6">
                <div className="flex justify-between items-center gap-28 md:gap-16 lg:gap-24">
                    <div className="flex items-center gap-2">
                        <div>
                            <AiFillTwitterSquare className="text-twitter text-5xl"/>
                        </div>
                        <div>
                            <p className="font-bold text-xs">3,730</p>
                        </div> 
                        <div>
                            <p className="font-semibold text-xs">Followers</p>
                        </div>
                    </div>
                        <div>
                            <p className="font-bold text-xs">FOLLOW</p>
                        </div>
                </div>
            </div>     
            {/* third row */}
            <div className="flex justify-between items-center mt-6">
                <div className="flex justify-between items-center gap-20 md:gap-10 lg:gap-16">
                    <div className="flex items-center gap-2">
                        <div>
                            <AiFillYoutube className="text-youtube text-5xl"/>
                        </div>
                        <div>
                            <p className="font-bold text-xs">20,600</p>
                        </div> 
                        <div>
                            <p className="font-semibold text-xs">Subscribers</p>
                        </div>
                    </div>
                        <div>
                            <p className="font-bold text-xs">SUBSCRIBE</p>
                        </div>
                </div>
            </div>     

            </div>
                </div>
        
    )
}

export default Stayconnected
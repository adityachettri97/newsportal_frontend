import Image from "next/image"
import Dpicture from "../../../components/assests/dp.jpg"

const Comment = () => {

    return (
        <div>
            <div className="bg-black2 w-24 mt-12">
                <p className="mx-3 text-white text-xs">1 COMMENT </p>
            </div>
            <div className="h-px w-full bg-black2"></div>
            <div className="flex items-center">
                <div>
                    <Image className="mt-5 w-10" src={Dpicture} alt="comment picture" />
                </div>
                    <div className="flex flex-col mt-5">
                    <div className="flex ml-4 gap-3 items-center">
                        <div>
                            <h5 className="font-bold text-xs">Armin Vans</h5>
                        </div>
                        <div>
                            <p className="text-xs text-lightgrey">
                                August 14, 2019 At 5:46 am
                            </p>
                        </div>
                        
                    </div>
                    <div className="ml-4">
                         <p className="text-sm ">Amazing view :O I will be going next month, can’t wait!</p>
                    </div>
                    </div>
                    
                    </div>
                   <div className="mt-5">
                        <p className="text-xs">Comments are closed.</p>
                    </div> 
        </div>
    )
}

export default Comment
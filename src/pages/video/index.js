import Top from "./top"
import Leftside from "./leftside"
import Rightside from "./rightside"


const Video = () => {
    return (
        <>
            <div className="lg:mx-4 flex flex-col gap-3">
                <div>
                    <Top/>
                </div>
                <div className="sm:flex sm:flex-col md:flex md:flex-row md:gap-20 md:mx-4 lg:flex lg:flex-row lg:justify-between">
                    <div className="w-4/3 lg:mt-10">
                        <Leftside/>
                    </div>
                    <div className="w-1/3">
                        <Rightside/>
                    </div>
            
                </div>
            </div>
        </>
    )
}

export default Video
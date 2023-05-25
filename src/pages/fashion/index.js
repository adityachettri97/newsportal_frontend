import Leftside from "./leftside"
import Rightside from "./rightside"
import Top from "./top"


const Fashion = () => {
    return (
        <>
            <div className="relative flex flex-col gap-10">
                <div className="lg:relative md:relative">
                    <Top/>
                </div>
                <div className="flex flex-col gap-10 md:flex-row md:gap-10 md:justify-between">
                    <div className="lg:w-2/3 lg:mt-10 md:w-2/3 md:mt-10">
                        <Leftside/>
                    </div>
                    <div className="lg:w-1/3 md:w-1/3 mr-3">
                        <Rightside/>
                    </div>
                </div>
            </div>
        </>
    )
        
}

export default Fashion
import Leftside from "./leftside"
import Rightside from "./rightside"
import Top from "./top"


const Gadgets = () => {
    return (
        <>
            <div className="flex flex-col gap-10">
                <div className="lg:relative md:relative">
                    <Top/>
                </div>
                </div>
                <div className="relative md:flex md:gap-8 lg:flex lg:justify-between">
                    <div className="md:w-3/5 md:mt-28 md:gap-10 ">
                        <Leftside/>
                    </div>
                    <div className="lg:w-1/3 md:w-2/5 mt-36">
                        <Rightside/>
                    </div>
                </div>
            
        </>
    )
        
}

export default Gadgets
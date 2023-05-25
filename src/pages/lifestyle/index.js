import Leftside from "./leftside"
import Rightside from "./rightside"
import Top from "./top"


const Lifestyle = () => {
    return (
        <>
            <div className="flex flex-col gap-10">
                <div>
                    <Top/>
                </div>
                <div className="sm:flex sm:flex-col md:flex md:flex-row md:gap-4 lg:flex lg:flex-row lg:justify-between">
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

export default Lifestyle
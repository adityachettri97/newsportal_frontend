import Leftside from "./leftside"
import Rightside from "./rightside"
import Top from "./top"


const Reviews = () => {
    return (
        <>
            <div className="lg:mx-4 flex flex-col gap-3">
                <div>
                    <Top/>
                </div>
                <div className="sm:flex sm:flex-col md:flex md:flex-row md:gap-20 md:mx-4 lg:flex lg:flex-row lg:justify-between">
                    <div className="md:w-4/3 lg:w-4/3 lg:mt-10">
                        <Leftside/>
                    </div>
                    <div className="md:w-1/3 lg:w-1/3">
                        <Rightside/>
                    </div>
            
                </div>
            </div>
        </>
    )
        
}

export default Reviews
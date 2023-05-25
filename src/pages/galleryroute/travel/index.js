import Leftside from "./leftside"
import Rightside from "./rightside"

const Travel = () => {
    return (
        <div className="sm:flex sm:flex-col md:flex md:flex-row md:justify-between md:gap-14 lg:flex lg:justify-between lg:gap-14 md:mx-8">
            <div className="md:w-2/3 lg:w-2/3">
            <Leftside/>
            </div>
            <div className="md:w-1/3 lg:w-2/3">
            <Rightside/>
            </div>
            
        </div>
    )
}

export default Travel
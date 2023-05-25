import Gallery from "./gallery"
import Leftside from "./leftside"
import Rightside from "./rightside."


const News = () => {
    return (
        <>
            
            <div className="md:ml-24 lg:ml-24  md:flex md:items-center lg:flex lg:items-center">
                <button className="ml-28 my-4 border bg-black2 text-white hover:bg-skyblue duration-300 w-28 h-7 md:m-5 lg:m-5 text-xs">TRENDING NOW</button>   
                <p className="text-center text-sm">Another Big Apartment Project Slated for Broad Ripple Company</p>
            </div>
            
            <div className="flex flex-col gap-10 md:gap-96 lg:gap-96 overflow-hidden">
                <div>
                    <Gallery/>
                </div>
                <div className="flex flex-col md:flex md:flex-row md:justify-between md:gap-10 lg:flex lg:flex-row lg:justify-between lg:gap-20 overflow-hidden">
                    <div className="md:w-3/5 md:mt-10 lg:w-3/5 lg:mt-10">
                        <Leftside/>
                    </div>
                    <div className="md:w-2/5 md:mt-10 lg:w-2/5 lg:mt-10">
                        <Rightside/>
                    </div>
            
                </div>
            </div>
    <div>
       
        </div>      
        </>

    )
}

export default News
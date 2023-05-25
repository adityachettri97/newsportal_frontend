import ReadData from "./Read.json"
const Read = () => {
  return (
 
    <div>
        <div className="bg-black2 w-28 h-8 mt-10">
        <p className="mx-3 pt-2 text-white font-medium text-sm">MUST READ </p>
    </div>
    <div className="h-0.5 w-full bg-black2"></div>
    <div className="flex flex-col mt-6">
    {ReadData.map((data) => (
        <>
        
    
    <div className="mt-1">
            <div>
              <p className="font-semibold hover:text-skyblue">{data.heading}</p>
            </div>
            <div className="flex items-center gap-1 mt-2">
                <div>
                    <p className="text-xs font-bold">{data.paragraph1}</p>
                </div>
                <div>
                    <p className="text-xs font-light text-lightgrey">{data.paragraph2}</p>
                </div>
            </div>
            <div>
                    <p className="text-thingrey">--------------------------------------------------</p>
                </div>
        </div> 
        </>
    )
    )}
      </div>  
    </div>
  )
}

export default Read
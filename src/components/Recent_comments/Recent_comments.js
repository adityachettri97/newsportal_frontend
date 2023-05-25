import CommentsData from "./Recent_comments.json"
const Recent_comments = () => {
  return (
 
    <div>
        <div className="bg-black2 w-40 h-8 mt-10">
        <p className="mx-3 pt-2 text-white font-medium text-sm">RECENT COMMENTS </p>
    </div>
    <div className="h-0.5 md:w-64 lg:w-80 bg-black2"></div>
    <div className="flex flex-col">
    {CommentsData.map((data) => (
        <>
        
    
    <div className="mt-6 md:w-64 lg:w-80">
            <div className="float-left">
              <p className="text-xs mr-1 mt-1 text-lightgrey">{data.title}</p>
            </div>
            <div>
              <p className="text-sm italic font-semibold hover:text-skyblue">{data.heading}</p>
            </div>
        </div> 
        </>
    )
    )}
      </div>  
    </div>
  )
}

export default Recent_comments
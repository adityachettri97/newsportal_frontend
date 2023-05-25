function Card({image, heading, date}) {
    return ( 
        <>
            <div className="w-fit md:w-80 mb-5 flex">
                <img
                    className="h-16 w-24 mr-4 cursor-pointer"
                    src={image}
                    alt="EditorPicks-1" />
                <div>
                    <h1 className="mb-2 sm:mb-0 text-xs sm:text-sm font-semibold sm:font-bold hover:text-blue-400 cursor-pointer">{heading} </h1>
                    <p className="text-[10px] sm:text-xs">{date} </p>
                </div>
            </div>
        </>
    )
}

export default Card;
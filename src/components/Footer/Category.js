function Category({name, number}) {
    return (
        <>
            <div className="mb-3 text-sm flex justify-between cursor-pointer hover:text-blue-400">
                <h1 className="font-normal">{name} </h1>
                <p className="font-semibold">{number} </p>
            </div>
        </>
    )
}

export default Category;
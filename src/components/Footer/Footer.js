import Card from "./Card";
import Category from "./Category";
import Policies from "./Policies";
import CompanyDetails from "./CompanyDetails";
import { EditorList } from "./Json-Data/EditorList";
import { PopularList } from "./Json-Data/PopularList";
import { CategoryList } from "./Json-Data/CategoryList";



function Footer() {
  return (
    <>
      <div className="relative pt-10 top-20 flex flex-col items-center text-white bg-cover bg-center bg-[url('https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2021/06/footer-bg1.jpg')]" >
  <div className="absolute top-0 left-0 w-full h-full bg-black opacity-80"></div>
  <div className="relative px-5 sm:px-10 lg:px-20">
    <div className="w-full flex flex-col xl:flex-row justify-between pb-10 mb-10">
      <div className="flex flex-col md:flex-row justify-around xl:w-9/12">
        {/* ----  Editor Picks ---- */}
        <div className="mb-10 sm:mb-0">
          <h1 className="mb-5 text-md sm:text-2xl font-semibold uppercase">Editor Picks</h1>
          <div>
            {EditorList.map((object, id) => {
              return (
                <div key={id} >
                  <Card image={object.img} heading={object.heading} date={object.date} />
                </div>
              )
            })}
          </div>
        </div>
        {/* ----  Popular Posts ---- */}
        <div className="mb-10 sm:mb-0">
          <h1 className="mb-5 text-md sm:text-2xl font-semibold uppercase">Popular Posts</h1>
          <div>
            {PopularList.map((object, id) => {
              return (
                <div key={id} >
                  <Card image={object.img} heading={object.heading} date={object.date} />
                </div>
              )
            })}
          </div>
        </div>
      </div>
      {/* ----  Popular Category ---- */}
      <div className="">
        <h1 className="mb-5 text-md sm:text-2xl font-semibold uppercase">Popular Category</h1>
        <div className="w-full md:w-1/2 lg:w-full">
          {CategoryList.map((object, id) => {
            return (
              <div key={id} >
                <Category name={object.name} number={object.number} />
              </div>
            )
          })}
        </div>
      </div>
    </div>
    <div>
      <CompanyDetails />
    </div>
  </div>
  <Policies />
</div>

    </>
  )
}

export default Footer;
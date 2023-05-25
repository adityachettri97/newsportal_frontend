import Image from "next/image"
import Recipeimg from "../../../public/right_components/recipe.jpg"

const Recipe = () => {
  return (
    <div>
            <div className="bg-pinkishpurple w-36 h-7 mt-12">
                <p className="mx-3 pt-1 text-white font-semibold text-sm">HOLIDAY RECIPES </p>
            </div>
            <div className="h-0.5 md:w-64 lg:w-80 bg-pinkishpurple"></div>
            <div className="hover:text-pinkishpurple md:w-64 lg:w-80 mt-5">
                <p className="md:text-xl lg:text-2xl">Everyone Should Travel for Their Favorite Foods</p>
                    
                <div className="mt-10">
                    <Image className="md:h-32 lg:h-40 md:w-64 lg:w-80" src={Recipeimg} alt="recipe_img"/>
                </div>
            </div>
            <div className="relative">
            <div className="absolute -top-72 md:-top-44 lg:-top-44 mt-3 flex items-center gap-1">
                        <div>
                            <p className="text-xs font-bold">Armin Vans</p>
                        </div>
                        <div className="text-xs font-thin text-lightgrey">- August 7, 2019</div>
                    </div>
                
                <div className="absolute -top-8 mt-3 bg-black2 hover:bg-pinkishpurple w-12">
                    <p className="text-white text-xs mt-px p-px mx-1">Recipes</p>
                </div>
            </div>
            <div className="md:w-64 lg:w-80">
                <p className="text-sm text-lightgrey mt-4">We woke reasonably late following the feast and free flowing wine the night before. 
                    After gathering ourselves and our packs, we headed down to...
                </p>
            </div>
        </div>
  )
}

export default Recipe
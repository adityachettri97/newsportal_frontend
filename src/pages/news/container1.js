import Image from "next/image"
import News1 from "../../components/assests/News1.jpg"

const Container1 = () => {
  return (
    <div className="mt-6">
        <div className="flex flex-col gap-3">
            <div className="relative">
                <div className="md:w-60 lg:w-72">
                    <Image src={News1} alt="news1_img"/>
                </div>
                <div>
                    <button className="absolute bottom-0 bg-black2 text-xs text-white px-1">Interiors</button>
                </div>
            </div>
            <div>
                <div>
                    <h1 className="md:text-lg lg:text-xl font-medium md:w-60 lg:w-80 hover:text-goldenyellow">Interior Designer and Maude Interiors by Yvonne Designs</h1>
                </div>
            </div>
            <div>
                <div className="flex gap-2">
                    <div>
                        <p className="text-xs font-bold ">Armin Vans</p>
                    </div>
                    <div>
                        <p className="text-xs font-light text-lightgrey">-  August 7, 2019</p>
                    </div>
                </div>
            </div>
            <div className="md:60 lg:w-72">
                <p className="text-sm text-lightgrey font-light">We woke reasonably late following the feast and free flowing wine the night before.
                     After gathering ourselves and our packs, we headed down to...</p>
            </div>

        </div>
    </div>
  )
}

export default Container1
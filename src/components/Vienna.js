import Image from "next/image";
import Newsportal3 from "../components/assests/newportal3.jpg";

const Vienna = () => {
  return (
    <div className="md:mt-5 md:w-10/12 lg:mt-5 lg:w-10/12">
      <div>
        <p>We wandered the site with busloads of other tourists, yet strangely the place did not seem crowded.
       I’m not sure if it was the sheer size of the place, or whether the masses congregated in one area and didn’t venture far from 
       the main church, but I didn’t feel overwhelmed by tourists in the monastery.

          <br/> <br/></p>
      </div>
    <div className="float-left md:float-right lg:float-right w-72 md:w-52 md:mx-5 lg:mx-5">
        <Image src={Newsportal3} alt="newsportal3"/>
        <p className="text-xs text-lightgrey italic mt-1">City Guide for Vienna</p>
      </div>
      <div className="w-full">
      <p>
                Headed over Lions Bridge and made our way to the Sofia Synagogue, 
                then sheltered in the Central Market Hall until the recurrent (but short-lived) 
                mid-afternoon rain passed.
               <br/><br/>
               
                    Feeling refreshed after an espresso, we walked a short distance to the small but welcoming Banya Bashi Mosque,
                    then descended into the ancient Serdica complex.
                    <br/><br/>
                        We were exhausted after a long day of travel, so we headed back to the hotel and crashed.
                        <br/><br/>
                    I had low expectations about Sofia as a city, but after the walking tour I absolutely loved the place. 
                    This was an easy city to navigate, and it was a beautiful city – despite its ugly, 
                    staunch and stolid communist-built surrounds. Sofia has a very average facade as you enter the city, 
                    but once you lose yourself in the old town area, everything changes.
                    </p>      
                
      </div>
    </div>
  );
};

export default Vienna;

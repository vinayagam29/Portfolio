import { useState } from "react";
import profile from "../assets/reference.webp";
  

const Heropage = () => {
  const [active, setActive] = useState(null);
  return (
    <div className='bg-black/10 min-h-screen sticky z-0 top-0'>

      <div className='flex justify-center items-center'>

      
        <p className=' flex justify-center items-center text-center pt-20  lg:text-[190px] md:text-[120px] text-[50px] font-extrabold bg-linear-to-b 
        from-black via-black to-black/20 bg-clip-text text-transparent bebas-neue-regular tracking  pointer-events-none transition-all'>
        creative web dev
         </p> 
      
      </div>

      <div className="flex flex-col justify-center md:items-start items-center md:max-w-md md:pl-20 md:text-start text-center lg:px-8 md:pt-10 pt-5 group md:gap-4 gap-6">
        <p className="bebas-neue-regular md:text-3xl text-xl font-black text-gray-700">Hi, I'm Vinayagam - web developer</p>
        <p className="md:text-base text-sm flex-wrap">I design and build modern websites with clean UI and smooth interactions. </p>
        <div className='flex '>
        <button
          onMouseEnter={() => setActive("work")}
          onMouseLeave={() => setActive(null)}
          className={`
            lg:px-8 px-4 md:py-2 md:text-base text-sm py-1 rounded-sm mr-6 font-semibold border-2 transition-all duration-300 active:scale-95
            ${
              active === "work"
                ? "bg-black text-white border-black scale-105 shadow-md" 
                : active === "contact"
                ? "bg-white text-black border-black"
                : "bg-white text-black border-black" 
            }
          `}>
          VIEW WORK
        </button>

        {/* CONTACT */}
        <button
          onMouseEnter={() => setActive("contact")}
          onMouseLeave={() => setActive(null)}
          className={`
            md:px-8 px-6 md:py-2 py-0 md:text-base text-[12px] rounded-sm md:font-semibold font-normal border-2 transition-all duration-300 active:scale-100
            ${
              active === "contact"
                ? "bg-black text-white border-black scale-105 shadow-md" 
                : active === "work"
                ? "bg-white text-black border-black" 
                : "bg-black text-white border-black" 
            }
          `}
        >
          CONTACT ME
        </button>      
       </div>

      </div>
      <div className="flex lg:items-center md:justify-end lg:justify-center justify-center">
        <img className='absolute z-1 object-cover lg:w-105 md:w-80 w-50 object-center lg:top-45 md:top-40 md:pt-0 pt-10 opacity-92' src={profile} alt="" />
      </div>


    </div>
  )
}

export default Heropage
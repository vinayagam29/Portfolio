import React from 'react'

const Navbar = () => {
  return (
    <div className='hidden md:flex w-full justify-end px-10 bg-transparent z-10 fixed' > 
      <div className='text-sm gap-5 flex justify-end mt-3 text-black px-4 py-2'>
        <a className='transition-all hover:bg-black rounded-full px-4 py-2 hover:text-white active:scale-90 '>HOME</a>
        <a  className='transition-all hover:bg-black rounded-full px-4 py-2 hover:text-white active:scale-90 ease-in-out duration-300'>ABOUT</a>
        <a  className='transition-all hover:bg-black rounded-full px-4 py-2 hover:text-white active:scale-90 ease-in-out duration-300'>PROJECTS</a>
        <a  className='transition-all hover:bg-black rounded-full px-4 py-2 hover:text-white active:scale-90 ease-in-out duration-300'>RESUME</a>

        <a className='transition-all bg-black rounded-sm px-4 py-2 text-white active:scale-90 ease-in-out duration-300'>CONTACT ME</a>
      </div>      
    </div>
  )
}

export default Navbar
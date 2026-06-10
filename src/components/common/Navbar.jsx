import React, { useEffect, useState } from 'react'
import { NAVBAR_LIST } from '../../utils/helper'
import { Link, useLocation } from 'react-router-dom'
import Icons from './Icons'

const Navbar = () => {

    const [nav, setNav] = useState(false)
    const path = useLocation().pathname
    console.log(path)


    useEffect(() => {

        document.body.style.overflow = nav ? "hidden" : "auto"

    }, [nav])
    return (
        <header className='px-3 py-6'>
            <nav className='max-w-285 w-full mx-auto flex flex-row items-center justify-between'>
                <img src="/assets/pupilo.webp" className='sm:w-38 w-30 sm:h-10.5 h-8' alt="pupilo" />

                <div className='nav flex items-center justify-center gap-12'>
                    <ul className={`flex items-center justify-center gap-8 lg:flex-row flex-col max-lg:fixed max-lg:top-0 max-lg:w-full max-lg:h-screen max-lg:bg-white max-lg:flex max-lg:items-center max-lg:justify-center transition-all duration-500 z-500 ${nav ? "max-lg:left-0" : "max-lg:-left-full"}`}>
                        {NAVBAR_LIST.map((item, index) => (
                            <Link to={item.link} key={index} onClick={() => setNav(false)}><li className={`font-normal links text-[16px] leading-[150%] text-granite-gray hover:text-black transition-all duration-500 ${item.link === path && "active"}`}>{item.title}</li></Link>
                        ))}

                    </ul>
                </div>

                <div className='flex flex-row items-center sm:gap-5 gap-3'>
                    <button className='sm:w-36 w-30 sm:h-13 h-10 flex flex-row items-center justify-center gap-2 group border border-transparent rounded-[400px] bg-black font-semibold text-[16px] leading-[100%] text-white hover:text-black hover:bg-white hover:border-black transition-all duration-500 cursor-pointer'>
                        Log In
                        <span>
                            <Icons icon={"logout"} className={"group-hover:text-black transition-all duration-500"} />
                        </span>
                    </button>

                    <button onClick={() => setNav(!nav)} className='lg:hidden relative w-6 h-6 z-500 cursor-pointer'>
                        <span className={` absolute left-0 w-6 h-1 bg-black rounded transition-all duration-300 ${nav ? "rotate-45 top-2.5" : "top-0"}`}></span>
                        <span className={` absolute left-0 w-6 h-1 bg-black rounded transition-all duration-300 ${nav ? "opacity-0" : "top-2.5"}`}></span>
                        <span className={` absolute left-0 w-6 h-1 bg-black rounded transition-all duration-300 ${nav ? "-rotate-45 top-2.5" : "top-5"}`}></span>
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
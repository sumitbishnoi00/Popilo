import React, { useEffect, useState } from 'react'
import { NAVBAR_LIST } from '../../utils/helper'
import { Link, useLocation } from 'react-router-dom'

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
                    <button className='sm:w-36 w-30 sm:h-13 h-10 flex flex-row items-center justify-center gap-2 border border-transparent rounded-[400px] bg-black font-semibold text-[16px] leading-[100%] text-white hover:text-black hover:bg-white hover:border-black transition-all duration-500 cursor-pointer'>
                        Log In
                        <span>
                            <svg className='hover:text-black cursor-pointer' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_3010_8)">
                                    <path d="M4 15H6V20H18V4H6V9H4V3C4 2.73478 4.10536 2.48043 4.29289 2.29289C4.48043 2.10536 4.73478 2 5 2H19C19.2652 2 19.5196 2.10536 19.7071 2.29289C19.8946 2.48043 20 2.73478 20 3V21C20 21.2652 19.8946 21.5196 19.7071 21.7071C19.5196 21.8946 19.2652 22 19 22H5C4.73478 22 4.48043 21.8946 4.29289 21.7071C4.10536 21.5196 4 21.2652 4 21V15ZM10 11V8L15 12L10 16V13H2V11H10Z" fill="currentColor" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_3010_8">
                                        <rect width="24" height="24" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>

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
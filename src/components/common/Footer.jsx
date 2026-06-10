import React from 'react'
import Para from './Para'
import { FOOTER_LINKS } from '../../utils/helper'
import Icons from './Icons'

const Footer = () => {
    return (
        <footer className='px-3 py-20 bg-white-smoke'>
            <div className='max-w-285 w-full mx-auto flex flex-row max-[800px]:text-center max-[800px]:flex-wrap max-[800px]:justify-center md:gap-42 sm:gap-30 gap-15'>
                <div className='max-w-84.5 flex flex-col'>
                    <img src="/assets/pupilo.webp" className='w-47.5 h-13.25 mb-3' alt="pupilo" /> 

                    <Para para="Pupilo is Africa’s most loved online coding platform for kids and teens—where every child can code, create, and thrive." vari="fot" />

                    <h4 className='font-semibold text-[16px] leading-[100%] text-black mb-3'>Subscribe to our Newsletter</h4>

                    <div className="flex max-w-84.5 overflow-hidden rounded-full bg-gainsboro">
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="flex-1 px-5 pl-3.25 bg-transparent outline-none"
                        />

                        <button className="w-36.5 h-13 bg-yellow text-black font-semibold text-[16px] leading-[100%] rounded-[400px] cursor-pointer hover:bg-black hover:text-yellow transition-all duration-500">
                            Subscribe
                        </button>
                    </div>
                </div>

                <div className='flex flex-row min-[813px]:items-center justify-center  gap-14 max-xl:flex-wrap'>
                    <div className='grid min-[813px]:grid-cols-2 gap-14'>
                        {FOOTER_LINKS.map((section, index) => (

                            <div key={index} className='gap-3 flex flex-col'>
                                <h3 className='font-semibold text-[16px] leading-[100%] text-black'>{section.title}</h3>

                                <ul className='text-almost-black space-y-3'>
                                    {section.links.map((link, idx) => (

                                        <li key={idx}>
                                            <a href="/" className='font-normal text-[16px] leading-[150%]'>{link}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className='flex flex-col gap-8 mb-4.25'>
                        <div className='flex flex-col gap-3'>
                            <h3 className='font-semibold text-[16px] leading-[100%] text-black'>Contact Us</h3>

                            <div className='flex flex-row items-center gap-2.5 group cursor-pointer'>
                                <span>
                                    <Icons icon={"email"} className={"group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-500"} />
                                </span>
                                <p className='font-normal text-[16px] leading-[150%] group-hover:text-purple transition-all duration-500'>hello@pupiloinc.com</p>
                            </div>
                            <div className='flex flex-row items-center gap-2.5 group cursor-pointer'>
                                
                                <Icons icon={"phone"} className={"group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-500"} /> 
                                <p className='font-normal text-[16px] leading-[150%] group-hover:text-purple transition-all duration-500'>+234 123 456 7890</p>
                            </div>
                            <div className='flex flex-row items-center gap-2.5 group cursor-pointer'>
                                <span>
                                    <Icons icon={"whatsapp"} className={"group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-500"} />
                                </span>
                                <p className='font-normal text-[16px] leading-[150%] group-hover:text-purple transition-all duration-500'>+234 098 765 4321</p>
                            </div>
                        </div>

                        <div className='flex flex-col gap-2'>
                            <h3 className='font-semibold text-[16px] leading-[100%] text-black'>Follow Us</h3>

                            <div className='flex flex-row items-center gap-2'>
                                <a href='' className='group cursor-pointer'>
                                    <Icons icon={"facebook"} className={"group-hover:scale-120 transition-all duration-500"} pathName={"group-hover:text-blue-500"} />
                                </a>

                                <a href='' className='group cursor-pointer'>
                                    <Icons icon={"instagram"} className={"group-hover:scale-120 transition-all duration-500"} pathName={"group-hover:text-pink-600"} />
                                </a>

                                <a href='' className='group cursor-pointer'>
                                    <Icons icon={"tiktok"} className={"group-hover:scale-120 transition-all duration-500"} pathName={"group-hover:text-pink-500"} />
                                </a>

                                <a href='' className='group cursor-pointer'>
                                    <Icons icon={"youtube"} className={"group-hover:scale-120 transition-all duration-500"} pathName={"group-hover:text-red-600"} />
                                </a>

                                <a href='' className='group cursor-pointer'>
                                    <Icons icon={"linkedin"} className={"group-hover:scale-120 transition-all duration-500"} pathName={"group-hover:text-blue-600"} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
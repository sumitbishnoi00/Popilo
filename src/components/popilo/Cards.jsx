import React from 'react'
import { CARD_DATA } from '../../utils/helper'
import Heading from '../common/Heading'
import Para from '../common/Para'
import { useNavigate } from 'react-router-dom'

const Cards = () => {

    const navigate = useNavigate();
    return (
        <section className="px-4 py-40">
            <div className="max-w-285 mx-auto w-full">
                <div className=" max-w-125.25 text-center flex flex-col justify-center  mx-auto">
                    <Heading heading="General Pupilo Topic" vari="pri" />
                    <Para
                        para="In this section, we cover a wide range of topics to support every learner on their coding journey."
                        vari="pri"
                    />
                </div>
                <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-10 gap-6">
                    {CARD_DATA.map((item, index) => (
                        <div
                            key={index}
                            className="shadow-[0px_0px_32px_0px_#0000000F] p-4 max-w-91 rounded-3xl"
                        >
                            <img className="w-83 h-55 object-center object-cover rounded-xl mb-4" src={item.image} alt="" />
                            <div>
                                <Para para={item.paragraph} vari="sec" />
                                <Heading heading={item.heading} vari="sec" />
                                <Para para={item.content} vari="dan" />
                                <button onClick={() => navigate(`/topic/${item.title}`)} className="font-semibold cursor-pointer text-[16px] leading-[100%] mt-4 underline flex flex-row items-center">
                                    {item.btn}
                                    <span>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10 8L14 12L10 16" stroke="#010101" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='flex items-center justify-center'>
                    <button className='px-8 py-3.5 bg-yellow text-black font-semibold text-[16px] leading-[100%] border border-transparent rounded-[400px] flex flex-row items-center cursor-pointer mt-10 hover:shadow-2xs hover:shadow-black transition-all duration-500'>
                        View All
                        <span>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_3025_31)">
                                    <path d="M16.0044 9.414L7.3974 18.021L5.9834 16.607L14.5894 8H7.0044V6H18.0044V17H16.0044V9.414Z" fill="#010101" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_3025_31">
                                        <rect width="24" height="24" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>

                        </span>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Cards
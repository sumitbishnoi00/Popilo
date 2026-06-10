import React, {useState} from 'react'
import { CARD_DATA } from '../../utils/helper'
import Heading from '../common/Heading'
import Para from '../common/Para'
import { useNavigate, useSearchParams } from 'react-router-dom'
import Icons from '../common/Icons'

const Cards = () => {

    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const tab = searchParams.get("tab") || "less";
    const [show, setShow] = useState("less");
    const path = tab === "less" ? "all" : "less";
    const filterArray = tab === "all" ? CARD_DATA : CARD_DATA.slice(0, 3);
    return (
        <section className="px-4 md:py-20 sm:py-14 py-8">
            <div className="max-w-285 mx-auto w-full">
                <div className=" max-w-125.25 text-center flex flex-col justify-center  mx-auto">
                    <Heading heading="General Pupilo Topic" vari="pri" />
                    <Para
                        para="In this section, we cover a wide range of topics to support every learner on their coding journey."
                        vari="pri"
                    />
                </div>
                <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-10 gap-6">
                    {filterArray.map((item, index) => (
                        <div
                            key={index}
                            className="shadow-[0px_0px_32px_0px_#0000000F] p-4 w-full rounded-3xl"
                        >
                            <img className="w-full h-55 object-center object-cover rounded-xl mb-4" src={item.image} alt="" />
                            <div>
                                <Para para={item.paragraph} vari="sec" />
                                <Heading heading={item.heading} vari="sec" />
                                <Para para={item.content} vari="dan" />
                                <button onClick={() => navigate(`/topic/${item.title .toLocaleLowerCase() .replace(/[,:]/g, "" ) .replace(/\s+/g, "-")}`)} className="font-semibold cursor-pointer text-[16px] leading-[100%] mt-4 underline flex flex-row items-center group">
                                    {item.btn}
                                    <span>
                                        <Icons icon={"arrow"} className={"group-hover:translate-x-10 transition-all duration-500"} pathName={"group-hover:stroke-green-500"} />
                                    </span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='flex items-center justify-center'>
                    <button onClick={() => navigate(`?tab=${path}`)} className='px-8 py-3.5 bg-yellow text-black font-semibold text-[16px] group leading-[100%] border border-transparent rounded-[400px] flex flex-row items-center cursor-pointer mt-10 hover:shadow-2xs hover:shadow-black transition-all duration-500'>
                        {tab === "all" ? "Less More" : "Show More"}
                        <span>
                            <Icons icon={"arrowUpRight"} className={"group-hover:-translate-y-1.5 group-hover:translate-x-3 transition-all duration-500"} pathName={"group-hover:stroke-green-500"} />
                        </span>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Cards
import React from "react";
import { CARD_DATA } from "../../utils/helper";
import { useParams } from "react-router-dom";

const PopiloDetails = () => {
    const { cardName } = useParams();

    const filterData = CARD_DATA.find(
        (item) =>
            cardName ===
            item.title
                .toLocaleLowerCase()
                .replaceAll(" ", "-")
                .replaceAll(":", "")
                .replaceAll(",", ""),
    );

    return (

        <section className="px-4 py-20">
            <div className="max-w-285 w-full mx-auto">
                <div className="flex gap-10">
                    <img src={filterData.image} className="w-150 h-100.5" alt={filterData.title} />

                    <div className='flex flex-col gap-5 mb-24.75'>
                        <h1 className="font-semibold text-5xl leading-[120%] text-black">{filterData.heroTitle}</h1>
                        <p className="font-normal text-[16px] leading-[150%] text-charcoal-gray">{filterData.heroDesc}</p>

                        <div className='flex flex-col gap-3'>
                            {filterData.points.map((item, index) => (

                                <p key={index}>{item}</p>

                            ))}
                        </div>

                        <p className='font-normal text-[16px] leading-[150%] text-red-400'>{filterData.note}</p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default PopiloDetails;
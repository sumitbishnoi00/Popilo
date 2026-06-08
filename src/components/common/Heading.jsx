import React from 'react'

const Heading = ({heading, vari}) => {
    const variants = {
        pri: "max-w-125.25 w-full md:text-[48px] sm:text-[40px] text-[36px]",
        sec: "w-full text-[24px]"
    }
  return (
    <h2 className={`text-black font-semibold leading-[120%] mb-3 ${variants[vari]}`}>{heading}</h2>
  )
}

export default Heading
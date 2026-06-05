import React from 'react'

const Para = ({para, vari}) => {
    const variants = {
        pri: "text-charcoal-gray",
        sec: "text-purple mb-4",
        dan: "text-neutral-gray mb-4",
        fot: "text-jet-gray mb-6"
    }
  return (
    <p className={`w-full text-black font-normal text-[16px] leading-[150%] ${variants[vari]}`}>{para}</p>
  )
}

export default Para
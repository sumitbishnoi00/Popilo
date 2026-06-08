import React from 'react'

const Anyage = () => {
    return (
        <section className='px-3 py-40'>
            <div className='max-w-285 mx-auto w-full flex flex-col '>

                <div className='flex flex-row gap-10'>
                    <img src="/assets/boy.webp" className='w-150 h-110.5' alt="boy" />

                    <div className='flex flex-col gap-5 mb-24.75'>
                        <h1 className='font-semibold text-5xl leading-[120%] text-black'>Coding for Teens</h1>

                        <p className='font-normal text-[16px] leading-[150%] text-charcoal-gray'>Teens can take their skills to the next level by learning real programming languages and building projects.</p>

                        <div className='flex flex-col gap-3'>
                            <span>
                                1️⃣ Create websites and web applications
                            </span>

                            <span>
                                2️⃣ Build useful tools and games
                            </span>

                            <span>
                                3️⃣ Prepare for future tech careers
                            </span>

                            <span>
                                4️⃣ Develop strong problem-solving skills
                            </span>
                        </div>

                        <p className='font-normal text-[16px] leading-[150%] text-red-400'>Working on real projects helps teens gain practical experience and confidence.</p>


                    </div>
                </div>

                <div className='flex flex-row items-center justify-center gap-15 mt-20'>
                    <div className='max-w-112.5 w-full p-2 flex flex-col border border-transparent shadow-[0px_0px_32px_0px_#0000000F] rounded-[20px]'>
                    
                    </div>

                    <div className='max-w-112.5 w-full p-2 flex flex-col border border-transparent shadow-[0px_0px_32px_0px_#0000000F] rounded-[20px]'>
                        
                    </div>

                </div>

                <div className='flex flex-row items-center justify-center gap-15 mt-20'>
                    <div className='max-w-112.5 w-full p-2 flex flex-col border border-transparent shadow-[0px_0px_32px_0px_#0000000F] rounded-[20px]'>
                        
                    </div>

                    <div className='max-w-112.5 w-full p-2 flex flex-col border border-transparent shadow-[0px_0px_32px_0px_#0000000F] rounded-[20px]'>
                        
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Anyage
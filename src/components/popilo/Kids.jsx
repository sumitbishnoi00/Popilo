import React from 'react'
import Heading from '../common/Heading'

const Kids = () => {
    return (
        <section className='px-3 py-40'>
            <div className='max-w-285 mx-auto w-full flex flex-col '>

                <div className='flex flex-row gap-10'>
                    <img src="/assets/girl.webp" className='w-150 h-110.5' alt="girl" />

                    <div className='flex flex-col gap-5 mb-24.75'>
                        <h1 className='font-semibold text-5xl leading-[120%] text-black'>Coding for Kids</h1>

                        <p className='font-normal text-[16px] leading-[150%] text-charcoal-gray'>Kids can begin their coding journey with fun and interactive tools that make learning exciting.</p>

                        <div className='flex flex-col gap-3'>
                            <span>
                                1️⃣ Build games and animations
                            </span>

                            <span>
                                2️⃣ Improve logical thinking
                            </span>

                            <span>
                                3️⃣ Boost creativity and confidence
                            </span>

                            <span>
                                4️⃣ Learn through play and exploration
                            </span>
                        </div>

                        <p className='font-normal text-[16px] leading-[150%] text-red-400'>Start with platforms like Scratch, Blockly, and Code.org to make coding a fun adventure.</p>


                    </div>
                </div>

                <div className='flex flex-row items-center justify-center gap-15 mt-20'>
                    <div className='max-w-112.5 w-full p-2 flex flex-col border border-transparent shadow-[0px_0px_32px_0px_#0000000F] rounded-[20px]'>
                        <img src="/assets/Build games.png" className='w-112.5 h-80 rounded-2xl' alt="Build games" />

                        <h1 className='font-semibold text-[24px] leading-[120%] text-black mt-6'>Build Games and Animations</h1>

                        <p className='font-normal text-[16px] leading-[150%] text-neutral-gray mt-4'>Building games and animations is a fun and interactive way to learn coding. It helps beginners understand programming concepts through real projects. Learners can create their own characters, stories, and game levels while improving creativity and problem-solving skills. Animations teach how objects move and respond to different actions. Tools like Scratch and Code.org make it easy for beginners to start coding. As learners gain experience, they can build more advanced and exciting projects. Game development makes coding enjoyable and keeps learners motivated to practice regularly.</p>
                    </div>

                    <div className='max-w-112.5 w-full p-2 flex flex-col border border-transparent shadow-[0px_0px_32px_0px_#0000000F] rounded-[20px]'>
                        <img src="/assets/Improve logical.png" className='w-112.5 h-80 rounded-2xl' alt="Improve logical" />

                        <h1 className='font-semibold text-[24px] leading-[120%] text-black mt-6'>Improve logical thinking</h1>

                        <p className='font-normal text-[16px] leading-[150%] text-neutral-gray mt-4 mb-6'>Coding helps improve logical thinking by teaching learners how to solve problems step by step. It encourages them to analyze situations, identify patterns, and make smart decisions. While writing code, learners learn to break complex tasks into smaller and manageable parts. This process strengthens reasoning and critical-thinking skills. Regular coding practice also improves focus, accuracy, and problem-solving abilities. These skills are valuable not only in programming but also in everyday life and academic learning.</p>
                    </div>

                </div>

                <div className='flex flex-row items-center justify-center gap-15 mt-20'>
                    <div className='max-w-112.5 w-full p-2 flex flex-col border border-transparent shadow-[0px_0px_32px_0px_#0000000F] rounded-[20px]'>
                        <img src="/assets/Boost creativity and confidence.png" className='w-112.5 h-80 rounded-2xl' alt="Boost creativity and confidence" />

                        <h1 className='font-semibold text-[24px] leading-[120%] text-black mt-6'>Boost creativity and confidence</h1>

                        <p className='font-normal text-[16px] leading-[150%] text-neutral-gray mt-4'>Learning to code helps children think creatively and turn their ideas into real projects. As they build games, websites, and applications, they develop problem-solving skills and learn how to approach challenges with confidence. Every completed project gives them a sense of achievement and motivates them to keep learning. Coding also encourages innovation, logical thinking, and self-expression. Over time, students become more confident in their abilities and gain the courage to explore new ideas and opportunities.</p>
                    </div>

                    <div className='max-w-112.5 w-full p-2 flex flex-col border border-transparent shadow-[0px_0px_32px_0px_#0000000F] rounded-[20px]'>
                        <img src="/assets/Learn through play.png" className='w-112.5 h-80 rounded-2xl' alt="Learn through play" />

                        <h1 className='font-semibold text-[24px] leading-[120%] text-black mt-6'>Learn through play and exploration</h1>

                        <p className='font-normal text-[16px] leading-[150%] text-neutral-gray mt-4 mb-6'>Children learn best when they are actively engaged and having fun. Through interactive coding activities, games, and creative projects, learners can explore new concepts in an enjoyable way. This hands-on approach encourages curiosity and experimentation without the fear of making mistakes. As they play and discover, they develop critical thinking and problem-solving skills naturally. Learning through exploration keeps students motivated, inspired, and excited about their educational journey.</p>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Kids
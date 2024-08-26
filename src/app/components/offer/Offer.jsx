import React from 'react'
import Image from 'next/image'
export default function Offer() {
    return (
        <>
            <div className='grid md:grid-cols-2 grid-cols-1 bg-Green3 '>
                <div className='md:p-10 p-5 place-self-center'>
                    <h1 className='md:text-4xl text-3xl font-extrabold text-Green500 font-Poppins-Regular '>What we Do?</h1>
                    <p className='md:text-justify font-Lexend-Regular text-Green475 my-2'>{`At Huddle Investing, we bridge the gap between investors and financial experts through an innovative platform that simplifies and enhances the investment process. We provide automated subscription management, AI-driven insights, and copy trading features, empowering users to follow expert strategies and engage in community-based trading. Our mission is to create a trusted, collaborative environment where knowledge is shared, and financial growth is accessible to all.`}</p>
                </div>
                <Image
                    className='my-10 lg:w-[60%]  xl:w-[55%] md:h-[80%] md:block hidden place-self-center opacity-50'
                    src={'/assets/image/FooterLogo.png'}
                    alt='logo image'
                    height={400}
                    width={400}
                />
            </div>
        </>
    )
}

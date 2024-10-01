import React from 'react'
import Image from 'next/image'
export default function Offer() {
    return (
        <>
            <div className='grid md:grid-cols-2 grid-cols-1 bg-Green3'>
                <div className='md:p-10 p-5 place-self-center'>
                    <h1 className='md:text-4xl text-3xl font-extrabold text-Green500 font-Poppins-Regular '>What we Do?</h1>
                    <p className='md:text-justify font-Lexend-Regular text-Green475 my-2'>
                        Huddle Investing is revolutionizing the financial sector with an innovative app that seamlessly connects investors with seasoned financial experts. Our platform offers exclusive investor groups, simplifies subscription management, and enables users to automatically mirror the trades of top professionals. At the intersection of financial expertise and cutting-edge technology, Huddle Investing fosters a vibrant community where learning, collaboration, and growth come together, redefining the future of investing.
                    </p>
                </div>

                <video
    className="w-full max-w-4xl opacity-25 shadow-lg"
    src="/assets/image/heroSection/HeroVide.mp4"
    autoPlay
    loop
    muted
    // controls
  />
                {/* <Image
                    className='my-10 lg:w-[60%]  xl:w-[55%] md:h-[80%] md:block hidden place-self-center opacity-50'
                    src={'/assets/image/FooterLogo.png'}
                    alt='logo image'
                    height={400}
                    width={400}
                /> */}
            </div>




            <div className='grid md:grid-cols-2 grid-cols-1 '>

                <Image
                    className='my-10 lg:w-[60%]  xl:w-[55%] md:h-[80%] md:block hidden place-self-center opacity-50'
                    src={'/assets/image/home/MadeEasy.png'}
                    alt='logo image'
                    height={400}
                    width={400}
                />
                <div className='md:p-10 p-5 place-self-center relative'>

                    <div className='absolute -top-7 right-10'>


                    <Image
                    className='my-10 lg:w-[60%]  xl:w-[55%] md:h-[80%] md:block hidden place-self-center opacity-50'
                    src={'/assets/image/home/Start.png'}
                    alt='logo image'
                    height={400}
                    width={400}
                />
                    </div>
                    <h1 className=' text-3xl font-extrabold text-Green500 font-Poppins-Regular '>All in one platform
                        </h1>
                    <p className='md:text-justify font-Lexend-Regular text-Green475 my-2'>
                        {`We know what a successful trader is looking for in terms of
information and educational content, which is provided
through our platform. In terms of financing, we provided our
client with accounts funded with different capitals. Even for
beginners, we provide them with copy services from
professional traders. All this falls under the umbrella of
comfortable and fair trading conditions for our clients.`}
                    </p>
                </div>

            </div>
        </>
    )
}

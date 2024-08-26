import React from 'react'
import Link from 'next/link'
export default function Plans() {
    return (
        <>
            <div className='flex flex-col items-center justify-center md:p-10 my-10 '>
                <h1 className='md:text-4xl text-3xl mb-5 font-extrabold text-Green500 font-Poppins-Regular '>Plans</h1>
                <div className="grid md:grid-cols-2 gap-5  md:gap-10 grid-cols-1 md:my-10 my-5">
                    <div className='bg-[#F3FFF3] md:p-10 md:w-[83%] md:justify-self-end p-5 flex-col  gap-2 rounded'>
                        <h1 className='font-semibold text-2xl   text-Green500 md:text-3xl'>

                            Basic Plan
                        </h1>
                        <p className='text-Green450 font-semibold text-xl'>$10/mo</p>
                        <p className='text-Green450 mt-2 mb-5'>Track Performances, Analytics and Exclusive Content</p>
                        <div className='md:mt-10 mt-5'>
                      <Link href='/contact-us' className="before:ease relative py-3  px-10 overflow-hidden border border-Green300 bg-Green300 text-white  transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700  hover:before:-translate-x-40">
                            Get Started
                        </Link>
                      </div>
                    </div>
                    <div className='bg-[#F3FFF3] md:p-10 p-5  md:w-[83%] md:justify-self-start flex-col  gap-2 rounded'>
                        <h1 className='font-semibold text-2xl   text-Green500 md:text-3xl'>
                            Premium Plan
                        </h1>
                        <p className='text-Green450 font-semibold text-xl'>$35/mo</p>
                        <p className='text-Green450 mt-2 mb-5'>Monetization and Comprehensive for both Experts and Investors </p>



                      <div className='md:mt-10 mt-5'>
                      <Link href='/contact-us' className="before:ease relative py-3  px-10 overflow-hidden border border-Green300 bg-Green300 text-white  transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700  hover:before:-translate-x-40">
                            Get Started
                        </Link>
                      </div>
                    </div>
                </div>
            </div>
        </>
    )
}

import React from 'react'
export default function Services() {
    return (
        <>
            <div className='my-10 md:p-0 p-5  '>
                <h1 className='md:text-4xl text-3xl font-extrabold text-Green500 font-Poppins-Regular text-center '>Services</h1>
                <div className="grid md:grid-cols-2 md:text-justify   grid-cols-1  gap-5 md:p-10 ">
                    <div className='mt-5 '>
                        <div className='my-3'>
                            <spam className='font-semibold font-Poppins-Regular text-Green475'>
                                Automated Subscription Management:
                            </spam>
                            <spam className='font-Lexend-Regular  ml-2 text-justify text-Green475'>
                                Optimize your financial expertise with our automated subscription management system, saving time and reducing errors for more efficient monetization.
                            </spam>
                        </div>
                        <div className='my-3'>
                            <spam className='font-semibold font-Poppins-Regular text-Green475'>
                                Centralized Marketplace:
                            </spam>
                            <spam className='font-Lexend-Regular  ml-2 text-justify text-Green475'>
                                Connect with trusted financial experts through our centralized marketplace, designed to provide reliable guidance and foster collaboration.
                            </spam>
                        </div>
                        <div className='my-3'>
                            <spam className='font-semibold font-Poppins-Regular text-Green475'>
                                Enhanced Investor Confidence
                            </spam>
                            <spam className='font-Lexend-Regular  ml-2 text-justify text-Green475'>
                                Follow only the most qualified professionals with our rigorous expert verification, boosting your confidence in every investment decision.
                            </spam>
                        </div>
                        <div className='my-3'>
                            <spam className='font-semibold font-Poppins-Regular text-Green475'>
                                Automated Copy Trading:
                            </spam>
                            <spam className='font-Lexend-Regular  ml-2 text-justify text-Green475'>
                                Effortlessly mirror top trades with our automated copy trading feature, enabling you to leverage proven strategies without the manual hassle.
                            </spam>
                        </div>
                        <div className='my-3'>
                            <spam className='font-semibold font-Poppins-Regular text-Green475'>
                                Community-Based Trading:
                            </spam>
                            <spam className='font-Lexend-Regular  ml-2 text-justify text-Green475'>
                                Participate in real-time discussions with a vibrant community of traders, enriching your trading experience with diverse perspectives.
                            </spam>
                        </div>
                        <div className='my-3'>
                            <spam className='font-semibold font-Poppins-Regular text-Green475'>
                                Innovative Business Model:
                            </spam>
                            <spam className='font-Lexend-Regular  ml-2 text-justify text-Green475'>
                                Take advantage of our subscription-based model, offering performance tracking, analytics, and exclusive content for both experts and investors.
                            </spam>
                        </div>
                    </div>
                    <div className='bg-Green3 place-content-center md:p-10 mt-5 p-5 rounded-lg'>
                        <h1 className='md:text-4xl text-3xl font-extrabold text-Green500 font-Poppins-Regular mb-5'>SWOT</h1>
                        {/* S SWOT */}
                        <div className="grid md:grid-cols-2   grid-cols-1 gap-5 ">
                        <div className=' bg-white rounded-md w-full md:h-[10rem] p-4'>
                                <h1 className='font-semibold mb-2 text-Green475 font-Lexend-Regular mt-2'>Strengths
                                </h1>
                                <div className='text-Green475 font-Lexend-Regular  text-sm'>
                                    <li className=''>Innovative Feature</li>
                                    <li className=''>Experienced Leadership </li>
                                    <li className=''>Comprehensive Business Model</li>
                                    <li className=''>Community-Oriented Approach</li>
                                </div>
                            </div>
                            {/* W - SWOT */}
                            <div className=' bg-white rounded-md w-full md:h-[10rem] p-4'>
                                <h1 className='font-semibold mb-2 text-Green475 font-Lexend-Regular mt-2'>Weakness
                                </h1>
                                <div className='text-Green475 font-Lexend-Regular  text-sm'>
                                    <li className=''>Market Education</li>
                                    <li className=''>Limited Geographic Presence </li>
                                    <li className=''>Dependency on Technology</li>
                                </div>
                            </div>
                            {/* O- SWOT */}
                            <div className=' bg-white rounded-md w-full md:h-[10rem] p-4'>
                                <h1 className='font-semibold mb-2 text-Green475 font-Lexend-Regular mt-2'>Oppurtunities
                                </h1>
                                <div className='text-Green475 font-Lexend-Regular  text-sm'>
                                    <li className=''>Growing  FinTech Market</li>
                                    <li className=''>Strategic Partnerships </li>
                                    <li className=''> Interest in Social Investing</li>
                                    <li className=''>Expansion of Service Offerings</li>
                                </div>
                            </div>
                            {/* T- SWOT */}
                            <div className=' bg-white rounded-md  md:h-[10rem] w-full p-4'>
                                <h1 className='font-semibold mb-2 text-Green475 font-Lexend-Regular mt-2'>Threats
                                </h1>
                                <div className='text-Green475 font-Lexend-Regular  text-sm'>
                                    <li className=''>Intense Competition</li>
                                    <li className=''>Regulatory Changes </li>
                                    <li className=''> Market Volatility</li>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

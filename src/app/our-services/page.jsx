import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function Page() {
    return (
        <>
            <section
                className="relative homeHero2 font-Poppins-Regular py-16 px-4 sm:px-8 lg:px-16 text-center">
                <div className="mx-auto "
                >
                    <div className="flex items-center justify-center mb-6">
                        <h1 className="text-3xl sm:text-4xl font-extrabold text-Green475 ml-3">
                            Services
                        </h1>
                    </div>
                    <p className="text-sm sm:text-base  text-white">
                        {`At Huddle Investing, we offer a comprehensive range of trading services, including Forex, Metals, Indices, Shares, and Commodities. Our platform is designed to empower traders with access to over 20,000 instruments, allowing you to trade seamlessly across global markets. We enable all trading strategies and provide a robust 24/5 trading environment, ensuring you can capitalize on market opportunities at any time. With instant nano-second execution on mobile platforms, our aim is to help our traders succeed by delivering an exceptional trading experience tailored to your needs.`}
                    </p>
                    <p className="text-sm sm:text-base text-Green500 mt-4 font-Lexend-Regular">
                        {`  Connecting With Canada's Most Reliable Financial Partners`}
                    </p>
                </div>
            </section>
            <section className=' md:p-10 p-5' >
                <section className=' flex md:flex-row flex-col  gap-5 md:gap-10 '>
                    <div className=''>
                        <h1 className='md:text-4xl mb-2 text-3xl font-extrabold text-Green500 font-Poppins-Regular '> Automated Copy trading</h1>
                        <spam className='font-Lexend-Regular text- text-Green475'>
                            Global Currency Markets at Your Fingertips
                        </spam>
                        <p className='text-Green475 '>
                            {` Copy trading with Huddle Investing allows users to automatically replicate the trades of expert
 investors, leveraging their expertise to maximize returns. This seamless feature empowers
 investors to make informed decisions without the need for constant market monitoring`}
                        </p>
                        <div className='mt-5'>
                            <Link href='/contact-us' className="before:ease relative py-2 px-5 overflow-hidden border border-Green300 bg-Green300 rounded text-white  transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700  hover:before:-translate-x-40">
                                Start Trading
                            </Link>
                        </div>
                    </div>
                    <Image
                        className='w-[50%] '
                        src='/assets/image/our-services/CopyTrading.jpg'
                        alt=''
                        width={400}
                        height={400}
                    />
                </section>
                <section className='md:my-10 my-5 items-center flex md:flex-row flex-col  gap-5 md:gap-10  md:text-justify'>
                    <Image
                        className='w-[50%] md:block hidden rounded '
                        src='/assets/image/our-services/Commodities Trading2.jpg'
                        alt=''
                        width={400}
                        height={400}
                    />
                    <div className=''>
                        <h1 className='md:text-4xl mb-2 text-3xl font-extrabold text-Green500 font-Poppins-Regular'>Community Trading</h1>
                        <spam className='font-Lexend-Regular text-justify text-Green475'>
                            Make your invetments worthy
                        </spam>
                        <p className='text-Green475'>
                            {`Huddle Investing’s Community Trading allows investors to collaborate, share strategies, and discuss
 market trends in real-time. Leverage the collective expertise of a community to enhance your trading
 performance and make informed decisions`}
                        </p>
                        <div className='mt-5'>
                            <Link href='/contact-us' className="before:ease relative py-2 px-5 overflow-hidden border border-Green300 bg-Green300 rounded text-white  transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700  hover:before:-translate-x-40">
                                Start Trading
                            </Link>
                        </div>
                    </div>
                </section>
                <section className=' md:my-10 my-5 flex items-center md:flex-row flex-col  gap-5 md:gap-10 md:text-justify'>
                    <div className=''>
                        <h1 className='md:text-4xl mb-2 text-3xl font-extrabold text-Green500 font-Poppins-Regular '>Portfolio Health Checkup</h1>
                        <spam className='font-Lexend-Regular text-justify text-Green475'>
                            Capture Market Movements
                        </spam>
                        <p className='text-Green475'>
                            {`At Huddle Investing, we provide portfolio health checkup of your investments , delivering actionable
 insights to help you optimize performance and reduce risks.Whether you’re looking to enhance returns,
 mitigate potential losses, or adjust your investment strategy, our comprehensive insights will empower
 you to make informed decisions.`}
                        </p>
                        <div className='mt-5'>
                            <Link href='/contact-us' className="before:ease relative py-2  px-5 overflow-hidden border border-Green300 bg-Green300 rounded text-white  transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700  hover:before:-translate-x-40">
                                Start Trading
                            </Link>
                        </div>
                    </div>
                    <Image
                        className='w-[50%] md:block hidden rounded '
                        src='/assets/image/our-services/Portfolio.jpg'
                        alt=''
                        width={400}
                        height={400}
                    />
                </section>
                <section className='md:my-10 my-5  items-center flex md:flex-row flex-col  gap-5 md:gap-10 md:text-justify'>
                    <Image
                        className='w-[50%] md:block hidden rounded '
                        src='/assets/image/our-services/Portfolio2.jpg'
                        alt=''
                        width={1000}
                        height={800}
                    />
                    <div className=''>
                        <h1 className='md:text-4xl mb-2 text-3xl font-extrabold text-Green500 font-Poppins-Regular '>Live Dashboard Access</h1>
                        <spam className='font-Lexend-Regular text-justify text-Green475'>
                            Own a Piece of Leading Companies
                        </spam>
                        <p className='text-Green475'>
                            {`Stay connected and informed with our user-friendly interface 24/7 live dashboard. This powerful
 tool allows you to track your portfolio's performance in real-time, view key metrics, and access
 critical updates whenever you need them`}
                        </p>
                        <div className='mt-5'>
                            <Link href='/contact-us' className="before:ease relative py-2
                              px-5 overflow-hidden border border-Green300 bg-Green300 rounded text-white  transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700  hover:before:-translate-x-40">
                                Start Trading
                            </Link>
                        </div>
                    </div>
                </section>
                <section className=' md:my-10 my-5 flex items-center md:flex-row flex-col  gap-5 md:gap-10 md:text-justify'>
                    <div className=''>
                        <h1 className='md:text-4xl mb-2 text-3xl font-extrabold text-Green500 font-Poppins-Regular '>Live Webinar & HI Academy</h1>
                        <spam className='font-Lexend-Regular text-justify text-Green475'>
                            Newbie? No issue we got you
                        </spam>
                        <p className='text-Green475'>
                            {`Through live webinars and educational courses, investors can continuously improve their knowledge. This empowers them to make more informed decisions, whether they’re handling their own trades or evaluating the advice given by financial professionals.`}
                        </p>
                        <div className='mt-5'>
                            <Link href='/contact-us' className="before:ease relative py-2  px-5 overflow-hidden border border-Green300 bg-Green300 rounded text-white  transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700  hover:before:-translate-x-40">
                                Start Trading
                            </Link>
                        </div>
                    </div>
                    <Image
                        className='w-[50%] md:block hidden rounded '
                        src='/assets/image/our-services/Academy.jpg'
                        alt=''
                        width={400}
                        height={400}
                    />
                </section>
                <section className='md:my-10 my-5  items-center flex md:flex-row flex-col  gap-5 md:gap-10 md:text-justify'>
                    <Image
                        className='w-[50%] md:block hidden rounded '
                        src='/assets/image/our-services/brokers.jpg'
                        alt=''
                        width={1000}
                        height={800}
                    />
                    <div className=''>
                        <h1 className='md:text-4xl mb-2 text-3xl font-extrabold text-Green500 font-Poppins-Regular '>Connect with Trusted Brokers
                        </h1>
                        <spam className='font-Lexend-Regular text-justify text-Green475'>
                            Most Trusted brokers
                        </spam>
                        <p className='text-Green475'>
                            {`Investors can easily collaborate with top brokers, ensuring their trades are handled by professionals who understand the markets deeply. This reduces risk and improves execution quality, enhancing overall returns.`}
                        </p>
                        <div className='mt-5'>
                            <Link href='/contact-us' className="before:ease relative py-2
                              px-5 overflow-hidden border border-Green300 bg-Green300 rounded text-white  transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700  hover:before:-translate-x-40">
                                Start Trading
                            </Link>
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}

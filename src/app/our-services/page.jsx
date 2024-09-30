import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function Page() {
    return (
        <>
            <section
                className="relative homeHero2 font-Poppins-Regular  py-16 px-4 sm:px-8 lg:px-16 text-center">
                <div className="max-w-3xl mx-auto "
                >
                    <div className="flex items-center justify-center  mb-6">
                        <h1 className="text-3xl sm:text-4xl font-extrabold text-Green475 ml-3">
                            Services
                        </h1>
                    </div>
                    <p className="text-lg sm:text-lg  text-white">
                        {`At Huddle Investing, we offer a comprehensive range of trading services, including Forex, Metals, Indices, Shares, and Commodities. Our platform is designed to empower traders with access to over 20,000 instruments, allowing you to trade seamlessly across global markets. We enable all trading strategies and provide a robust 24/5 trading environment, ensuring you can capitalize on market opportunities at any time. With instant nano-second execution on mobile platforms, our aim is to help our traders succeed by delivering an exceptional trading experience tailored to your needs.`}
                    </p>
                </div>
            </section>
            <section className='bg-Green3 md:p-10 p-5' >
                <section className=' flex md:flex-row flex-col  gap-5 md:gap-10 md:text-justify'>
                    <div className=''>
                        <h1 className='md:text-4xl mb-0 text-3xl font-extrabold text-Green500 font-Poppins-Regular '>Forex Trading</h1>
                        <spam className='font-Lexend-Regular text-justify text-Green475'>
                            Global Currency Markets at Your Fingertips
                        </spam>
                        <p className='text-Green475 '>
                            {`Engage in the world’s largest financial market with Huddle Investing, where you can trade currency pairs like a pro. Gain an edge with access to real-time data and expert insights, empowering you to seize opportunities in fluctuating exchange rates. With over 55 major, cross, and exotic Forex pairs at your fingertips, our platform offers industry-leading tight spreads that maximize your trading potential while keeping costs low. Whether you're hedging against currency risk or capitalizing on market movements, we provide the tools and support you need to thrive in Forex trading.`}
                        </p>
                        <div className='mt-5'>
                            <Link href='/contact-us' className="before:ease relative py-2 px-5 overflow-hidden border border-Green300 bg-Green300 rounded text-white  transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700  hover:before:-translate-x-40">
                                Start Trading
                            </Link>
                        </div>
                    </div>
                    <Image
                        className='w-[18rem] h-[15rem] md:block hidden rounded '
                        src='/assets/image/our-services/forex-trading.jpeg'
                        alt=''
                        width={400}
                        height={400}
                    />
                </section>
                <section className='md:my-10 my-5 flex md:flex-row flex-col  gap-5 md:gap-10  md:text-justify'>
                    <Image
                        className='w-[18rem] h-[15rem] md:block hidden rounded '
                        src='/assets/image/our-services/metal-trading.jpg '
                        alt=''
                        width={400}
                        height={400}
                    />
                    <div className=''>
                        <h1 className='md:text-4xl mb-0 text-3xl font-extrabold text-Green500 font-Poppins-Regular'>Metal Trading</h1>
                        <spam className='font-Lexend-Regular text-justify text-Green475'>
                            Invest in Precious Metals
                        </spam>
                        <p className='text-Green475'>
                            {`Secure your portfolio with investments in precious metals like gold, silver, and platinum, which offer a hedge against inflation and economic uncertainty. Diversify your holdings further by exploring new opportunities through our global network, including trading in other valuable metals. With Huddle Investing, you can effortlessly manage and grow your portfolio, supported by comprehensive market analysis and cutting-edge trading tools.`}
                        </p>
                        <div className='mt-5'>
                            <Link href='/contact-us' className="before:ease relative py-2 px-5 overflow-hidden border border-Green300 bg-Green300 rounded text-white  transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700  hover:before:-translate-x-40">
                                Start Trading
                            </Link>
                        </div>
                    </div>
                </section>
                <section className=' md:my-10 my-5 flex md:flex-row flex-col  gap-5 md:gap-10 md:text-justify'>
                    <div className=''>
                        <h1 className='md:text-4xl mb-0 text-3xl font-extrabold text-Green500 font-Poppins-Regular '>Indices Trading</h1>
                        <spam className='font-Lexend-Regular text-justify text-Green475'>
                            Capture Market Movements
                        </spam>
                        <p className='text-Green475'>
                            {`Expand your investment horizon with Huddle Investing by trading leading global indices like the S&P 500, NASDAQ, and Dow Jones. Unlock instant access to major markets worldwide, including the German DAX Index and the US Wall Street 30, allowing you to diversify your portfolio effortlessly. With our advanced analytics and expert strategies, you can gain broad exposure to entire markets or sectors without the need to buy individual stocks, empowering you to make informed decisions and optimize your investment outcomes.`}
                        </p>
                        <div className='mt-5'>
                            <Link href='/contact-us' className="before:ease relative py-2  px-5 overflow-hidden border border-Green300 bg-Green300 rounded text-white  transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700  hover:before:-translate-x-40">
                                Start Trading
                            </Link>
                        </div>
                    </div>
                    <Image
                        className='w-[18rem] h-[15rem] md:block hidden rounded '
                        src='/assets/image/our-services/indices.jpeg'
                        alt=''
                        width={400}
                        height={400}
                    />
                </section>
                <section className='md:my-10 my-5 flex md:flex-row flex-col  gap-5 md:gap-10 md:text-justify'>
                    <Image
                        className='w-[17rem] h-[15rem] md:block hidden rounded '
                        src='/assets/image/our-services/share-trading.png'
                        alt=''
                        width={1000}
                        height={800}
                    />
                    <div className=''>
                        <h1 className='md:text-4xl mb-0 text-3xl font-extrabold text-Green500 font-Poppins-Regular '>Shares Trading</h1>
                        <spam className='font-Lexend-Regular text-justify text-Green475'>
                            Own a Piece of Leading Companies
                        </spam>
                        <p className='text-Green475'>
                            {`Get in on the action of buying and selling shares from a vast selection of equities, featuring the world’s largest multinational companies listed on top global stock exchanges. With Huddle Investing, you can confidently invest in shares of the world’s top companies and diversify your portfolio. Maximize your returns by leveraging our platform’s robust research tools, expert advice, and real-time tracking of company performance and market trends. Access premier market opportunities and make informed decisions to enhance your investment strategy.`}
                        </p>
                        <div className='mt-5'>
                            <Link href='/contact-us' className="before:ease relative py-2
                              px-5 overflow-hidden border border-Green300 bg-Green300 rounded text-white  transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700  hover:before:-translate-x-40">
                                Start Trading
                            </Link>
                        </div>
                    </div>
                </section>
                <section className=' md:my-10 my-5 flex md:flex-row flex-col  gap-5 md:gap-10 md:text-justify'>
                    <div className=''>
                        <h1 className='md:text-4xl mb-0 text-3xl font-extrabold text-Green500 font-Poppins-Regular '>Commodities Trading</h1>
                        <spam className='font-Lexend-Regular text-justify text-Green475'>
                            Trade Raw Materials and Agricultural Products
                        </spam>
                        <p className='text-Green475'>
                            {`Expand your portfolio by trading key commodities like energy and grains, leveraging global supply and demand trends to capitalize on market opportunities. With Huddle Investing, you can diversify your investments by trading a wide range of commodities such as oil, natural gas, corn, and wheat. Our platform provides access to global commodity markets, enabling you to profit from price fluctuations driven by supply, demand, and geopolitical factors. With real-time market data and expert insights at your fingertips, you can confidently navigate the complexities of commodities trading and achieve strong returns on your investments.`}
                        </p>
                        <div className='mt-5'>
                            <Link href='/contact-us' className="before:ease relative py-2  px-5 overflow-hidden border border-Green300 bg-Green300 rounded text-white  transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700  hover:before:-translate-x-40">
                                Start Trading
                            </Link>
                        </div>
                    </div>
                    <Image
                        className='w-[18rem] rounded h-[15rem] md:block hidden '
                        src='/assets/image/our-services/Commodities Trading.jpg'
                        alt=''
                        width={400}
                        height={400}
                    />
                </section>
            </section>
            <section className='md:p-10 p-5 flex md:flex-row flex-col  gap-5 md:gap-10 md:text-justify'
            >

<Image
                    className='w-[18rem] rounded  h-[14rem] place-self-center md:block hidden '
                    src='/assets/image/our-services/CryptoCFDS.png'
                    alt=''
                    width={400}
                    height={400}
                />

                <div className=''>
                    <h1 className='md:text-4xl mb-0 text-3xl font-extrabold text-Green500 font-Poppins-Regular '>CRYPTO CFDs</h1>
                    <spam className='font-Lexend-Regular text-justify text-Green475'>
                        Contracts for Difference
                    </spam>
                    <p className='text-Green475'>
                        {`Explore the dynamic world of Crypto CFDs with Huddle Investing, where you can trade leading cryptocurrencies like Bitcoin, Ethereum, and Ripple without the need to own the underlying assets. Designed for experienced traders with a bold and strategic approach, Crypto CFDs offer unparalleled flexibility, enabling you to capitalize on market volatility and profit from both rising and falling prices. Our advanced platform equips you with the essential tools to navigate significant price movements, optimize your leverage, and seize opportunities in the fast-paced realm of cryptocurrency trading. Elevate your trading potential with Huddle Investing and take control of your financial future`}
                    </p>
                    <div className='mt-5'>
                        <Link href='/contact-us' className="before:ease relative py-2  px-5 overflow-hidden border border-Green300 bg-Green300 rounded text-white  transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700  hover:before:-translate-x-40">
                            Start Trading
                        </Link>
                    </div>
                </div>
               
            </section>
        </>
    )
}

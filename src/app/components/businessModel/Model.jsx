import React from 'react'
export default function Model() {
    return (
        <>
            <div className='md:p-10 p-5 my-10  bg-Green3'>
                <h1 className='md:text-4xl text-3xl font-extrabold text-Green500 font-Poppins-Regular'>Business Model</h1>
                <div className='my-5'>
                    {/*  1 */}
                    <h1 className='font-semibold text-Green475 font-Lexend-Regular mt-2'>Tiered Subscription Plans</h1>
                    <p className='text-Green475 font-Lexend-Regular'>We offer flexible subscription plans tailored to meet various user needs, including a Basic Plan at $10/month and a Premium Plan at $35/month.</p>
                    {/* 2 */}
                    <h1 className='font-semibold text-Green475 font-Lexend-Regular mt-2'>Free Trial</h1>
                    <p className='text-Green475 font-Lexend-Regular'>To encourage new users, we provide a free trial period, lowering the entry barrier and allowing users to explore our platform risk-free.</p>
                    {/* 3 */}
                    <h1 className='font-semibold text-Green475 font-Lexend-Regular mt-2'>Special Promotions</h1>
                    <p className='text-Green475 font-Lexend-Regular'>Early adopters can benefit from exclusive promotions, making it easier to experience the full range of our features.</p>
                    <h1 className='font-semibold text-Green475 font-Lexend-Regular mt-2'>Revenue Streams
                    </h1>
                    <p className='text-Green475 font-Lexend-Regular '>1. Our primary revenue comes from tiered subscription plans, offering users different levels of access based on their needs.</p>
                    <p className='text-Green475 font-Lexend-Regular my-1 '>2.
                        Partnerships and Affiliations: We generate additional revenue through commissions and fees from successful partnerships and affiliate transactions.
                        Referral Program: Both users and their referred friends can earn a $25 cash reward, incentivizing platform growth through word-of-mouth.</p>
                    <p className='text-Green475 font-Lexend-Regular '>3. Referral Program: Both users and their referred friends can earn a $25 cash reward, incentivizing platform growth through word-of-mouth.</p>
                </div>
            </div>
        </>
    )
}

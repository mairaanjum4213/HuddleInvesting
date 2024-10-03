import React from 'react'
import Link from 'next/link'
import { FaCheck } from "react-icons/fa6";
import ServicesCard from '../servicecs/ServicesCard.jsx'
export default function Plans() {
  return (
    <>
      <div className='flex flex-col items-center justify-center lg:p-10  my-10 '>
        <h1 className='md:text-4xl text-3xl mb-5 font-extrabold  font-Poppins-Regular '>Plans</h1>
        <div className="lg:max-w-7xl  mx-auto p-6">
          <div className="grid md:grid-cols-3 gap-10">
            <div className="duration-300  border hover:border-Green300 p-6 rounded-lg shadow-sm group hover:bg-Green3">
              <h3 className="text-lg font-semibold  mb-4">Free</h3>
              {/* <div className="flex items-center mb-2">
            <span className="line-through text-gray-400 mr-2">$11.99</span>
            <span className="bg-green-100 text-green-600 px-2 py-1 rounded">SAVE 75%</span>
          </div> */}
              <div className="text-4xl font-bold mb-2">CA$0<span className="text-base font-medium">/mo</span>
                <p className="text-gray-400 text-sm font-normal mt-2">{`Don’t miss out! Grab your free package and enjoy top features with zero commitment`}</p>
              </div>
              <div className='my-5 '>
                <Link href='/contact-us' className="before:ease relative  py-2  px-3 overflow-hidden  group-hover:!text-white !text-Green300 rounded border border-Green300 group-hover:bg-Green300 text-white  transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700  hover:before:-translate-x-40">
                  Choose Plan
                </Link>
              </div>
              <ul className="mt-4 text-green-600 space-y-2">
                <p className="text-gray-400 text-sm ">You Got :</p>
                <li className='flex items-center gap-1'>
                  <FaCheck className='text-Green300' />
                  <p className=' border-dashed'>Free Watchlist</p>
                </li>
                <li className='flex items-center gap-1'>
                  <FaCheck className='text-Green300' />
                  <p className=' border-dashed'>100 MB Storage</p>
                </li>
                <li className='flex items-center gap-1'>
                  <FaCheck className='text-Green300' />
                  <p className=' border-dashed'>1 User</p>
                </li>
                <li className='flex items-center gap-1'>
                  <FaCheck className='text-Green300' />
                  <p className=' border-dashed'>1st time free financial consultation</p>
                </li>
                <li className='flex items-center gap-1'>
                  <FaCheck className='text-Green300' />
                  <p className=' border-dashed'>Limited Access of HI Academy</p>
                </li>
              </ul>
            </div>
            {/* Business Plan */}
            <div className="duration-300  border hover:border-Green300 relative  p-6 rounded-lg shadow-sm group hover:bg-Green3">
              <span className="absolute lg:block hidden top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-Green300 text-white px-4 py-1 rounded-full text-sm">MOST POPULAR</span>
              <h3 className="text-lg font-semibold mb-4"> Premium Features</h3>
              {/* <div className="flex items-center mb-2">
                <span className="line-through text-gray-400 mr-2">$12.99</span>
                <span className="bg-green-100 text-green-600 px-2 py-1 rounded">SAVE 71%</span>
              </div> */}
              <div className="text-4xl font-bold mb-2">CA$100.<span className="text-base font-medium">/mo</span></div>
              <p className=" text-gray-400 mr-2">For 12-Month Term</p>
              <p className=" text-Green300 font-semibold mr-2">+3 Month Free</p>
              <div className='my-5 '>
                <Link href='/contact-us' className="before:ease relative  py-2  px-3 overflow-hidden  group-hover:!text-white !text-Green300 rounded border border-Green300 group-hover:bg-Green300   transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700  hover:before:-translate-x-40">
                  Choose Plan
                </Link>
              </div>
              <ul className="mt-4 text-green-600 space-y-2">
                <li className='flex items-center gap-1'>
                  <FaCheck className='text-Green300' />
                  <p className='border-dashed'>All in Unlimited</p>
                </li>
                <li className='flex items-center gap-1'>
                  <FaCheck className='text-Green300' />
                  <p className='border-dashed'>Copy Trading & Chat</p>
                </li>
                <li className='flex items-center gap-1'>
                  <FaCheck className='text-Green300' />
                  <p className='border-dashed'>Priority Support</p>
                </li>
                <li className='flex items-center gap-1'>
                  <FaCheck className='text-Green300' />
                  <p className='border-dashed'>Connect with Dedicated Financial Advisor</p>
                </li>
                <li className='flex items-center gap-1'>
                  <FaCheck className='text-Green300' />
                  <p className='border-dashed'>Live Webinar & HI Academy</p>
                </li>
                <li className='flex items-center gap-1'>
                  <FaCheck className='text-Green300' />
                  <p className='border-dashed'>Unlimited Trade Set up</p>
                </li>
                <li className='flex items-center gap-1'>
                  <FaCheck className='text-Green300' />
                  <p className='border-dashed'>AI-Powered Market Predictions</p>
                </li>
                <li className='flex items-center gap-1'>
                  <FaCheck className='text-Green300' />
                  <p className='border-dashed'>Live Investors Dashboard</p>
                </li>
                <li className='flex items-center gap-1'>
                  <FaCheck className='text-Green300' />
                  <p className='border-dashed'>Portfolio Health Checkup</p>
                </li>
                <li className='flex items-center gap-1'>
                  <FaCheck className='text-Green300' />
                  <p className='border-dashed'>Connect with Trusted Brokers</p>
                </li>
                <li className='flex items-center gap-1'>
                  <FaCheck className='text-Green300' />
                  <p className='border-dashed'>Exclusive Investor Newsletters</p>
                </li>
                <li className='flex items-center gap-1'>
                  <FaCheck className='text-Green300' />
                  <p className='border-dashed'>Priority Alerts</p>
                </li>
                <li className='flex items-center gap-1'>
                  <FaCheck className='text-Green300' />
                  <p className='border-dashed'>Portfolio Diversification Tips</p>
                </li>
                <li className='flex items-center gap-1'>
                  <FaCheck className='text-Green300' />
                  <p className='border-dashed'>Monthly Portfolio Performance Review</p>
                </li>
                <li className='flex items-center gap-1'>
                  <FaCheck className='text-Green300' />
                  <p className='border-dashed'>Early Access to New Investment Opportunities</p>
                </li>
                <li className='flex items-center gap-1'>
                  <FaCheck className='text-Green300' />
                  <p className='border-dashed'>Tax-Efficient Investment Strategies</p>
                </li>
                <li className='flex items-center gap-1'>
                  <FaCheck className='text-Green300' />
                  <p className='border-dashed'>Re-Investing</p>
                </li>
                <li className='flex items-center gap-1'>
                  <FaCheck className='text-Green300' />
                  <p className='border-dashed'>Advance Security</p>
                </li>
              </ul>
            </div>
            {/* Cloud Startup Plan */}
            <div className="duration-300  border hover:border-Green300 relative  p-6 rounded-lg shadow-sm group hover:bg-Green3">
              <h3 className="text-lg font-semibold mb-4">Basic</h3>
              {/* <div className="flex items-center mb-2">
                <span className="line-through text-gray-400 mr-2">$24.00</span>
                <span className="bg-green-100 text-green-600 px-2 py-1 rounded">SAVE 68%</span>
              </div> */}
              <div className="text-4xl font-bold mb-2">CA$30.<span className="text-base font-medium">/mo</span></div>
              <p className=" text-gray-400 mr-2">For 12-Month Term</p>
              <p className=" text-Green300 font-semibold mr-2">+3 Month Free</p>
              <div className='my-5 '>
                <Link href='/contact-us' className="before:ease relative  py-2  px-3 overflow-hidden  group-hover:!text-white !text-Green300 rounded border border-Green300 group-hover:bg-Green300 text-white  transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700  hover:before:-translate-x-40">
                  Choose Plan
                </Link>
              </div>
              <ul className="mt-4 text-green-600 space-y-2">
                <li className='flex items-center gap-1'>
                  <FaCheck className='text-Green300' />
                  <p className='border-dashed'>All in Unlimited</p>
                </li>
                <li className='flex items-center gap-1'>
                  <FaCheck className='text-Green300' />
                  <p className='border-dashed'>Copy Trading & Chat</p>
                </li>
                <li className='flex items-center gap-1'>
                  <FaCheck className='text-Green300' />
                  <p className='border-dashed'>Priority Support</p>
                </li>
                <li className='flex items-center gap-1'>
                  <FaCheck className='text-Green300' />
                  <p className='border-dashed'>Connect with Dedicated Financial Advisor</p>
                </li>
                <li className='flex items-center gap-1'>
                  <FaCheck className='text-Green300' />
                  <p className='border-dashed'>Live Webinar & HI Academy</p>
                </li>
                <li className='flex items-center gap-1'>
                  <FaCheck className='text-Green300' />
                  <p className='border-dashed'>Unlimited Trade Set up</p>
                </li>
                <li className='flex items-center gap-1'>
                  <FaCheck className='text-Green300' />
                  <p className='border-dashed'>AI-Powered Market Predictions</p>
                </li>
                <li className='flex items-center gap-1'>
                  <FaCheck className='text-Green300' />
                  <p className='border-dashed'>Live Investors Dashboard</p>
                </li>
                <li className='flex items-center gap-1'>
                  <FaCheck className='text-Green300' />
                  <p className='border-dashed'>Portfolio Health Checkup</p>
                </li>
                <li className='flex items-center gap-1'>
                  <FaCheck className='text-Green300' />
                  <p className='border-dashed'>Connect with Trusted Brokers</p>
                </li>
                <li className='flex items-center gap-1'>
                  <FaCheck className='text-Green300' />
                  <p className='border-dashed'>Exclusive Investor Newsletters</p>
                </li>
                <li className='flex items-center gap-1'>
                  <FaCheck className='text-Green300' />
                  <p className='border-dashed'>Priority Alerts</p>
                </li>
                <li className='flex items-center gap-1'>
                  <FaCheck className='text-Green300' />
                  <p className='border-dashed'>Portfolio Diversification Tips</p>
                </li>
                <li className='flex items-center gap-1'>
                  <FaCheck className='text-Green300' />
                  <p className='border-dashed'>Quarterly Portfolio Performance Review</p>
                </li>
                <li className='flex items-center gap-1'>
                  <FaCheck className='text-Green300' />
                  <p className='border-dashed'>Advance Security</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

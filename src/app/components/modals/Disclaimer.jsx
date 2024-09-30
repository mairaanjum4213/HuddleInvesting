'use client'
import React, { useState } from 'react'
import Logo from '../../../../public/assets/image/FooterLogo.png'
import Image from 'next/image'
export default function Disclaimer() {
    const [toggle, setToggle] = useState(false)
    return (
        <>
            <div className={`${toggle && ('hidden')} max-h-screen  min-h-screen backdrop-blur-sm   bg-opacity-70 fixed top-0  w-full z-20 bg-black`}>
             
         
                <div className='bg-white absolute translate-y-[35vh] overflow-y-auto h-[35vh] xl:left-[16rem] xl:mx-0 mx-5 xl:w-[50rem] xl:pt-5 xl:px-10 xl:pb-10  p-5 rounded'>
               
            
               
                <div className='flex flex-col justify-center items-center   gap-1'>
          <Image
            className='w-[45px] h-[40px] '
            src={Logo}
            alt='Nav Logo image'
            height={400}
            width={400}
          />
          <p className='font-bold font-Poppins-Regular text-Green500'>Huddle Investing</p>
        </div>
               
               <h2 className='text-center text-Green500 mt-1 mb-4 font-light  font-Poppins-Regular font-bold text-sm'>
               Surplus/Deficit Disclaimer.

               </h2>
               
               
 <p className='text-justify my-2'>
    {`This website and its content, including business strategies, stock/forex market
 strategies, and marketing methods, are provided for informational purposes only. Results may
 vary and are not guaranteed. Tradeinvesta.com makes no express or implied guarantees that
 following the advice or content on this site will result in financial gain or improved profits.
 Outcomes depend on various factors, including the nature of your business, market conditions,
 individual experience, and other uncontrollable elements.`}
 </p>

 <p className='text-justify my-2'>
    {`The information on this website is general advice only. It does not take into account
 your financial objectives, situation or needs. We recommend you seek professional advice from
 an independent financial advisor before trading on or through our platforms.`}
 </p>


 <p className='text-justify my-2'>
    {`By using this website or its content, you assume all risks associated with applying the
 advice provided. You are solely responsible for any outcomes resulting from your actions,
 regardless of your interpretation of the information.
 Our company is not liable for the success or failure of your business based on the information
 provided. It is your responsibility to conduct due diligence and seek professional advice when
 making business, financial, or tax decisions.`}
 </p>

 <p className='text-justify my-2'>
    {` Wemake no guarantees of income or success from applying this information, which is intended
 solely for educational and informational purposes.`}
 </p>
                    <button
                        onClick={() => { setToggle(!toggle) }}
                        className="relative mt-5 flex h-[50px] w-40 items-center justify-center overflow-hidden bg-gray-700 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-Green475 before:duration-500 before:ease-out hover:shadow-Green475 hover:before:h-56 hover:before:w-56">
                        <span className="relative z-10">I Agree</span>
                    </button>
                </div>
            </div>
        </>
    )
}

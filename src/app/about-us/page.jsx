import React from 'react'
import Image from 'next/image'
export default function page() {


  
  const testimonials = [
    {
        name: "SWEETY SHAH",

        pfp: "/assets/image/team/SweetyShah.jpg",
        designation: "FOUNDER & CEO",
       
        message: "Sweety Shah, the visionary Founder and CEO of Huddle Investing, brings over a decade of experience in trading equities, forex, indices, and commodities. Her extensive expertise in price analysis distinguishes her as a leading consultant, offering unparalleled market insights and steering Huddle Investing strategic direction. Under her leadership, Huddle Investing is redefining the investment landscape, empowering both investors and financial experts to achieve success."
    },
    {
        name: "ARCHANA AKUL",

        pfp: "/assets/image/team/Archana.jpg",
        designation: "COO & HEAD OF SECURITY",
        
        message: "Archana Akul, the COO and Head of Security at Huddle Investing, combines her extensive operational expertise with a deep commitment to safeguarding the platform. With a strong background in financial technology and cybersecurity, Archana ensures that Huddle Investing runs smoothly and securely. Her leadership in streamlining operations and implementing robust security protocols is vital maintaining the trust and confidence of our users."
    },
    {
        name: " MEGHA KHARBANDA",
           pfp: "/assets/image/team/Megha.jpg",
        designation: "CO-FOUNDER & HEAD OF OPERATIONS",
       
        message: "Megha Kharbanda, Co-Founder and Head of Operations at Huddle Investing, plays a pivotal role in driving the companys success. With a wealth of experience in operational management and a keen eye for efficiency, Megha oversees the day-to-day operations, ensuring that the platform delivers a seamless experience for all users. Her strategic vision and dedication to operational excellence are integral to Huddle Investing growth and innovation."
    },
   
];

  return (
    <>
      <section
        className="relative homeHero font-Poppins-Regular  py-16 px-4 sm:px-8 lg:px-16 text-center">
        <div className="max-w-3xl mx-auto "
        >
          <div className="flex items-center justify-center mb-6">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-Green475 ml-3">
              About Us
            </h1>
          </div>
          <p className="text-lg sm:text-xl font-semibold text-white">
            Transform your trading with Huddle Investing. Expert insights, AI-powered strategies, and a collaborative community—all in one platform.
          </p>
          <p className="text-sm sm:text-base text-Green500 mt-4 font-Lexend-Regular">
            Revolutionizing the Investment Experience
          </p>
        </div>
      </section>
      <section className='grid md:grid-cols-2 grid-cols-1 md:gap-10 gap-5 md:p-10 p-5'>
        <div className='md:w-[80%]'>
          <h1 className='md:text-2xl text-xl font-extrabold text-Green500 font-Poppins-Regular  '>Our Vision</h1>
          <p className='text-Green475 mt-2 text-justify'>
            Our vision is to revolutionize the investment landscape by fostering a vibrant community where trust, efficiency, and innovation converge. We strive to create a platform where financial expertise meets cutting-edge technology, driving collaborative learning and exponential growth for all users.
          </p>
        </div>
        <div className='md:w-[80%]'>
          <h1 className='md:text-2xl text-xl font-extrabold text-Green500 font-Poppins-Regular  '>Our Mission</h1>
          <p className='text-Green475 mt-2 text-justify'>
            Huddle Investing is committed to transforming the way people invest by providing a user-friendly platform that simplifies and streamlines the trading process. Our mission is to empower both experts and investors with the tools they need to succeed, while continuously improving our offerings to meet the evolving needs of the financial market.
          </p>
        </div>
      </section>
      <section className='bg-Green3 my-5 md:my-10 md:p-10 p-5'>
        <h1 className='md:text-2xl text-xl font-extrabold text-Green500 font-Poppins-Regular  text-center '>Why Trade with Us?</h1>
        <p className='text-Green475 mt-2 md:text-center text-justify'>Choose Huddle Investing for an exceptional trading experience that puts your success first. Our platform supports all trading strategies, offers 24/5 trading across over 20,000 instruments, including forex, metals, shares, indices, and commodities, and ensures instant, nano-second execution on mobile platforms. With Huddle Investing, you{`'`}re not just trading—you{`'`}re part of a trusted, innovative community designed to help you thrive.</p>
      </section>


      <section className='md:p-10 p-5 my-5  md:my-10'>


      <div className=" grid md:grid-cols-2 grid-cols-1  py-5 md:p-10  md:gap-20 gap-14">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-Green3   transform transition duration-500    justify-self-center block  rounded-lg  p-5">
                            <div className="flex md:flex-row flex-col gap-5 md:items-center mb-3">
                                <Image
                                    className='rounded-full min-w-[96px] max-w-[96px] min-h-[96px] max-h-[96px] object-cover'
                                    src={testimonial.pfp}
                                    alt={`${testimonial.name}`}
                                    width={800}
                                    height={800}
                                />
                                <div className='flex flex-col gap-1 font-Poppins-Regular'>
                                    <p className=" text-Green450 font-bold max-w-[350px] break-all text-xl md:text-3xl"><strong>{testimonial.name}</strong></p>
                                    <p className="text-Green475 text-sm font-semibold">{testimonial.designation}</p>
                                </div>
                            </div>
                            <div className="font-Lexend-Regular">
                              
                                <p className="text-Green600 break-all">{`"${testimonial.message}"`}</p>
                            </div>
                        </div>
                    ))}
                </div>

      </section>
    </>
  )
}

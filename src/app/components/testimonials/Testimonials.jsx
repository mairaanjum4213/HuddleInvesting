import React from 'react'
import Image from 'next/image';
export default function Testimonials() {
    const testimonials = [
        {
            name: "Jane S. ",
            pfp: "/assets/image/testimonials/Sara.png",
            designation: "Beginer Trader",
            subject: "Exceptional Service",
            message: "The support and resources provided by this platform have been outstanding. It has significantly enhanced my trading strategy."
        },
        {
            name: "John Smith",
            pfp: "/assets/image/testimonials/James.png",
            designation: "Financial Analyst",
            subject: "Highly Recommended",
            message: "This platform offers top-notch insights and tools that are crucial for successful investing. I highly recommend it to anyone serious about their financial growth."
        },
        {
            name: "Emily Johnson",
            pfp: "/assets/image/testimonials/Sara.png",
            designation: "Investment Advisor",
            subject: "A Game-Changer",
            message: "I've seen remarkable improvements in my portfolio since using this platform. The expert-driven insights are incredibly valuable."
        },
        {
            name: "Michael Brown",
            pfp: "/assets/image/testimonials/Sara.png",
            designation: "Entrepreneur",
            subject: "Innovative and Effective",
            message: "The technology and community-driven approach have provided me with a unique edge in the market. It's been a game-changer for my investment strategy."
        }
    ];
    return (
        <>
            <div className='md:px-10 p-5 bg-[#F4FFF4]'>
              
              
                <h1 className='font-bold md:text-4xl  text-Green600 text-2xl'>
                    What Our Clients Have to Say?
                </h1>
                <div className=" grid md:grid-cols-2 grid-cols-1  py-5 md:p-10  md:gap-20 gap-14">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-white   transform transition duration-500 hover:scale-[1.0031] hover:shadow-lg   justify-self-center block  rounded-lg shadow-sm p-5">
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
                                <p className="font-semibold break-all text-Green500"><>{`"${testimonial.subject}"`}</></p>
                                <p className="text-Green600 break-all">{`"${testimonial.message}"`}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

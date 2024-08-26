import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function HeroSection() {
  return (
    <>
      <section
        className="relative homeHero font-Poppins-Regular  py-16 px-4 sm:px-8 lg:px-16 text-center">
        <div className="max-w-3xl mx-auto "
        >
          <div className="flex items-center justify-center mb-6">
            <Image
              src="/assets/image/FooterLogo.png"
              alt="Logo"
              className="w-12 h-12"
              width={500}
              height={400}
            />
            <h1 className="text-3xl sm:text-4xl font-extrabold text-Green475 ml-3">
              Huddle Investing
            </h1>
          </div>
          <p className="text-lg sm:text-xl font-semibold text-white">
            Empowering Your Financial Journey: Where Expert Insights and Collaborative Innovation Converge
          </p>
          <p className="text-sm sm:text-base text-Green500 mt-4 font-Lexend-Regular">
            Revolutionizing the Investment Experience
          </p>
          <div className="flex justify-center mt-5">
            <Link href='/contact-us' className="relative  flex h-[50px] w-40 items-center justify-center overflow-hidden bg-gray-800 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-Green475 before:duration-500 before:ease-out hover:shadow-Green475 hover:before:h-56 hover:before:w-56">
              <span className="relative z-10">Get Started</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

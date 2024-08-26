import React from 'react'
import Image from 'next/image'
export default function HeroSection() {
  return (
  <>
  
  
<section
className="relative homeHero font-Poppins-Regular  py-16 px-4 sm:px-8 lg:px-16 text-center">
      <div className="max-w-3xl mx-auto "
     >
        <div className="flex items-center justify-center mb-6">
          <img
            src="/assets/image/FooterLogo.png" 
            alt="Logo"
            className="w-12 h-12"
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
        <button className="mt-8 before:ease relative h-12 w-40 overflow-hidden border border-Green300 bg-Green300 text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-Green300 hover:before:-translate-x-40">
          Get Started
        </button>
      </div>
    </section>
  </>
  )
}

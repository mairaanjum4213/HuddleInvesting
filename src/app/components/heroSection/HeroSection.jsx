import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function HeroSection() {
  return (
    <>
      <section
        className="relative homeHero font-Poppins-Regular py-16 px-4 sm:px-8 lg:px-16 text-center">
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
          <p className="text-lg md:text-xl font-semibold text-Gold">
            Empowering Your Financial Journey: Where Expert Insights and Collaborative Innovation Converge
          </p>
          <main class="flex w-full justify-center  text-sm sm:text-base text-Green500 mt-4 font-Lexend-Regular">
            <p></p>
            <section class="animation text-white ">
              <div class="first "><div> Revolutionizing trading with intuitive, innovative tools</div></div>
              <div class="second pt-1"><div> Revolutionizing investor access to data with precision</div></div>
              {/* <div class="third !ml-[8px] pt-1"><div>Revolutionizing market strategies through smarter insights</div></div> */}
              <div class="third !ml-[8px] pt-1"><div>{`Connecting with Canada's Most Reliable Financial Partners`}</div></div>
            </section>
          </main>
          <div className="flex justify-center mt-5">
            <Link href='/contact-us' className="relative  flex h-[50px] w-40 items-center justify-center overflow-hidden bg-Green475 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-Green475 before:duration-500 before:ease-out hover:shadow-Green475 hover:before:h-56 hover:before:w-56">
              <span className="relative z-10">Get Started</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

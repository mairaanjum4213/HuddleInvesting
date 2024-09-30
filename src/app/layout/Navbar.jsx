'use client'
import React from 'react'
import Link from 'next/link';
import Logo from '../../../public/assets/image/FooterLogo.png'
import Image from 'next/image';
export default function Navbar() {
  const Links = [
    {
      Name: 'Home',
      Link: '/'
    },
    {
      Name: 'About',
      Link: '/about-us'
    },
    {
      Name: 'Services',
      Link: '/our-services'
    },
    {
      Name: 'Logo',
      Link: '/economic-calendar'
    },
    {
      Name: 'Economic Calendar',
      Link: '/economic-calendar'
    },
    {
      Name: 'Contact',
      Link: '/contact-us'
    },
  ]
  const MobileLinks = [
    {
      Name: 'Home',
      Link: '/'
    },
    {
      Name: 'About',
      Link: '/about-us'
    },
    {
      Name: 'Services',
      Link: '/our-services'
    },
    {
      Name: 'Economic Calendar',
      Link: '/economic-calendar'
    },
    {
      Name: 'Contact',
      Link: '/contact-us'
    },
  ]
  return (
    <>






    
      <section className='md:hidden flex flex-col justify-center bg-Green100 md:px-10 items-center px-5 '>
        <div className='flex flex-col justify-center items-center pt-3 mb-2 gap-1'>
          <Image
            className='w-[45px] h-[40px] '
            src={Logo}
            alt='Nav Logo image'
            height={400}
            width={400}
          />
          <p className='font-bold font-Poppins-Regular text-Green500'>Huddle Investing</p>
        </div>
        <div className='flex flex-row justify-center items-center flex-wrap  pb-4 gap-2'>
          {MobileLinks.map((linkItem, index) => (
            <div
              key={index}
            >
              <>
                <div className="relative h-fit  text-Green500 font-Poppins-Regular w-fit block 
                     after:block after:content-[''] after:absolute after:h-[1px] after:bg-Green500 
                     after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition 
                     after:duration-300 after:origin-left">
                  <Link
                    className=''
                    href={linkItem.Link}>
                    <p className="font-extralight focus:font-semibold active:font-semibold">
                      {linkItem.Name}
                    </p>
                  </Link>
                </div>
              </>
            </div>
          ))}
        </div>
      </section>
      <section className='md:flex hidden bg-Green100 md:px-10 py-2  flex-row justify-center gap-5 items-center px-5 '>
        {Links.map((linkItem, index) => (
          <div
            key={index}
          >
            {linkItem.Name === 'Logo' ? (
              <>
                <div className='flex flex-col justify-center items-center gap-1'>
                  <Image
                    className='w-[45px] h-[40px] '
                    src={Logo}
                    alt='Nav Logo image'
                    height={400}
                    width={400}
                  />
                  <p className='font-bold font-Poppins-Regular text-Green500'>Huddle Investing</p>
                </div>
              </>
            ) : (
              <>
                <div className="relative  my-3 text-Green500 font-Poppins-Regular w-fit block 
                     after:block after:content-[''] after:absolute after:h-[1px] after:bg-Green500 
                     after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition 
                     after:duration-300 after:origin-left">
                  <Link
                    className=''
                    href={linkItem.Link}>
                    <p className="font-extralight focus:font-semibold active:font-semibold">
                      {linkItem.Name}
                    </p>
                  </Link>
                </div>
              </>
            )}
          </div>
        ))}
      </section>
      <div className="w-full
             p-5
             overflow-hidden bg-blue-500">
        <div className="animate-scroll whitespace-nowrap">
          <span className="text-white text-lg font-bold mr-8">
            Web Development In Progress
          </span>
          <span className="text-white text-lg font-bold mr-8">
            Web Development In Progress
          </span>
          <span className="text-white text-lg font-bold mr-8">
            Web Development In Progress
          </span>
          <span className="text-white text-lg font-bold mr-8">
            Web Development In Progress
          </span>
          <span className="text-white text-lg font-bold mr-8">
            Web Development In Progress
          </span>
          <span className="text-white text-lg font-bold mr-8">
            Web Development In Progress
          </span>
          <span className="text-white text-lg font-bold mr-8">
            Web Development In Progress
          </span>
          <span className="text-white text-lg font-bold mr-8">
            Web Development In Progress
          </span>
          <span className="text-white text-lg font-bold mr-8">
            Web Development In Progress
          </span>  <span className="text-white text-lg font-bold mr-8">
            Web Development In Progress
          </span>
          <span className="text-white text-lg font-bold mr-8">
            Web Development In Progress
          </span>  <span className="text-white text-lg font-bold mr-8">
            Web Development In Progress
          </span>  <span className="text-white text-lg font-bold mr-8">
            Web Development In Progress
          </span>  <span className="text-white text-lg font-bold mr-8">
            Web Development In Progress
          </span>
          <span className="text-white text-lg font-bold mr-8">
            Web Development In Progress
          </span>
        </div>
      </div>
    </>
  )
}

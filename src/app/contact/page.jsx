'use client'
import React from 'react';
import { IoLogoFacebook } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX, BsWhatsapp } from "react-icons/bs";

export default function Page() {
  const whatsappNumber = '923075011252'; // Replace with your WhatsApp number (without the '+')
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  const handleWhatsAppClick = () => {
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      <div className='grid md:grid-cols-2 grid-cols-1 my-10 md:p-10 p-5'>
        <section>
          <div className='flex flex-col gap-4 '>
            <div>
              <h1 className='md:text-xl text-lg font-extrabold text-Green475 font-Poppins-Regular'>Let{`'`}s Talk</h1>
              <p className='text-Green475 md:w-[90%]'>
                Elevate your financial future with Huddle Investing—let{`'`}s grow your wealth together. Need expert guidance? We{`'`}re here to help.
              </p>
            </div>
            <div>
              <h1 className='md:text-xl text-lg font-extrabold text-Green475 font-Poppins-Regular'>Email</h1>
              <p className='text-Green475 md:w-[90%]'>
                info@huddleinvesting.ca
              </p>
            </div>
            <div>
              <h1 className='md:text-xl text-lg font-extrabold text-Green475 font-Poppins-Regular'>Phone</h1>
              <p className='text-Green475 md:w-[90%]'>
                +1 (647) 676-3524
              </p>
            </div>
            <div>
              <h1 className='md:text-xl text-lg font-extrabold text-Green475 font-Poppins-Regular'>Socials</h1>
              <div className="flex gap-3 mt-2 items-center">
                <a href="https://www.facebook.com/BMYHealthPak" target="_blank" rel="noopener noreferrer">
                  <IoLogoFacebook className="text-Green475 text-3xl" />
                </a>
                <a href="https://www.instagram.com/bmyhealthpak/?igsh=MXQ0aGt5OXMzbmU5MA%3D%3D" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="text-Green475 text-2xl" />
                </a>
                <a href="https://www.linkedin.com/company/bmy-health/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="text-Green475 text-2xl" />
                </a>
                <a href="https://twitter.com/bmyhealth" target="_blank" rel="noopener noreferrer">
                  <BsTwitterX className="text-Green475 text-2xl ml-1" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section>

          <p className='text-center text-neutral-400 my-5 font-Lexend-Regular'>OR</p>

          <h1 className='md:text-4xl text-xl font-extrabold text-Green475 font-Poppins-Regular'>WhatsApp</h1>

          <p className='text-Green475 font-Lexend-Regular'>Join Our WhatsApp Community</p>

          <button
            className="mt-5 relative h-[3.5rem] w-40 overflow-hidden border border-Green300 bg-Green300 text-white transition-all before:absolute before:right-0 before:top-0 before:h-[3.5rem] before:w-6 before:translate-x-[3.5rem] before:rotate-6 before:bg-white before:opacity-10 before:duration-700 font-Poppins-Regular hover:before:-translate-x-40"
            onClick={handleWhatsAppClick}
          >
            <span className='flex items-center justify-start p-2 gap-2'>
              <BsWhatsapp className='text-3xl' />
              Join Now
            </span>
          </button>

        </section>
      </div>
    </>
  );
}

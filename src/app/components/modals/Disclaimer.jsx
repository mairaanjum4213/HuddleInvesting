'use client'
import React, { useState } from 'react'
export default function Disclaimer() {
    const [toggle, setToggle] = useState(false)
    return (
        <>
            <div className={`${toggle && ('hidden')} max-h-screen  min-h-screen backdrop-blur-sm   bg-opacity-70 fixed top-0  w-full z-20 bg-black`}>
                <div className='bg-white absolute translate-y-[35vh] overflow-y-auto h-[35vh] xl:left-[16rem] xl:mx-0 mx-5 xl:w-[50rem] xl:p-10 p-5 rounded'>
                    <h1 className='text-center font-Poppins-Regular'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam minima ipsum quibusdam consectetur ut dolores, sit molestias quae tenetur officiis architecto, eaque repellendus quia sed excepturi? Dolorem deleniti consectetur temporibus.
                    </h1>
                    <button
                        onClick={() => { setToggle(!toggle) }}
                        className="relative mt-5 flex h-[50px] w-40 items-center justify-center overflow-hidden bg-gray-800 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-Green475 before:duration-500 before:ease-out hover:shadow-Green475 hover:before:h-56 hover:before:w-56">
                        <span className="relative z-10">I Agree</span>
                    </button>
                </div>
            </div>
        </>
    )
}

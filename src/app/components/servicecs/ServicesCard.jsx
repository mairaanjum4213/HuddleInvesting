import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

// Define an array of property objects (if needed)
const properties = [
    { src: "/assets/image/our-services/CommunityTrading.jpg", alt: "Random 1" },
    { src: "/assets/image/our-services/CopyTrading.jpg", alt: "Random 2" },
    { src: "/assets/image/our-services/liveDahboard.jpg", alt: "Random 3" },
    { src: "/assets/image/our-services/Portfolio.jpg", alt: "Random 4" },
    { src: "/assets/image/our-services/alerts.jpg", alt: "Random 5" },
];

export default function ServicesCard() {
    return (
        <div className="py-5    mt-10 bg-Green3 h-fit container-fluid relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -start">
                <div className="relative flex flex-col items-center justify-center lg:flex-row md:flex-row lg:justify-center">
                    <h2 className="text-xl lg:text-3xl xl:text-4xl text-Green300 text-center lg:text-center mr-4 lg:mb-0 tracking-widest font-Poppins-Regular font-bold">
                        FEATURED
                    </h2>
                    <h2 className="text-xl lg:text-3xl xl:text-4xl text-gray-800 text-center lg:text-center whitespace-nowrap tracking-widest font-Poppins-Regular font-bold">
                        SERVICES
                    </h2>
                </div>
            </div>
            <section className="py-10 ">
                <div className="grid grid-cols-1 lg:px-20 lg:grid-cols-4 gap-4 max-w-screen-xl mx-auto p-4">
                    {properties.map((property, index) => (
                        <div key={index} className={`relative ${index === 0 ? 'col-span-2 row-span-2' : ''} group overflow-hidden rounded-lg`}>
                            <Image
                                height={1000}
                                width={1000}
                                src={property.src}
                                alt={property.alt}
                                className="w-full border h-full object-cover rounded-lg transition-transform duration-300 ease-in-out transform group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center break-all justify-center  opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">


                                {index === 0 &&
                                    (<p
                                        className="font-bold  md:text-xl mb-5 uppercase text-white font-Poppins-Regular">Community trading</p>)}

                                {index === 1 &&
                                    (<p
                                        className="font-bold  md:text-base text-sm mb-2 uppercase text-white font-Poppins-Regular">Copy trading</p>)}


{index === 2 &&
                                    (<p
                                        className="font-bold  md:text-base text-sm mb-2 uppercase text-white font-Poppins-Regular">Live Dashboard</p>)}



                                        
{index === 3 &&
                                    (<p
                                        className="font-bold  md:text-base text-sm mb-2 uppercase text-white font-Poppins-Regular"> Portfolio Health Checkup</p>)}


                                        
{index === 4 &&
                                    (<p
                                        className="font-bold  md:text-base text-sm mb-2 uppercase text-white font-Poppins-Regular">Unlimited Trade Set up

                                        </p>)}
                                <Link href='/our-services' className="text-Green500 text-sm  bg-Green3 rounded p-2 font-semibold">View Details</Link>
                            </div>
                        </div>
                    ))}



                    

                    
                </div>
            </section>
            <Link href='/property-search?type=Commercial' className="absolute bottom-[-0.8rem] right-0 transform group">
                <button className="flex items-center justify-center lg:justify-center px-5">
                    <span className="font-bold text-md md:text-xl border-b border-transparent mx-auto group-hover:border-b group-hover:border-stone-400 duration-700">
                        View More
                    </span>
                    <FaArrowRight className="text-darkGolden ml-1 group-hover:translate-x-[0.3rem] duration-700" />
                </button>
            </Link>
        </div>
    );
}

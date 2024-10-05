'use client'
import React, { useState } from 'react';
import { FaAngleDown } from "react-icons/fa";
import  { Toaster } from 'react-hot-toast';
import Link from 'next/link';
export default function Page() {
  const jobListings = [
    { title: 'Freelance Financial Advisor for Huddle Investing', location: 'Remote', type: 'Full Time', category: 'Advisory' },
    { title: 'Customer Support Representative for Huddle Investing', location: 'Remote', type: 'Full Time', category: 'Supporter' },
    { title: ' Tech Support Specialist for Huddle Investing', location: 'On-site', type: 'Part Time', category: 'Tech Staff' },
    { title: 'Marketing Executive for Huddle Investing', location: 'Hybrid', type: 'Full Time', category: 'Marketing' },
    { title: 'App Developer', location: 'Remote', type: 'Full Time', category: 'IT' },
    { title: 'Business Development Officer for Huddle Investing', location: 'Remote', type: 'Full Time', category: 'Analytics' },
    { title: 'Financial Advisor', location: 'Remote', type: 'Full Time', category: 'Advisory' },
  ];
  const [openIndex, setOpenIndex] = useState(null);
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Toaster />
      <section
        className="relative homeHero3 font-Poppins-Regular py-28 px-4 sm:px-8 lg:px-16 text-left">
        <div className="max-w-2xl mx-auto lg:mx-0 relative z-10"
        >
          <p className=" pb-2 text-2xl uppercase font-bold  text-Green500">
            careers          </p>
          <p className="pb-10 font-semibold text-Green500">
            Empowering Your Financial Journey: Where Expert Insights and Collaborative Innovation Converge
          </p>
          <Link href="#carrers" className='flex items-center '>
            <FaAngleDown className='text-4xl p-2 rounded-full w-fit bg-Green500 text-white' />
          </Link>
        </div>
      </section>
      
      <div id='carrers' className="py-5 mt-10 bg-Green3 h-fit container-fluid relative">
      
      <h2 className="text-xl lg:text-2xl xl:text-3xl text-gray-800 md:px-10 px-5 whitespace-nowrap tracking-widest font-Poppins-Regular font-bold">
              Careers
            </h2>
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -start">
          <div className="relative flex flex-col items-center justify-center lg:flex-row md:flex-row lg:justify-center">
            <h2 className="text-xl lg:text-3xl xl:text-4xl text-Green300 text-center lg:text-center lg:mb-0 tracking-widest font-Poppins-Regular font-bold">
            </h2>
           
          </div>
        </div>
        <div className="space-y-4 my-5 md:mx-10 mx-5  ">
          {jobListings.map((job, index) => (
            <div key={index} className="border rounded-lg p-4">
              <div className="flex justify-between items-center">
                <div>
                  <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full">
                    {job.category.toUpperCase()}
                  </span>
                  <p className="text-gray-800 mt-2 text-lg font-semibold">
                    {job.title}
                  </p>
                  <p className="text-gray-500 mt-2  text-sm font-semibold">
                    {job.location} • {job.type}
                  </p>
                </div>
                <button
                  onClick={() => toggleAccordion(index)}
                  className="bg-green-500 text-white p-2 rounded-full"
                >
                  <FaAngleDown className={`transform transition-transform ${openIndex === index ? 'rotate-90' : ''}`} />
                </button>
              </div>
              {openIndex === index && (
                <div className="mt-4">
                  {index === 6 && (
                    <>
                      <div className="">
                        <hr className='mb-5' />
                        <p className="text-gray-700">
                          Huddle Investing is seeking a passionate and knowledgeable Financial Advisor to join our team. In this role, you will provide expert financial guidance to clients, helping them navigate their investment journeys and achieve their financial goals.
                        </p>
                        <h3 className="text-xl font-semibold my-2">Location:</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-600">
                          Remote - (Toronto)
                        </ul>
                        <h3 className="text-xl font-semibold my-2">Seats:</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-600">
                          2 Openings
                        </ul>
                        <h3 className="text-xl font-semibold my-2">Key Responsibilities:</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-600">
                          <li>Conduct comprehensive financial assessments for clients.</li>
                          <li>Develop tailored investment strategies to meet client goals.</li>
                          <li>Monitor and manage client portfolios, providing regular updates and performance analysis.</li>
                          <li>Educate clients on investment options and market trends.</li>
                          <li>Foster strong relationships with clients, ensuring their needs are met and concerns addressed.</li>
                        </ul>
                        <h3 className="text-xl font-semibold my-2">Qualifications:</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-600">
                          <li>Proven experience as a Financial Advisor or similar role.</li>
                          <li>Strong knowledge of investment products, financial markets, and portfolio management.</li>
                          <li>Excellent communication and interpersonal skills.</li>
                          <li>Relevant certifications (e.g., CFP, CFA) are preferred.</li>
                          <li>Ability to work independently and as part of a team.</li>
                        </ul>
                      </div>
                    </>)}
                  {index === 5 && (
                    <>
                      <div className="">
                        <hr className="mb-5" />
                        <p className="text-gray-700">
                          {`Huddle Investing is seeking a dynamic and results-driven Business Development Officer to expand our client base and drive B2B partnerships. In this role, you will identify business opportunities, develop strategic partnerships, and help grow Huddle Investing's presence in Canada’s financial market. You will work closely with leadership to shape and execute business growth strategies that align with the company’s goals.`}
                        </p>
                        <h3 className="text-xl font-semibold my-2">Location:</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-600">
                          <li>Remote - (Toronto)</li>
                        </ul>
                        <h3 className="text-xl font-semibold my-2">Seats:</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-600">
                          <li>1 Opening</li>
                        </ul>
                        <h3 className="text-xl font-semibold my-2">Key Responsibilities:</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-600">
                          <li>Identify and pursue new business opportunities, partnerships, and collaborations with financial institutions, advisors, and B2B clients.</li>
                          <li>Develop and execute a business development strategy to drive revenue and market expansion.</li>
                          <li>{`Establish relationships with potential clients and investors, showcasing Huddle Investing's value proposition.`}</li>
                          <li>Negotiate and close deals to onboard B2B clients onto the platform.</li>
                          <li>Analyze market trends to identify growth areas and opportunities for expansion.</li>
                        </ul>
                        <h3 className="text-xl font-semibold my-2">Qualifications:</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-600">
                          <li>Proven experience in business development, sales, or partnerships, preferably in fintech, financial services, or tech industries.</li>
                          <li>Strong networking and relationship-building skills.</li>
                          <li>Ability to develop and present business proposals and negotiate contracts.</li>
                          <li>Understanding of financial markets and investment products.</li>
                          <li>Excellent communication and negotiation skills.</li>
                          <li>Ability to work independently and as part of a collaborative team.</li>
                        </ul>
                      </div>
                    </>
                  )}
                  {index === 0 && (
                    <>
                      <div className="">
                        <hr className="mb-5" />
                        <p className="text-gray-700">
                          {`Huddle Investing is seeking experienced and certified Freelance Financial Advisors across Canada to join our growing network. As a Freelance Financial Advisor, you will provide personalized investment advice, guide clients on their financial journey, and help them achieve their investment goals using the Huddle Investing platform. You’ll have the flexibility to work remotely and manage your own client portfolio while benefiting from Huddle Investing’s resources and growing community of investors.`}
                        </p>
                        <h3 className="text-xl font-semibold my-2">Location:</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-600">
                          <li>Remote - Canada-wide</li>
                        </ul>
                        <h3 className="text-xl font-semibold my-2">Seats:</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-600">
                          <li>Multiple Openings</li>
                        </ul>
                        <h3 className="text-xl font-semibold my-2">Key Responsibilities:</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-600">
                          <li>Offer expert financial advice and tailored investment strategies to clients across Canada.</li>
                          <li>Conduct portfolio health checks and recommend appropriate diversification strategies.</li>
                          <li>Help clients maximize returns with tax-efficient investment options and risk management techniques.</li>
                          <li>Participate in webinars, live discussions, and investor Q&A sessions on the Huddle platform.</li>
                          <li>{`Collaborate with Huddle’s in-house financial experts to support clients with the latest market insights.`}</li>
                        </ul>
                        <h3 className="text-xl font-semibold my-2">Qualifications:</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-600">
                          <li>Certified financial advisor (CFA, CFP, or equivalent) with experience in investment planning and portfolio management.</li>
                          <li>Strong understanding of Canadian financial regulations and tax-efficient strategies.</li>
                          <li>Proven track record of advising clients and managing diverse investment portfolios.</li>
                          <li>Ability to work independently, remotely, and on a flexible schedule.</li>
                          <li>Excellent communication skills with a client-centric approach to advisory services.</li>
                        </ul>
                      </div>
                    </>
                  )}
                  {index === 1 && (
                    <>
                      <div className="">
                        <hr className="mb-5" />
                        <p className="text-gray-700">
                          {`Huddle Investing is seeking a Customer Support Representative to assist our users and ensure they have a seamless experience on our platform. In this role, you will address client inquiries, resolve issues, and provide general support to help investors navigate the app’s features. You will also play a key role in maintaining high levels of customer satisfaction by offering fast, friendly, and professional assistance.`}
                        </p>
                        <h3 className="text-xl font-semibold my-2">Location:</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-600">
                          <li>Remote - (Canada)</li>
                        </ul>
                        <h3 className="text-xl font-semibold my-2">Seats:</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-600">
                          <li>1 Opening</li>
                        </ul>
                        <h3 className="text-xl font-semibold my-2">Key Responsibilities:</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-600">
                          <li>Respond to customer inquiries via email, chat, and phone.</li>
                          <li>Assist users with account setup, navigation, and general app-related questions.</li>
                          <li>Troubleshoot user issues and provide clear resolutions or escalate to relevant teams when necessary.</li>
                          <li>Maintain a record of customer interactions, ensuring timely follow-up and issue resolution.</li>
                          <li>Collaborate with internal teams to ensure consistent and effective support.</li>
                        </ul>
                        <h3 className="text-xl font-semibold my-2">Qualifications:</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-600">
                          <li>Prior experience in customer support or client services, preferably in fintech or app-based platforms.</li>
                          <li>Strong communication skills and a customer-first mindset.</li>
                          <li>Ability to quickly grasp new technologies and explain them to users.</li>
                          <li>Problem-solving skills and patience when handling client concerns.</li>
                          <li>Ability to work in a fast-paced, dynamic startup environment.</li>
                        </ul>
                      </div>
                    </>
                  )}
                  {index === 2 && (
                    <>
                      <div className="">
                        <hr className="mb-5" />
                        <p className="text-gray-700">
                          {`Huddle Investing is seeking a dedicated Tech Support Specialist to provide exceptional technical assistance to our users. In this role, you will troubleshoot and resolve app-related issues, guide users through technical challenges, and ensure smooth platform operation. You will also work closely with our development team to identify and fix bugs, enhancing overall user satisfaction.`}
                        </p>
                        <h3 className="text-xl font-semibold my-2">Location:</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-600">
                          <li>Remote - (Canada)</li>
                        </ul>
                        <h3 className="text-xl font-semibold my-2">Seats:</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-600">
                          <li>1 Opening</li>
                        </ul>
                        <h3 className="text-xl font-semibold my-2">Key Responsibilities:</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-600">
                          <li>Provide timely and effective technical support to users via chat, email, and phone.</li>
                          <li>Diagnose and troubleshoot app-related issues, offering step-by-step guidance.</li>
                          <li>Document technical issues and escalate complex problems to the development team.</li>
                          <li>Assist in testing new features and updates to ensure a smooth user experience.</li>
                          <li>Maintain a knowledge base of common technical solutions and FAQs.</li>
                        </ul>
                        <h3 className="text-xl font-semibold my-2">Qualifications:</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-600">
                          <li>Previous experience in tech support, preferably in a fintech or app-based environment.</li>
                          <li>Strong problem-solving skills with attention to detail.</li>
                          <li>Excellent communication skills to guide users through technical solutions.</li>
                          <li>Familiarity with mobile and web-based applications.</li>
                          <li>Ability to work collaboratively in a fast-paced startup environment.</li>
                        </ul>
                      </div>
                    </>
                  )}
                  {index === 3 && (
                    <>
                      <div className="">
                        <hr className="mb-5" />
                        <p className="text-gray-700">
                          {`We are seeking a dynamic and results-driven Marketing Executive to join the Huddle Investing team. In this role, you will develop and execute marketing campaigns that promote our brand, increase customer engagement, and drive growth. You will collaborate with cross-functional teams to create compelling content, manage social media, and optimize digital strategies to enhance our presence in the Canadian financial market.`}
                        </p>
                        <h3 className="text-xl font-semibold my-2">Location:</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-600">
                          <li>Remote - (Canada)</li>
                        </ul>
                        <h3 className="text-xl font-semibold my-2">Seats:</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-600">
                          <li>1 Opening</li>
                        </ul>
                        <h3 className="text-xl font-semibold my-2">Key Responsibilities:</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-600">
                          <li>Plan and execute marketing strategies to build brand awareness and increase user engagement.</li>
                          <li>Manage social media platforms, creating and scheduling content.</li>
                          <li>Develop and implement digital marketing campaigns, including SEO, email marketing, and paid advertising.</li>
                          <li>Analyze campaign performance and provide data-driven insights for improvement.</li>
                          <li>Coordinate with the sales and product development teams to ensure alignment in messaging and objectives.</li>
                        </ul>
                        <h3 className="text-xl font-semibold my-2">Qualifications:</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-600">
                          <li>Proven experience in marketing, particularly in digital and content marketing.</li>
                          <li>Strong communication and project management skills.</li>
                          <li>Familiarity with financial markets or fintech is a plus.</li>
                          <li>Ability to work in a fast-paced startup environment.</li>
                        </ul>
                      </div>
                    </>
                  )}
                  {index === 4 && (
                    <>
                      <div className="">
                        <hr className="mb-5" />
                        <p className="text-gray-700">
                          {`We are seeking a skilled App Developer to join Huddle Investing and help build and launch our innovative investment app. You will be responsible for developing and maintaining the app's functionality, ensuring seamless user experience, integrating AI-powered market insights, and collaborating with financial experts. The ideal candidate will have experience in mobile app development, knowledge of financial technologies, and a passion for delivering user-centric solutions.`}
                        </p>
                        <h3 className="text-xl font-semibold my-2">Location:</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-600">
                          <li>Hybrid/Remote (within Canada)</li>
                        </ul>
                        <h3 className="text-xl font-semibold my-2">Seats:</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-600">
                          <li>1 Opening</li>
                        </ul>
                        <h3 className="text-xl font-semibold my-2">Key Responsibilities:</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-600">
                          <li>Design, develop, and maintain the Huddle Investing app.</li>
                          <li>Integrate AI-driven tools, dashboards, and portfolio management features.</li>
                          <li>Collaborate with financial analysts, advisors, and marketing teams.</li>
                          <li>Ensure top-notch security, performance, and scalability.</li>
                          <li>Debug and optimize the app for enhanced user experience.</li>
                        </ul>
                        <h3 className="text-xl font-semibold my-2">Qualifications:</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-600">
                          <li>Proven experience in iOS/Android app development.</li>
                          <li>Familiarity with financial and investment tools.</li>
                          <li>Strong problem-solving skills and attention to detail.</li>
                          <li>Knowledge of API integration and mobile security standards.</li>
                        </ul>
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

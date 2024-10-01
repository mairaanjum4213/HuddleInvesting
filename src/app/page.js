'use client'
import React, { useState, useEffect } from 'react'
import HeroSection from './components/heroSection/HeroSection.jsx'
import Plans from './components/plans/Plans.jsx'
import Offer from './components/offer/Offer.jsx'
import ServicesCard from './components/servicecs/ServicesCard.jsx'
import BusinessModel from './components/businessModel/Model.jsx'
import Disclaimer from './components/modals/Disclaimer.jsx'

export default function Page() {
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  useEffect(() => {
    const hasSeenDisclaimer = sessionStorage.getItem('hasSeenDisclaimer');
    if (!hasSeenDisclaimer) {
      setShowDisclaimer(true);
      sessionStorage.setItem('hasSeenDisclaimer', 'true');
    }
  }, []);
  return (
    <div>
      {showDisclaimer && (
        <>
          <Disclaimer />
        </>
      )}
      <HeroSection /> 
      
      
      <Offer />
 
  
    



      <ServicesCard/>

      <BusinessModel />
      <Plans />
      {/* <Testimonials/> */}
    </div>
  )
}

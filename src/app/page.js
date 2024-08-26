import React from 'react'
import HeroSection from './components/heroSection/HeroSection.jsx'
import Testimonials from './components/testimonials/Testimonials'
import Plans from './components/plans/Plans.jsx'
import Offer from './components/offer/Offer.jsx'
import Services from './components/servicecs/Services.jsx'
import BusinessModel from './components/businessModel/Model.jsx'

export default function page() {
  return (
    <div>
<HeroSection/>
<Offer/>
<Services/>
<BusinessModel/>
<Plans/>
{/* <Testimonials/> */}
     
    </div>
  )
}

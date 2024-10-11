import React from 'react'

import Awards from './Awards'
import Hero from './Hero'
import Stats from './Stats'
import Pricing from './Pricing'
import Education from './Education'

import Navbar from '../Navbar'
import OpenAccount from '../OpenAccount'
import Footer from '../Footer'
function HomePage() {
  return (
  <>
   <Navbar />
   <Hero />
   <Awards />
   <Stats />
   <Pricing />
   <Education />
   <OpenAccount />
   <Footer />
  </>
  )
}

export default HomePage
import React from 'react'
import Carousel from '../components/Carousel'
import ScrollToTop from '../components/ScrollToTop'
import Footer from '../components/Footer'
export default function Home2() {
  return (
    <> <main>
          <>
    <h2>Hotel</h2>
    <div className='carousel'>
    <Carousel/>
    </div>
    <h2>City</h2>
    <div className='carousel' >
    <Carousel/>
    </div>
    </>
    
    <ScrollToTop/>
    </main>
    <Footer/>
    </>
   
  )
}

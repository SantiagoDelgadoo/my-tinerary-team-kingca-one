import React from 'react'
import Carousel from '../components/Carousel'
import ScrollToTop from '../components/ScrollToTop'
import Footer from '../components/Footer'
import cities from '../data/cities'
import places from '../data/places'
export default function Home2() {
  return (
    <> <main>
          <>
    <h2>Hotel</h2>
    <div className='carousel'>
    <Carousel image={places[1].photo[0]}/>
    </div>
    <h2>City</h2>
    <div className='carousel' >
    <Carousel image={cities[1].photo}/>
    </div>
    </>
    <ScrollToTop/>
    </main>
    <Footer/>
    </>
   
  )
}

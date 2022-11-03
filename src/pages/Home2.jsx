import React from 'react'
import Carousel from '../components/Carousel'
import ScrollToTop from '../components/ScrollToTop'
import Footer from '../components/Footer'
import cities from '../data/cities'
import places from '../data/places'
import Arrow from '../components/Arrow'
import { useState } from 'react'
export default function Home2() {
  let [numberOfChange,setNumberOfChange]=useState(0)
  let next =() =>{
    if(numberOfChange<places.length-1){
      setNumberOfChange(numberOfChange+1)
    }
    else{
      setNumberOfChange(0)
    }
    console.log(numberOfChange);

  }
  return (
    <> <main>
    <h2>Hotel</h2>
    <div className='carousel'>
    <Arrow action='before'/>A
    <Carousel image={places[numberOfChange].photo[0]}/>
    <Arrow action='after' onClick={next}/>
    </div>
    <h2>City</h2>
    <div className='carousel' >
    <Arrow action='before'/>
    <Carousel image={cities[numberOfChange].photo}/>
    <Arrow action='after' onClick={next}/>
    </div>
    <ScrollToTop/>
    </main>
    <Footer/>
    </>
   
  )
}

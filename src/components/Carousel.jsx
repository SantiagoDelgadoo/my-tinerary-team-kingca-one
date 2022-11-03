import React from 'react'
import Arrow from './Arrow'
import cities from '../data/cities'
import places from '../data/places'
import { useState,useEffect} from 'react'
import '../App.css'

export default function Carousel(props) {
  let [numberOfChange,setNumberOfChange]=useState(0)
  let [id,setId]=useState(0)

  let next =() =>{
    if(numberOfChange+2<places.length-1){
      setNumberOfChange(numberOfChange+1)
    }
    else{
      setNumberOfChange(0)
    }
    clearInterval(id)

  }
  let prev = ()=>{
    if (numberOfChange===0){
      setNumberOfChange(cities.length-3)
    }
    else{
      setNumberOfChange(numberOfChange-1)
    }
    clearInterval(id)
  }
  useEffect(
    ()=>{
      let idInterval=setInterval(
        ()=>{
          next()
          console.log("pasaron 5 seg");
        },
        5000
      )
      setId(idInterval)
      return clearInterval(id)
    },[numberOfChange]
  )

  return (
<>
<div className='flex-column'>
<h2>CITIES</h2>
<div className='carousel'>
<Arrow icon={"<"} onClick={prev}/>
<img src={cities[numberOfChange].photo} alt='sujeto' className='photoCarrusel'/>
<img src={cities[numberOfChange+1].photo} alt='sujeto' className='photoCarrusel'/>
<img src={cities[numberOfChange+2].photo} alt='sujeto' className='photoCarrusel'/>
<Arrow icon={">"} onClick={next}/>
</div>


<h2>PLACES</h2>
<div className='carousel'>
<Arrow icon={"<"} onClick={prev}/>
<img src={places[numberOfChange+2].photo[0]} alt='sujeto' className='photoCarrusel'/>
<img src={places[numberOfChange+2].photo[1]} alt='sujeto' className='photoCarrusel'/>
<img src={places[numberOfChange+2].photo[2]} alt='sujeto' className='photoCarrusel'/>
<Arrow icon={">"} onClick={next}/>
</div>
</div>

</>
  )
}

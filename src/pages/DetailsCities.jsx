import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import CardDetails from '../components/CardDetails'
import Hotel from '../components/Hotel'
import places from '../data/places'
export default function DetailsCities() {
    let {id} = useParams()
    let [itineraris,setItineraris] = useState([])
    useEffect(()=>{
      axios.get(`http://localhost:8000/api/activity?cityId=${id}`)
      .then((response)=>setItineraris(response.data.id))
    },[])
  return (
    <>
    <div className='ContainerDetailsCities'>
        <CardDetails></CardDetails>
    </div>
    <div className='fatherHotel'>
      {itineraris.map(hotel=><Hotel object={hotel} key={hotel.name}></Hotel>)}
    </div>
    </>
  )
}

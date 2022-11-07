import React from 'react'
import { useParams } from 'react-router-dom'
import CardDetails from '../components/CardDetails'
import Hotel from '../components/Hotel'
import places from '../data/places'
export default function DetailsCities() {
  return (
    <>
    <div className='ContainerDetailsCities'>
        <CardDetails></CardDetails>
    </div>
    <div className='fatherHotel'>
    <Hotel></Hotel>
    </div>
    </>
  )
}

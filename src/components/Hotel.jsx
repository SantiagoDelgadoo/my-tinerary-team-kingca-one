import React from 'react'
import { useParams } from 'react-router-dom';
import places from '../data/places';
import Reaction from './Reaction';
export default function Hotel(props) {
    let {id} = useParams ()
    let hotelCapture = places.find(place=>place.cityId===id)
    console.log(hotelCapture);
    console.log(id);
    let {object} = props
    console.log(object);
  return (
    <div className='cardDetails'>
        <div className='fatherPhoto'>
        <img src={object.photo} className= "ImgDetails" alt="Image Of Cities" />
        </div>
        <div className='fatherDescription'>
          <Reaction itinerary={object._id}></Reaction>
            <h3 className='titleCities'>{object.name}</h3>
            <p className='descriptionCities'>{object.capacity}</p>
            <p className='descriptionCities'>{object.description}</p>
        </div>
    </div>
  )
}

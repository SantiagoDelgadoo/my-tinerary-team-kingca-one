import React from 'react'
import { NavLink } from 'react-router-dom'
export default function CardCity(props) {
    let cities = props.cities
  return (
    <div className='containerCards'>
        <div className='cardImg'>
            <img src= {cities.photo} alt="Imagen de card"/>
            <h3 className='subtituloCitiesCard'>{cities.name}</h3>
        </div>
            <div >
                <NavLink to={`/details/${cities._id}`}><button className="buttonDetailsCities">More Details</button></NavLink>
            </div>
        
    </div>
  )
}

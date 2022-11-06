import React from 'react'

export default function CardCity(props) {
    let cities = props.cities
  return (
    <div className='containerCards'>
        <div className='cardImg'>
            <img src= {cities.photo} alt="Imagen de card"/>
            <h3 className='subtituloCitiesCard'>{cities.name}</h3>
        </div>
            <div >
            <button className='buttonDetailsCities'>More Details</button>
            </div>
        
    </div>
  )
}

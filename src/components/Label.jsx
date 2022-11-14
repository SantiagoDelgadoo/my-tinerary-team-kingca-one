import React from 'react'

export default function Label(props) {
    let cities = props.cities
    let check = (e) => {
      /* console.log(e.target.value); */
    }
  return (
    <label className='labelCities'> {cities}
            <input className='inputCities' value={cities} type="checkbox"/>
        </label>
  )
  

}

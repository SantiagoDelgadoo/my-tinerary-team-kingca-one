import React from 'react'
import { useRef } from 'react'
export default function NewHotel() {
    let NewPlaceForm = useRef()
    let submit = (place) => {
        place.preventDefault ()
        let NewPlace = {
            name:place.target[0].value,
            description:place.target[1].value,
            photo:place.target[2].value,
            capacity:place.target[3].value
        }
        localStorage.setItem("ArrayOfPlaces",JSON.stringify(NewPlace))
        NewPlaceForm.current.reset ()
        console.log(NewPlace);
    }
  return (
    <div>
    <div className='containerNewPlace'>
    <form ref={NewPlaceForm} onSubmit={submit} className='containerFormPlace'>

        <label> Name of Place
            <input type="text" placeholder="Enter name of Place"/>
        </label>

        <label> Description
            <input type="text" placeholder="Enter Description"/>
        </label>

        <label> Photo
            <input type="file"  placeholder="Enter photo"/>
        </label>

        <label> Capacity
            <input type="text" placeholder="Enter Capacity"/>
        </label>
        <button className='botonSubmit'>Send</button>
        
        </form>
    </div>
    
</div>
  )
}

import React from 'react'
import { useRef } from 'react'
import axios from 'axios'
let postHotel = async function (hotel){
    axios
    .post ('http://localhost:8080/api/hotel/',hotel)
    .then ((Response)=>console.log(Response))
    .catch((Error)=>console.log(Error))
}
export default function NewHotel() {
    let NewPlaceForm = useRef()
    let submit = (place) => {
        place.preventDefault ()
        let NewPlace = {
            name:place.target[0].value,
            description:place.target[1].value,
            photo:place.target[2].value,
            capacity:place.target[3].value,
            userId:"636d39111834aa8ba98269f2",
            cityId:"636d5c20033f2a5f173b112e"
        }
        postHotel(NewPlace)
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
            <input type="text"  placeholder="Enter photo"/>
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

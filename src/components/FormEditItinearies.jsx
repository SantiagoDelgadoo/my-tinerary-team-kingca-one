import React from 'react'
import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import itinerariesAction from '../redux/actions/itinerariesAction'

export default function FormEditItinearies() {
    const id = useRef()
    const name = useRef()
    const description = useRef()
    const photo = useRef()
    const price = useRef()
    const duration = useRef()
    const dispatch = useDispatch()
    const {editItineraries}=itinerariesAction
    const sendForm = (event) =>{
        event.preventDefault()
        const objeto = {
            id:id.current.value,
            info: {name:name.current.value, description:description.current.value, photo:photo.current.value,price:price.current.value,duration:duration.current.value}
        }
        dispatch (editItineraries (objeto))
    }

    return (
      
    <div className="containerFormItineraries">
                <form>
                      <label>Id itenarary
                          <input ref={id} className="inputItinery" type="text" placeholder="Enter id of itinerary"/>
                      </label>
                      <label>Name
                          <input ref={name} className="inputItinery" type="text" placeholder="Enter your name"/>
                      </label>
                      <label>Description
                          <input ref={description} className="inputItinery" type="text" placeholder="Enter description of itinerary"/>
                      </label>
                      <label>Photo 
                          <input ref={photo} className="inputItinery" type="text" placeholder="Enter photo of itinerary"/>
                      </label>
                      <label>Price
                          <input ref={price} className="inputItinery" type="text" placeholder="Enter description of itinerary"/>
                      </label>
                      <label>Duration
                          <input ref={duration} className="inputItinery" type="text" placeholder="Enter description of itinerary"/>
                      </label>
                      <button onClick={sendForm} className="botonSubmit">Send</button>
                  </form>
          </div>
  )
}

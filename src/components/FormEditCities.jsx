import React from 'react'
import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import citiesAction from '../redux/actions/citiesAction'

export default function FormEditCities() {
    const id = useRef()
    const name = useRef()
    const photo = useRef()
    const population = useRef()
    const dispatch = useDispatch()
    const {} = citiesAction
    const sendForm = (event) =>{
        event.preventDefault()
        const objeto = {
            id:id.current.value,
            info: {name:name.current.value, population:population.current.value, photo:photo.current.value}
        }
        dispatch (citiesAction.editCity (objeto))
        console.log(objeto);
    }
    
    return (
      
    <div className="containerFormItineraries">
                <form>
                      <label>Id City
                          <input ref={id} className="inputItinery" type="text" placeholder="Enter id of itinerary"/>
                      </label>
                      <label>Name
                          <input ref={name} className="inputItinery" type="text" placeholder="Enter your name"/>
                      </label>
                      <label>Photo 
                          <input ref={photo} className="inputItinery" type="text" placeholder="Enter photo of city"/>
                      </label>
                      <label>Population
                          <input ref={population} className="inputItinery" type="text" placeholder="Enter description of population"/>
                      </label>
                      <button onClick={sendForm} className="botonSubmit">Send</button>
                  </form>
          </div>
  )
}

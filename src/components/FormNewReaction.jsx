import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { base_url } from '../api/url'

export default function FormNewReaction() {
  let [itineries, setitineraries] = useState([])
  useEffect (()=>{
    async function petitionaxios (){
      const res = await axios.get(`${base_url}itinerary/`)
      setitineraries(res.data.id);
    
    }
    petitionaxios ()
  },[])
  return (
    <div className='containerFormShow'>
    <div className='formEdit'>
    <h4 className="subtituloSignUpEdit">
        <span className="colorNaranjaDeLinea">| </span> Create your Reaction
      </h4>
    <form>
  <label className="labelEdit">
    ItineraryId
    <select>
      <option value="">Select Tinerary</option>
      {itineries.map(itineries=><option key={itineries._id} value={itineries._id}>{itineries.name}</option>)}
    </select>
  </label>
  <label className="labelEdit">
    Name
    <input 
      className="inputItinery"
      type="text"
      placeholder="Enter name of reaction"
    />
  </label>
  <label className="labelEdit">
    Icon
    <input
      className="inputItinery"
      type="text"
      placeholder="Enter active icon of reaction"
    />
  </label>
  <label className="labelEdit">
    IconBack
    <input
      className="inputItinery"
      type="text"
      placeholder="Enter disable icon"
    />
  </label>
  <button className="botonSubmit">
    Send
  </button>
</form>
</div>
</div>
  )
}

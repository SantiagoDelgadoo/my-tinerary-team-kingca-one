import { createReducer } from "@reduxjs/toolkit";
import itinerariesAction from "../actions/itinerariesAction";
const {getItineraries,deleteItineraries, editItineraries, createItineraries} = itinerariesAction 
const initialState = { //los reductores necesitan un estado inicial
    itinerariesUser: [] //estados iniciales de cada user
}

const itineraryReducer = createReducer(initialState, (builder) => { //creo reductor de las ciudades y le paso el estado inicial y el builder q es como el constructor
    builder.addCase(getItineraries.fulfilled,(state,action)=>{ //creo casos para este reductor, en el caso de que se llame cities action cuando este completa esa accion va a retornar la actualizacion del array q estaba vacio
        return {...state,itinerariesUser:action.payload.itineriesUser}
    })

    builder.addCase(deleteItineraries.fulfilled,(state,action)=>{
        return {...state,itinerariesUser:state.itinerariesUser.filter(itinerary=>itinerary._id !== action.payload.itineriesdeleted)}
    })

    builder.addCase(createItineraries.fulfilled,(state,action)=>{
        return {...state,itinerariesUser:state.itinerariesUser.concat(action.payload.itineriescreated)} //cuando retorno el nuevo estado filtro y dsp concateno
    })

    builder.addCase(editItineraries.fulfilled,(state,action)=>{
        return {...state,itinerariesUser:state.itinerariesUser.filter
        (itinerary=>itinerary._id !== action.payload.itineriesedit._id).concat(action.payload.itineriesedit)} //cuando retorno el nuevo estado filtro y dsp concateno
    })

});

export default itineraryReducer;
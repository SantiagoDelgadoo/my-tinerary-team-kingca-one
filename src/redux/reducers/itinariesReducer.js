import { createReducer } from "@reduxjs/toolkit";
import itinerariesAction from "../actions/itinerariesAction";
const {getItineraries,deleteItineraries, editItineraries} = itinerariesAction 
const initialState = {
    itinerariesUser: []
}

const itineraryReducer = createReducer(initialState, (builder) => {
    builder.addCase(getItineraries.fulfilled,(state,action)=>{
        return {...state,itinerariesUser:action.payload.itineriesUser}
    })

    builder.addCase(deleteItineraries.fulfilled,(state,action)=>{
        return {...state,itinerariesUser:state.itinerariesUser.filter(itinerary=>itinerary._id !== action.payload.itineriesdeleted)}
    })

    builder.addCase(editItineraries.fulfilled,(state,action)=>{
        return {...state,itinerariesUser:state.itinerariesUser.filter
        (itinerary=>itinerary._id !== action.payload.itineriesedit._id).concat(action.payload.itineriesedit)}
    })

});

export default itineraryReducer;
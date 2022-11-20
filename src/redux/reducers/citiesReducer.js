import { createReducer } from "@reduxjs/toolkit";
import citiesAction from "../actions/citiesAction";

const initialState = {
    listCities: [],
    listContinents: []
}

const citiesReducer = createReducer (initialState, (builder)=>{
    builder.addCase(citiesAction.getCities.fulfilled,(state,action)=>{
        return {...state,listCities:action.payload.listCities}
    })
builder.addCase(citiesAction.allCities.fulfilled,(state,action)=>{
    return {...state,listContinents:action.payload.listContinents}
})})
export default citiesReducer

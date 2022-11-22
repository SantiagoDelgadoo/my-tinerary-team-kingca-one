import { createReducer } from "@reduxjs/toolkit";
import citiesAction from "../actions/citiesAction";

const initialState = {
    listCities: [],
    listContinents: []
}

const citiesReducer = createReducer (initialState, (builder)=>
{
    builder.addCase(citiesAction.getMyCities.fulfilled,(state,action)=>{
        return {...state,listCities:action.payload.listCities}
    })

    builder.addCase(citiesAction.deleteMyCities.fulfilled,(state,action)=>{
        return {...state,listCities:state.listCities.filter(city=>city._id !== action.payload.mycitiesdeleted)}
    })

    builder.addCase(citiesAction.getCities.fulfilled,(state,action)=>{
        return {...state,listCities:action.payload.listCities}
    })
    builder.addCase(citiesAction.allCities.fulfilled,(state,action)=>{
    return {...state,listContinents:action.payload.listContinents}
})

builder.addCase(citiesAction.editCity.fulfilled,(state,action)=>{
    return {...state,listCities:state.listCities.filter
    (city=>city._id !== action.payload.cityedit._id).concat(action.payload.cityedit)}
})
});
export default citiesReducer

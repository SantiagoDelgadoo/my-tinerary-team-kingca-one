import { createReducer } from "@reduxjs/toolkit";
import citiesAction from "../actions/citiesAction"; 

const initialState = { //los reductores necesitan un estado inicial
    listCities: [], //estados iniciales de cada uno
    listContinents: []
}

const citiesReducer = createReducer (initialState, (builder)=> //creo reductor de las ciudades y le paso el estado inicial y el builder q es como el constructor
{
    builder.addCase(citiesAction.getMyCities.fulfilled,(state,action)=>{ //creo casos para este reductor, en el caso de que se llame cities action cuando este completa esa accion va a retornar la actualizacion del array q estaba vacio
        return {...state,listCities:action.payload.listCities} //action.payload es lo q retorno una vez ejecutada la accion, la carga de la accion
    })

    builder.addCase(citiesAction.deleteMyCities.fulfilled,(state,action)=>{ //creo casos para este reductor, en el caso de que se llame cities action cuando este completa esa accion va a retornar la actualizacion del array q estaba vacio
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
    (city=>city._id !== action.payload.cityedit._id).concat(action.payload.cityedit)}//cuando retorno el nuevo estado filtro y dsp concateno
})
});
export default citiesReducer

import { createAsyncThunk } from "@reduxjs/toolkit"; //importo createasyncthunk porque voy a usar una accion q tiene q ser asincrona porque hago una peticion a la api
import axios from "axios";
import { base_url } from "../../api/url";
const getCities = createAsyncThunk ('getCities',async (data)=>{
    const continent = data.continent
    const name = data.name
    console.log(name);
    console.log(continent);
    try {
        const res = await axios.get (`${base_url}city/?name=${name}${continent}`)
        console.log(res.data.cities);
        return {
            listCities: res.data.cities
        }
    } catch (error) {
        console.log(error.message);
    }

})
const allCities = createAsyncThunk ('allCities',async ()=>{
    try {
        const res = await axios.get (`${base_url}city/`)
        console.log(res.data.cities);
        return {
            listContinents: res.data.cities
        }
    } catch (error) {
        console.log(error.message);
    }

})
const citiesAction = {getCities,allCities}
export default citiesAction
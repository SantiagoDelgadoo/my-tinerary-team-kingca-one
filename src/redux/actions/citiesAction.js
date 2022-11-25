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
const getMyCities = createAsyncThunk ('getMyCities',async ()=>{
    const user = "636d39111834aa8ba98269f2"
    try {
        const res = await axios.get (`${base_url}/city/?userId=${user}`)
        return {
            listCities: res.data.cities
        }
    } catch (error) {
        console.log(error.message);
    }
})

const deleteMyCities = createAsyncThunk ('deleteMyCities',async (data)=>{
    const id = data.id
    try {
        const res = await axios.delete(`${base_url}/city/${id}`)
        return {
            mycitiesdeleted: res.data.id
        }
    } catch (error) {
        console.log(error.message);
    }
})

const editCity = createAsyncThunk ('editCity',async (data)=>{
    const {id, info} = data;
    try {
        const res = await axios.put(`${base_url}/city/${id}`,info
        );
        console.log(res.data);
        return {
            cityedit: res.data.id
        }
    } catch (error) {
        console.log(error.message);
    }
})


const citiesAction = {getCities,allCities,getMyCities,deleteMyCities, editCity }
export default citiesAction
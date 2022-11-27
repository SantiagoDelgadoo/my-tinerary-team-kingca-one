import { createAsyncThunk } from "@reduxjs/toolkit"; //importo createasyncthunk porque voy a usar una accion q tiene q ser asincrona porque hago una peticion a la api
import axios from "axios";
import { base_url } from "../../api/url";
const getCities = createAsyncThunk ('getCities',async (data)=>{ //uso assynkthunk para una accion que sea asincrona sino fuese asincrona uso createaction
    const continent = data.continent
    const name = data.name
    console.log(name);
    console.log(continent);
    try {
        const res = await axios.get (`${base_url}city/?name=${name}${continent}`) //me guardo rta de axios con get
        console.log(res.data.cities);
        return {
            listCities: res.data.cities //listcities va a ser un array
        }
    } catch (error) {
        console.log(error.message);
    }

})
const allCities = createAsyncThunk ('allCities',async ()=>{  //uso assynkthunk para una accion que sea asincrona sino fuese asincrona uso createaction
    try {
        const res = await axios.get (`${base_url}city/`) //me guardo rta de axios con get
        console.log(res.data.cities);
        return {
            listContinents: res.data.cities //de la 24 a la 26 es mi payload, listcontinents va a ser un array
        }
    } catch (error) {
        console.log(error.message);
    }

})
const getMyCities = createAsyncThunk  ('getMyCities',async (userId)=>{ //uso assynkthunk para una accion que sea asincrona sino fuese asincrona uso createaction
    console.log(userId);
    const user = userId
    try {
        const res = await axios.get (`${base_url}/city/?userId=${user}`) //me guardo rta de axios con get
        return {
            listCities: res.data.cities
        }
    } catch (error) {
        console.log(error.message);
    }
})

const deleteMyCities = createAsyncThunk ('deleteMyCities',async (data)=>{ //uso assynkthunk para una accion que sea asincrona sino fuese asincrona uso createaction
    const id = data.id //data siempre tiene que ser un objeto
    try {
        const res = await axios.delete(`${base_url}/city/${id}`) //me guardo rta de axios que seria el objeto borrado
        return {
            mycitiesdeleted: res.data.id //aca guardo este objeto para dsp borrarlo del array
        }
    } catch (error) {
        console.log(error.message);
    }
})

const editCity = createAsyncThunk ('editCity',async (data)=>{ //uso assynkthunk para una accion que sea asincrona sino fuese asincrona uso createaction
    const {id, info} = data;
    try {

        const res = await axios.put(`${base_url}/city/${id}`,info

        );
        console.log(res.data);
        return {
            cityedit: res.data.id //aca estaria guardado el objeto que me llego para despues concatenarlo en el otro array
        }
    } catch (error) {
        console.log(error.message);
    }
})


const citiesAction = {getCities,allCities,getMyCities,deleteMyCities, editCity } //creo objeto contenedor de acciones
export default citiesAction //exporto el objeto que contiene las acciones
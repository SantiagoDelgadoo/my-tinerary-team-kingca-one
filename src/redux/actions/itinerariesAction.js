import { createAsyncThunk } from "@reduxjs/toolkit"; //importo createasyncthunk porque voy a usar una accion q tiene q ser asincrona porque hago una peticion a la api
import axios from "axios";
import { useSelector } from "react-redux";
import { base_url } from "../../api/url";

const getItineraries = createAsyncThunk ('getItineraries',async (id)=>{ //uso assynkthunk para una accion que sea asincrona sino fuese asincrona uso createaction
    try {
        const res = await axios.get (`${base_url}/itinerary?userId=${id}`) //me guardo rta de axios con get
        return {
            itineriesUser: res.data.id //itineriesUser va a ser un arrayvdonde voy a guardar las actividades de ese user
        }
    } catch (error) {
        console.log(error.message);
    }
})

const deleteItineraries = createAsyncThunk ('deleteItineraries',async (data)=>{ //uso assynkthunk para una accion que sea asincrona sino fuese asincrona uso createaction
    const id = data.id
    let headers = { headers: { Authorization: `Bearer ${data.token}` } };
    try {
        const res = await axios.delete(`${base_url}/itinerary/${id}`, headers) //me guardo rta de axios que seria el objeto borrado
        return {
            itineriesdeleted: res.data.id //aca guardo este objeto para dsp borrarlo del array
        }
    } catch (error) {
        console.log(error.message);
    }
})

const createItineraries = createAsyncThunk ('createItineraries',async (data)=>{ //uso assynkthunk para una accion que sea asincrona sino fuese asincrona uso createaction
    try {
        const res = await axios.post(`${base_url}itinerary`,data) //me guardo rta de axios que seria el objeto borrado
        console.log(res);
        return {
            itineriescreated: res.data.id //aca guardo este objeto para dsp borrarlo del array
        }
    } catch (error) {
        console.log(error.message);
    }
})

const editItineraries = createAsyncThunk ('editItineraries',async (data)=>{ //uso assynkthunk para una accion que sea asincrona sino fuese asincrona uso createaction
    const {id, info, token} = data;
    let headers = { headers: { Authorization: `Bearer ${token}` } };
    try {
        const res = await axios.put(`${base_url}/itinerary/${id}`,(info), headers //me guardo la rta de axios que seria el objeto editado
        );
        console.log(res.data);
        return {
            itineriesedit: res.data.itineraryEdit //aca estaria guardado el objeto que me llego para despues concatenarlo en el otro array
        }
    } catch (error) {
        console.log(error.message);
    }
})


const itinerariesAction = {getItineraries,deleteItineraries,editItineraries, createItineraries} //creo objeto contenedor de acciones
export default itinerariesAction  //exporto el objeto que contiene las acciones


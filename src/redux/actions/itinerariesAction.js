import { createAsyncThunk } from "@reduxjs/toolkit"; //importo createasyncthunk porque voy a usar una accion q tiene q ser asincrona porque hago una peticion a la api
import axios from "axios";
import { base_url } from "../../api/url";

const getItineraries = createAsyncThunk ('getItineraries',async ()=>{ //uso assynkthunk para una accion que sea asincrona sino fuese asincrona uso createaction
    const user = "636d39111834aa8ba98269f3"
    try {
        const res = await axios.get (`${base_url}/itinerary?userId=${user}`) //me guardo rta de axios con get
        return {
            itineriesUser: res.data.id //itineriesUser va a ser un arrayvdonde voy a guardar las actividades de ese user
        }
    } catch (error) {
        console.log(error.message);
    }
})

const deleteItineraries = createAsyncThunk ('deleteItineraries',async (data)=>{ //uso assynkthunk para una accion que sea asincrona sino fuese asincrona uso createaction
    const id = data.id
    try {
        const res = await axios.delete(`${base_url}/itinerary/${id}`) //me guardo rta de axios que seria el objeto borrado
        return {
            itineriesdeleted: res.data.id //aca guardo este objeto para dsp borrarlo del array
        }
    } catch (error) {
        console.log(error.message);
    }
})

const editItineraries = createAsyncThunk ('editItineraries',async (data)=>{ //uso assynkthunk para una accion que sea asincrona sino fuese asincrona uso createaction
    const {id, info} = data;
    try {
        const res = await axios.put(`${base_url}/itinerary/${id}`,(info), {new: true} //me guardo la rta de axios que seria el objeto editado
        );
        console.log(res.data);
        return {
            itineriesedit: res.data.itineraryEdit //aca estaria guardado el objeto que me llego para despues concatenarlo en el otro array
        }
    } catch (error) {
        console.log(error.message);
    }
})


const itinerariesAction = {getItineraries,deleteItineraries,editItineraries} //creo objeto contenedor de acciones
export default itinerariesAction  //exporto el objeto que contiene las acciones


import { createAsyncThunk } from "@reduxjs/toolkit"; //importo createasyncthunk porque voy a usar una accion q tiene q ser asincrona porque hago una peticion a la api
import axios from "axios";
import { base_url } from "../../api/url";

const getItineraries = createAsyncThunk ('getItineraries',async ()=>{
    const user = "636d39111834aa8ba98269f3"
    try {
        const res = await axios.get (`${base_url}/itinerary?userId=${user}`)
        return {
            itineriesUser: res.data.id
        }
    } catch (error) {
        console.log(error.message);
    }
})

const deleteItineraries = createAsyncThunk ('deleteItineraries',async (data)=>{
    const id = data.id
    try {
        const res = await axios.delete(`${base_url}/itinerary/${id}`)
        return {
            itineriesdeleted: res.data.id
        }
    } catch (error) {
        console.log(error.message);
    }
})

const editItineraries = createAsyncThunk ('editItineraries',async (data)=>{
    const {id, info} = data;
    try {
        const res = await axios.put(`${base_url}/itinerary/${id}`,(info), {new: true}
        );
        console.log(res.data);
        return {
            itineriesedit: res.data.itineraryEdit
        }
    } catch (error) {
        console.log(error.message);
    }
})


const itinerariesAction = {getItineraries,deleteItineraries,editItineraries}
export default itinerariesAction


import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { base_url } from "../../api/url";

const reactions = createAsyncThunk("reactionOfTinerary", async (data) => {
    const { token, id } = data;
    console.log(token);
    /* console.log(id); */
    let headers = { headers: { Authorization: `Bearer ${token}` } };

    try {
        const respuesta = await axios.get(
            `${base_url}reaction/?itineraryid=${id}`,

            headers
        );

        return {
            success: true,
            reactions: respuesta.data.reactions,
        };
    } catch (error) {
        console.log(error.message);
    }
});

const likeDislike = createAsyncThunk("likeDislike", async (data) => {
    const { token, id, name } = data;

    let headers = { headers: { Authorization: `Bearer ${token}` } };

    try {
        console.log(id);
        console.log(name);
        console.log('try');
        const respuesta = await axios.put(
            `${base_url}reaction/?itineraryid=${id}&name=${name}`,
            null,
            headers
        );
        console.log(respuesta);
        return {
            success: true,
            reaction: respuesta.data.reaction,
        };
    } catch (error) {
        console.log(error.message);
    }
});

const getReactionsOfUser = createAsyncThunk("getReactionsOfUser", async (data) => {
    const { token, id } = data;

    let headers = { headers: { Authorization: `Bearer ${token}` } };

    try {
        const respuesta = await axios.get(
            `${base_url}reaction/?userId=${id}`,
            headers
        );

        return {
            success: true,
            reactions: respuesta.data.reactions,
        };
    } catch (error) {
        console.log(error.message);
    }
});

const deleteReaction = createAsyncThunk("deleteReaction", async (data) => {

    const { token, id } = data;

    let headers = { headers: { Authorization: `Bearer ${token}` } };

    try {
        const respuesta = await axios.put(
            `${base_url}reaction/${id}`,
            null,
            headers
        );

        return {
            success: true,
            reaction: respuesta.data.reaction,
        };
    } catch (error) {
        console.log(error.message);
    }
});



const reactionsActions = {
    reactions,
    likeDislike,
    getReactionsOfUser,
    deleteReaction,
};

export default reactionsActions;
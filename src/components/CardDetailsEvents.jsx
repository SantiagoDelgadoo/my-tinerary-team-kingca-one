import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { base_url } from "../api/url";
import axios from "axios";
import EventCard from "./EventCard";


export default function CardDetailsEvents() {
  let { id } = useParams();
  let [events, setEvents] = useState([]);
  let [update, setUpdate] = useState(false);
  useEffect(() => {
    axios
      .get(`${base_url}/show?hotelId=${id}`)
      .then((response) => setEvents(response.data.id));
  }, [update]);

  return (
    <>
      {events.map((event) => {
        return (
        <EventCard event={event} update={update}  setUpdate={setUpdate}></EventCard>
        );
      })}

    </>
  );
}

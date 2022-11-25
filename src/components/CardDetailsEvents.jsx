import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { base_url } from "../api/url";
import axios from "axios";

export default function CardDetailsEvents() {
  let { id } = useParams();
  console.log(id);
  let [events, setEvents] = useState([]);
  console.log(id);
  useEffect(() => {
    axios
      .get(`${base_url}/show?hotelId=${id}`)
      .then((response) => setEvents(response.data.id));
  }, []);

  return (
    <>
      {events.map((event) => {
        return (
          <div className="cardDetailsEvent">
            <div className="cardPhotoEvents">
              <img src={event.photo} alt="" />
            </div>
            <div className="cardTextEvents">
              <h2>{event.name}</h2>
              <div>
                <p>
                  <span>Date: </span>
                  {event.date}
                </p>
                <p>
                  <span>Capacity: </span>
                  {event.price}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

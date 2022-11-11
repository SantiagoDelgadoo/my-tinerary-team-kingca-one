import React from "react";
import { useParams } from "react-router-dom";
import events from "../data/events";

export default function CardDetailsEvents() {
  let { id } = useParams();
  console.log(id);
  let eventsOnPlace = events.filter((event) => event.hotelId === id)

  
  return (
    <>
    {eventsOnPlace.map((event) => {
        return (
          <div className="cardDetailsEvent">
            <div className="cardPhotoEvents">
            <img src={event.photo} alt="" />
            </div>
            <div className="cardTextEvents">
            <h2>{event.name}</h2>
            <div>
            <p><span>Date: </span>{event.date}</p>
            <p><span>Capacity: </span>{event.price}</p>
            </div>
          </div>
        </div>
        );
      })}
    </>
    
  )
}


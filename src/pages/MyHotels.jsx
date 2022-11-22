import React from "react";
import CardMyHotel from "../components/CardMyHotel";
import FormEditHotel from "../components/FormEditHotel";
export default function MyShows() {
  return (
    <>
      <div className="containerCardDetailsEventsEdit">
        <CardMyHotel />
        <FormEditHotel />
      </div>
    </>
  );
}

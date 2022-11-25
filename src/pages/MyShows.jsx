import React from "react";
import CardMyShow from "../components/CardMyShow";
import FormEditShow from "../components/FormEditShow";
export default function MyShows() {
  return (
    <>
      <div className="containerCardDetailsEventsEdit">
        <CardMyShow />
        <FormEditShow />
      </div>
    </>
  );
}

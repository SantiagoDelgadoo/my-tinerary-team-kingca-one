import React from "react";
import CardMyShow from "../components/CardMyShow";
import FormEditShow from "../components/FormEditShow";
import FormCreateShow from "../components/FormCreateShow";
export default function MyShows() {
  return (
    <>
      <div className="containerCardDetailsEventsEdit">
        <CardMyShow />
        <div className="containerFormShowGrande">
        <FormEditShow />
        <FormCreateShow />
        </div>
      </div>
    </>
  );
}

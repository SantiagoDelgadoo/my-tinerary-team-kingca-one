import React from "react";
import FormProfile from "../components/FormProfile";
import CardProfile from "../components/CardProfile";
import FormNewReaction from "../components/FormNewReaction";

export default function MyShows() {
  return (
    <>
      <div className="containerProfile">
      <h4 className="subtituloSignUpEdit">
        <span className="colorNaranjaDeLinea">| </span>Edit your Profile
      </h4>
        <FormProfile />
        <CardProfile />
      </div>
      <div>
      <FormNewReaction></FormNewReaction>
      </div>
    </>
  );
}

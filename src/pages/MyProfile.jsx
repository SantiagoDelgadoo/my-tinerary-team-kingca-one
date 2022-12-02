import React from "react";
import FormProfile from "../components/FormProfile";
import CardProfile from "../components/CardProfile";
import FormNewReaction from "../components/FormNewReaction";
import admin from "../data/admin";
import { useSelector } from "react-redux";

export default function MyShows() {
  let { role } = useSelector((store) => store.userReducer);
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
        {role==="admin"?<FormNewReaction></FormNewReaction>:null}
      </div>
    </>
  );
}

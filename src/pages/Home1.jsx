import React from "react";
import CallToAction from "../components/CallToAction";
import NavBar from "../components/NavBar";
import { Link as NavLink } from 'react-router-dom'

export default function Home1() {
  return (
    <div className="FirstContainer">
      <NavBar></NavBar>
      <div className="containerSubtitulos">
      <div className="subtituloHome1">
        <p>Are you Ready to Explore?</p>
      </div>
      <div className="tituloHome1">
        <p className="tituloHome1"><span className="colorNaranjaDeLinea">|</span> MY TINERARY TRAVELS</p>
      </div>
        <CallToAction className='boton1' contenido= "Cities" rute= "/cities"></CallToAction>
        <CallToAction contenido= "Hotels" rute= "/hotels"></CallToAction>
    </div>
    </div>
    
  );
}

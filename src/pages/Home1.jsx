import React from "react";
import CallToAction from "../components/CallToAction";
import NavBar from "../components/NavBar";
import { Link as NavLink } from 'react-router-dom'

export default function Home1() {
  return (
    <div className="FirstContainer">
      <div className="containerSubtitulos">
      <div className="subtituloHome1">
        <h3>Are you Ready to Explore?</h3>
      </div>
      <div className="tituloHome1">
        <h1><span className="colorNaranjaDeLinea">|</span> MY TINERARY TRAVELS</h1>
      </div>
        <CallToAction className='boton1' contenido= "Cities" rute= "/cities"></CallToAction>
        <CallToAction contenido= "Hotels" rute= "/hotels"></CallToAction>
    </div>
    </div>
    
  );
}

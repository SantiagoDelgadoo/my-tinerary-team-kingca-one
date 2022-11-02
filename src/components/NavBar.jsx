import React from "react";
import {Link as NavLink} from 'react-router-dom'
import { useState } from "react";
export default function NavBar() {
  let [seeLogin,setSeeLogin] = useState (true)
  let change = () => {
    setSeeLogin (!seeLogin)
  }


  return (
    <div className="containerGrande">
    <div className="ContainerHome1">
      <div className="logo">
        <img src="./img/logo.png" alt="Logo de la pagina"/>
        <p className="textoLogo">My Tinerary</p>
      </div>
      <nav>
        <NavLink to="/home">
        <ul>Home</ul>
        </NavLink>
        <NavLink to="/cities">
        <ul>Cities</ul>
        </NavLink>
        <NavLink to="/hotels">
        <ul>Hotels</ul>
        </NavLink>
      </nav>
      {
        seeLogin
        ? (<div className="usuario">
        <img src="./img/usuario.png" onClick={change} alt="Usuario"/>
          <button>Login</button>
          <button>Logout</button>
          </div>)
          : (<div className="usuario">
          <img src="./img/usuario.png" onClick={change} alt="Usuario"/>
            </div>)
      }
    </div>
    
    </div>
  );
  }

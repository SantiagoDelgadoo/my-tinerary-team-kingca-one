import React from "react";
import { Link as NavLink } from "react-router-dom";
import { useState } from "react";
export default function NavBar() {
  let [seeLogin, setSeeLogin] = useState(false);
  let change = () => {
    setSeeLogin(!seeLogin);
  };
  let [seeMenu, setSeeMenu] = useState(true);
  let changeMenu = () => {
    setSeeMenu(!seeMenu);
  };

  return (
    <div className="containerGrande">
      <div className="ContainerHome1">
        <div className="logo">
          <img src="./img/logo.png" alt="Logo de la pagina" />
          <p className="textoLogo">My Tinerary</p>
        </div>

        {seeMenu ? (
          <div className="containerBurger">
            <img src="./img/hambur.png" className="menuBurguer" onClick={changeMenu} alt="Menu Desplegable"/>
          </div>
        ) : (
          <div className="containerBurger">
            <img src="./img/hambur.png" className="menuBurguer" onClick={changeMenu} alt="Menu Desplegable"/>
            <button>Home</button>
            <button>Cities</button>
            <button>Hotels</button>
          </div>
        )}
        <nav>
          <NavLink style={{textDecoration: 'none'}} to="/home">
            <ul>Home</ul>
          </NavLink>
          <NavLink style={{textDecoration: 'none'}}to="/cities">
            <ul>Cities</ul>
          </NavLink>
          <NavLink style={{textDecoration: 'none'}}to="/hotels">
            <ul>Hotels</ul>
          </NavLink>
        </nav>
        {seeLogin ? (
          <div className="usuario">
            <img src="./img/usuario.png" onClick={change} alt="Usuario" />
            <button>Login</button>
            <button>Logout</button>
          </div>
        ) : (
          <div className="usuario">
            <img src="./img/usuario.png" onClick={change} alt="Usuario" />
          </div>
        )}
      </div>
    </div>
  );
}

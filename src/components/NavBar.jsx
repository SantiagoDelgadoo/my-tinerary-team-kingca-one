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
            <img
              src="./img/hambur.png"
              className="menuBurguer"
              onClick={changeMenu}
              alt="Menu Desplegable"
            />
          </div>
        ) : (
          <div className="containerBurger">
            <img
              src="./img/hambur.png"
              className="menuBurguer"
              onClick={changeMenu}
              alt="Menu Desplegable"
            />
            <NavLink style={{ textDecoration: "none" }} to="/home">
              <ul>Home</ul>
            </NavLink>
            <NavLink style={{ textDecoration: "none" }} to="/cities">
              <ul>Cities</ul>
            </NavLink>
            <NavLink style={{ textDecoration: "none" }} to="/hotels">
              <ul>Hotels</ul>
            </NavLink>
            <NavLink style={{ textDecoration: "none" }} to="/newhotel">
              <ul>New Hotel</ul>
            </NavLink>
            <NavLink style={{ textDecoration: "none" }} to="/newcity">
              <ul>New City</ul>
            </NavLink>
          </div>
        )}
        <nav>
          <NavLink style={{ textDecoration: "none" }} to="/home">
            <ul>Home</ul>
          </NavLink>
          <NavLink style={{ textDecoration: "none" }} to="/cities">
            <ul>Cities</ul>
          </NavLink>
          <NavLink style={{ textDecoration: "none" }} to="/hotels">
            <ul>Hotels</ul>
          </NavLink>
          <NavLink style={{ textDecoration: "none" }} to="/newcity">
            <ul>New City</ul>
          </NavLink>
          <NavLink style={{ textDecoration: "none" }} to="/newhotel">
            <ul>New Hotel</ul>
          </NavLink>
        </nav>
        {seeLogin ? (
          <div className="usuario">
            <div className="usuarioybotones">
              <img src="./img/usuario.png" onClick={change} alt="Usuario" />
              <NavLink style={{ textDecoration: "none" }} to="/signin">
                <button className="buttonHeader">SignIn</button>
              </NavLink>
              <NavLink style={{ textDecoration: "none" }} to="/signup">
                <button className="buttonHeader">SignUp</button>
              </NavLink>
            </div>

            <div className="containerNavBarUser">
              <NavLink style={{ textDecoration: "none" }} to="/mycities">
                <ul>My cities</ul>
              </NavLink>
              <NavLink style={{ textDecoration: "none" }} to="/myhotels">
                <ul>My hotels</ul>
              </NavLink>
              <NavLink style={{ textDecoration: "none" }} to="/myshows">
                <ul>My shows</ul>
              </NavLink>
              <NavLink style={{ textDecoration: "none" }} to="/myitineraries">
                <ul>My Tineraries</ul>
              </NavLink>
              <NavLink style={{ textDecoration: "none" }} to="/myprofile">
                <ul>My Profile</ul>
              </NavLink>
            </div>
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

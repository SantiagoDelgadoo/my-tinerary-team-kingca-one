import React from "react";
import { Link as NavLink } from "react-router-dom";
import { useState } from "react";
import userActions from "../redux/actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
export default function NavBar() {
  let [seeLogin, setSeeLogin] = useState(false);
  let change = () => {
    setSeeLogin(!seeLogin);
  };
  let { token, photo, logged, name, role } = useSelector(
    (store) => store.userReducer
  );
  const dispatch = useDispatch();
  let [seeMenu, setSeeMenu] = useState(true);
  let changeMenu = () => {
    setSeeMenu(!seeMenu);
  };
  const Logout = (event) => {
    Swal.fire({
      title: "Are you sure you want to logout?",
      imageUrl:
        "https://img.freepik.com/premium-vector/white-exclamation-mark-sign-red-circle-isolated-white-background_120819-332.jpg?w=2000",
      width: "25rem",
      padding: "2rem",
      showCancelButton: true,
      confirmButtonColor: "#ea5318",
      cancelButtonColor: "#5e5b5b",
      confirmButtonText: "Yes, I'm sure!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "You have closed session",
          imageUrl: "https://cdn-icons-png.flaticon.com/128/7807/7807573.png",
          width: "25rem",
          padding: "2rem",
        });
        dispatch(userActions.Logout(token));
      }
    });
  };
  console.log(token);
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
          {logged && role === "admin" ? (
            <>
              <NavLink style={{ textDecoration: "none" }} to="/newcity">
                <ul>New City</ul>
              </NavLink>
              <NavLink style={{ textDecoration: "none" }} to="/newhotel">
                <ul>New Hotel</ul>
              </NavLink>
            </>
          ) : null}
        </nav>
        {seeLogin ? (
          <div className="usuario">
            <div className="usuarioybotones">
              {!logged ? (
                <img src="./img/usuario.png" onClick={change} alt="Usuario" />
              ) : null}

              {!logged ? (
                <>
                  <NavLink style={{ textDecoration: "none" }} to="/signin">
                    <button className="buttonHeader">SignIn</button>
                  </NavLink>
                  <NavLink style={{ textDecoration: "none" }} to="/signup">
                    <button className="buttonHeader">SignUp</button>
                  </NavLink>
                </>
              ) : null}
            </div>

            <div className="containerNavBarUser">
              <div className="containerNamePhoto">
                <ul>Hello: {name}</ul>
                {logged ? (
                  <img src={photo} onClick={change} alt="Usuario" />
                ): null}
              </div>
                  <div className="containerNavUser">
                  {logged & (role === "admin") ? (
                <>
                  <NavLink style={{ textDecoration: "none" }} to="/mycities">
                    <ul>My cities</ul>
                  </NavLink>
                  <NavLink style={{ textDecoration: "none" }} to="/myhotels">
                    <ul>My hotels</ul>
                  </NavLink>
                  <NavLink style={{ textDecoration: "none" }} to="/myprofile">
                    <ul>My Profile</ul>
                  </NavLink>
                  <ul className="logoutPoint" onClick={Logout}>
                    Logout
                  </ul>
                </>
              ) : null}
              {logged & (role === "user") ? (
                <>
                  <NavLink style={{ textDecoration: "none" }} to="/myshows">
                    <ul>My shows</ul>
                  </NavLink>
                  <NavLink
                    style={{ textDecoration: "none" }}
                    to="/myitineraries"
                  >
                    <ul>My Tineraries</ul>
                  </NavLink>
                  <NavLink style={{ textDecoration: "none" }} to="/myprofile">
                    <ul>My Profile</ul>
                  </NavLink>
                  <ul className="logoutPoint" onClick={Logout}>
                    Logout
                  </ul>
                </>
              ) : null}
                  </div>

            </div>
          </div>
        ) : (
          <div className="usuario">
            {!logged ? (
              <img src="./img/usuario.png" onClick={change} alt="Usuario" />
            ) : (
              <img src={photo} onClick={change} alt="Usuario" />
            )}
          </div>
        )}
      </div>
    </div>
  );
}

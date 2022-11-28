import React, { useEffect } from "react";
import { useRef } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router";
import citiesAction from "../redux/actions/citiesAction";
import { useDispatch, useSelector } from "react-redux";

export default function NewHotel() {
  let NewPlaceForm = useRef();
  let navigate = useNavigate();
  let idCity = useRef();
  let { id } = useSelector((store) => store.userReducer);
  const citiesFiltered = useSelector(
    (store) => store.citiesReducer.listContinents
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(citiesAction.allCities()); //dispatch sirve para despachar acciones, adentro de los () se pasa la accion q cree de redux y si le quiero pasar algo mas a esa accion se pasa como data
  }, []);
  let postHotel = async function (hotel) {
    axios
      .post("http://localhost:8000/api/hotel/", hotel)
      .then((Response) => {
        if (Response.data.success) {
          toast.success("Hotel created", {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          setTimeout(function () {
            console.log(Response);
            navigate(`/detailsHotel/${Response.data.response._id}`);
          }, 3000);
        } else {
          Response.data.message.map((ms) => {
            toast.error(`${ms}`, {
              position: "bottom-left",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
          });
        }
      })
      .catch((Error) => console.log(Error));
  };
  let submit = (place) => {
    place.preventDefault();
    let NewPlace = {
      name: place.target[0].value,
      description: place.target[1].value,
      photo: place.target[2].value,
      capacity: place.target[3].value,
      userId: id,
      cityId: idCity,
    };
    postHotel(NewPlace);
    NewPlaceForm.current.reset();
    console.log(NewPlace);
  };
  return (
    <div>
      <ToastContainer />
      <div className="containerNewPlace">
        <form
          ref={NewPlaceForm}
          onSubmit={submit}
          className="containerFormPlace"
        >
          <label>
            {" "}
            Name of Place
            <input type="text" placeholder="Enter name of Place" />
          </label>

          <label>
            {" "}
            Description
            <input type="text" placeholder="Enter Description" />
          </label>

          <label>
            {" "}
            Photo
            <input type="text" placeholder="Enter photo" />
          </label>

          <label>
            {" "}
            Capacity
            <input type="text" placeholder="Enter Capacity" />
          </label>

          <label>City</label>
          <select ref={idCity}>
            <option value="">Choose City</option>
            {citiesFiltered.map((city) => (
              <option key={city.name} value={city._id}>
                {city.name}
              </option>
            ))}
          </select>
          <label></label>
          <button className="botonSubmit">Send</button>
        </form>
      </div>
    </div>
  );
}

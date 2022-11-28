import React, { useEffect } from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import itinerariesAction from "../redux/actions/itinerariesAction";
import MyIneraries from "../pages/MyIneraries";
import citiesAction from "../redux/actions/citiesAction";

export default function FormEditItinearies() {
  let idCity = useRef();
  const citiesFiltered = useSelector((store) => store.citiesReducer.listContinents);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(citiesAction.allCities()); //dispatch sirve para despachar acciones, adentro de los () se pasa la accion q cree de redux y si le quiero pasar algo mas a esa accion se pasa como data
  }, []);


  const idtwo = useRef();
  const name = useRef();
  const description = useRef();
  const photo = useRef();
  const price = useRef();
  const duration = useRef();
  let { id } = useSelector((store) => store.userReducer);
  const { createItineraries } = itinerariesAction;
  const sendForm = (event) => {
    event.preventDefault();
    const objeto = {
        userId: id,
        name: name.current.value,
        cityid: idCity.current.value,
        description: description.current.value,
        photo: photo.current.value,
        price: price.current.value,
        duration: duration.current.value,

    };
    console.log(objeto);
    dispatch(createItineraries(objeto)); 
    
  };


  return (
    <div className="containerFormShow">
      <div className="formEdit">
        <h4 className="subtituloSignUpEdit">
          <span className="colorNaranjaDeLinea">|</span>Create your Itenarary
        </h4>
        <form>
          <label className="labelEdit">
            Name
            <input
              ref={name}
              className="inputItinery"
              type="text"
              placeholder="Enter your name"
            />
          </label>
          <label className="labelEdit">
            Description
            <input
              ref={description}
              className="inputItinery"
              type="text"
              placeholder="Enter description of itinerary"
            />
          </label>
          <label className="labelEdit">
            Photo
            <input
              ref={photo}
              className="inputItinery"
              type="text"
              placeholder="Enter photo of itinerary"
            />
          </label>
          <label className="labelEdit">
            Price
            <input
              ref={price}
              className="inputItinery"
              type="text"
              placeholder="Enter description of itinerary"
            />
          </label>
          <label className="labelEdit">
            Duration
            <input
              ref={duration}
              className="inputItinery"
              type="text"
              placeholder="Enter description of itinerary"
            />
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
          <button onClick={sendForm} className="botonSubmit">
            Create
          </button>
        </form>
      </div>
    </div>
  );
}

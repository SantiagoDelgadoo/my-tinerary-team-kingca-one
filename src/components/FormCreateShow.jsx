import React, { useEffect } from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import hotelsAction from "../redux/actions/hotelsAction";
import showAction from "../redux/actions/showAction";

export default function FormCreateShow() {
  let idHotel = useRef();
  let { id } = useSelector((store) => store.userReducer);
  const hotels = useSelector((store) => store.hotelsReducer.listFiltered);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(hotelsAction.filterHotels({ name: "", order: "" }));
  }, []);
  const name = useRef();
  const photo = useRef();
  const description = useRef();
  const price = useRef();
  const date = useRef();
  const form = useRef();
  const {} = showAction;

  let create = (show) => {
    show.preventDefault();
    let createShow = {
      name: name.current.value,
      description: description.current.value,
      date: date.current.value,
      photo: photo.current.value,
      price: price.current.value,
      hotelId: idHotel.current.value,
      userId: id,
    };
    dispatch(showAction.createShowUser(createShow));
    form.current.reset();
  };

  return (
    <div className="containerFormShow">
      <div className="formEdit">
        <h4 className="subtituloSignUpEdit">
          <span className="colorNaranjaDeLinea">|</span>Create Show
        </h4>
        <form ref={form}>
          <label>
          <label className="selectCityShow">Hotel
          <select ref={idHotel} >
            <option value="">Choose Hotel</option>
            {hotels.map((hotel) => (
              <option key={hotel.name} value={hotel._id}>
                {hotel.name}
              </option>
            ))}
          </select>
          </label>
          </label>
          <label className="labelEdit">
            Name
            <input
              ref={name}
              className="inputSignUp"
              type="text"
              placeholder="Enter name"
            />
          </label>

          <label className="labelEdit">
            Date
            <input
              ref={date}
              className="inputSignUp"
              type="date"
              placeholder="Enter date"
            />
          </label>

          <label className="labelEdit">
            Description
            <input
              ref={description}
              className="inputSignUp"
              type="text"
              placeholder="Enter Description"
            />
          </label>
          <label className="labelEdit">
            Price
            <input
              ref={price}
              className="inputSignUp"
              type="number"
              placeholder="Enter Price"
            />
          </label>

          <label className="labelEdit">
            Photo
            <input
              ref={photo}
              className="inputSignUp"
              type="text"
              placeholder="Enter url photo"
            />
          </label>
          <button onClick={create} className="botonSubmitEditHotel">
            Create
          </button>
        </form>
      </div>
    </div>
  );
}

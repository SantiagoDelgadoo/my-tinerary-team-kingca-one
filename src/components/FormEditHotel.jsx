import React from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import hotelsAction from "../redux/actions/hotelsAction";

export default function FormEditShow() {
  const dispatch = useDispatch();
  const id = useRef();
  const name = useRef();
  const photo = useRef();
  const description = useRef();
  const capacity = useRef();
  const {} = hotelsAction;

  let edit = (show) => {
    show.preventDefault();
    let editHotel = {
      id: id.current.value,
      info: {
        name: name.current.value,
        description: description.current.value,
        photo: photo.current.value,
        capacity: capacity.current.value,
      },
    };
    dispatch(hotelsAction.editHotelAdmin(editHotel));
  };
  return (
    <div className="containerFormShow">
      <div className="formEdit">
        <h4 className="subtituloSignUpEdit">
          <span className="colorNaranjaDeLinea">|</span>Edit
        </h4>
        <form>
          <label className="labelEdit">
            ID
            <input
              ref={id}
              className="inputSignUp"
              type="text"
              placeholder="Enter ID"
            />
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
            Description
            <input
              ref={description}
              className="inputSignUp"
              type="text"
              placeholder="Enter Description"
            />
          </label>
          <label className="labelEdit">
            Capacity
            <input
              ref={capacity}
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
          <button onClick={edit} className="botonSubmit">
            Edit
          </button>
        </form>
      </div>
    </div>
  );
}

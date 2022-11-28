import React from "react";
import { useRef } from "react";
import { useDispatch,useSelector } from "react-redux";
import hotelsAction from "../redux/actions/hotelsAction";

export default function FormEditShow() {
  const dispatch = useDispatch();
  const { token } = useSelector((store) => store.userReducer);
  const id = useRef();
  const name = useRef();
  const photo = useRef();
  const description = useRef();
  const capacity = useRef();
  const form = useRef();
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
      token:token,
    };
    dispatch(hotelsAction.editHotelAdmin(editHotel));
    form.current.reset();
  };
  return (
    <div className="containerFormShow">
      <div className="formEdit">
        <h4 className="subtituloSignUpEdit">
          <span className="colorNaranjaDeLinea">|</span>Edit your Hotels
        </h4>
        <form ref={form}>
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
          <button onClick={edit} className="botonSubmitEditHotel">
            Edit
          </button>
        </form>
      </div>
    </div>
  );
}

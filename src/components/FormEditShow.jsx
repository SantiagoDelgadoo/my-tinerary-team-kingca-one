import React from "react";
import { useRef } from "react";
import { useDispatch,useSelector } from "react-redux";
import showAction from "../redux/actions/showAction";

export default function FormEditShow() {
  const dispatch = useDispatch();
  const id = useRef();
  const name = useRef();
  const photo = useRef();
  const description = useRef();
  const price = useRef();
  const date = useRef();
  const form = useRef();
  const {} = showAction;
  const {token } = useSelector((store) => store.userReducer);

  let edit = (show) => {
    show.preventDefault();
    let editShow = {
      id: id.current.value,
      info: {
        name: name.current.value,
        description: description.current.value,
        date: date.current.value,
        photo: photo.current.value,
        price: price.current.value,
      }
      ,token:token,
    };
    dispatch(showAction.editShowUser(editShow));
    form.current.reset();
  };
  return (
    <div className="containerFormShow">
      <div className="formEdit">
        <h4 className="subtituloSignUpEdit">
          <span className="colorNaranjaDeLinea">|</span>Edit your Shows
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
          <button onClick={edit} className="botonSubmitEditHotel">
            Edit
          </button>
        </form>
      </div>
    </div>
  );
}

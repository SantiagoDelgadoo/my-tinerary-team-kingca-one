import React from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import showAction from "../redux/actions/showAction";

export default function FormEditShow() {
  const dispatch=useDispatch()
  const id =useRef()
  const name =useRef()
  const photo =useRef()
  const description =useRef()
  const price =useRef()
  const date =useRef()
  const {}= showAction;

  let edit = (show) => {
    show.preventDefault ()
    let editShow = {
        id:id.current.value,
        info:{ 
          name:name.current.value,
          description:description.current.value,
          photo:photo.current.value,
          price:price.current.value,
/*           userId:"636e68db00607058e7cf0bac",
          hotelId:"636d5ff16abdddfa7405ab46" */}
    }
    dispatch(showAction.editShowUser(editShow))
  }
  return (
    <div className="containerFormShow">
      <div className="formEdit">
        <h4 className="subtituloSignUpEdit">
          <span className="colorNaranjaDeLinea">|</span>Edit
        </h4>
        <form /* ref={form} onSubmit= {newUser} */>
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
              type="text"
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
          <button onClick={edit}  className="botonSubmit">Edit</button>
        </form>
      </div>
    </div>
  );
}
import React from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import userActions from "../redux/actions/userActions";
import Swal from "sweetalert2";

export default function FormEditShow() {
  const dispatch = useDispatch();
  const name = useRef();
  const lname = useRef();
  const age = useRef();
  const photo = useRef();
  const form = useRef();
  let { id } = useSelector((store) => store.userReducer);

  let edit = (show) => {
    show.preventDefault();
    let editUser = {
      id: id,
      info: {
        name: name.current.value,
        lastName: lname.current.value,
        photo: photo.current.value,
        age: age.current.value,
      },
    };
    Swal.fire({
      title: "Are you sure to edit your Profile?",
      imageUrl:
        "https://img.freepik.com/premium-vector/white-exclamation-mark-sign-red-circle-isolated-white-background_120819-332.jpg?w=2000",
      width: "25rem",
      padding: "2rem",
      showCancelButton: true,
      confirmButtonColor: "#ea5318",
      cancelButtonColor: "#5e5b5b",
      confirmButtonText: "Yes, edit it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "The profile has been update",
          imageUrl: "https://cdn-icons-png.flaticon.com/128/7807/7807573.png",
          width: "25rem",
          padding: "2rem",
        });
        dispatch(userActions.editUser(editUser, id));
        form.current.reset();
      }
    });
  };
  return (
    <div className="containerFormUser">
      <h4 className="subtituloSignUpEdit">
        <span className="colorNaranjaDeLinea">|</span>Edit your Profile
      </h4>
      <form ref={form} className="formUser">
        <label className="labelEditUser">
          First Name
          <input
            ref={name}
            className="inputSignUp"
            type="text"
            placeholder="Enter First"
          />
        </label>

        <label className="labelEditUser">
          Last Name
          <input
            ref={lname}
            className="inputSignUp"
            type="text"
            placeholder="Enter Last Name"
          />
        </label>
        <label className="labelEditUser">
          Age
          <input
            ref={age}
            className="inputSignUp"
            type="number"
            placeholder="Enter Age"
          />
        </label>

        <label className="labelEditUser">
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
  );
}

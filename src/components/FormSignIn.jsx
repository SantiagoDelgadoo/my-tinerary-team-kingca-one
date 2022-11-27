import React from "react";
import "../App.css";
import { Navigate, NavLink, useNavigate} from "react-router-dom";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2/dist/sweetalert2.js";
import userActions from "../redux/actions/userActions";

export default function SignIn() {
  let mail = useRef()
  let pass = useRef()
  let form = useRef()
  const dispatch = useDispatch();
  const { login} = userActions;
  const navigate = useNavigate()
 
  async function User(data) {
    data.preventDefault();
    let User = {
      email: mail.current.value,
      password: pass.current.value,
    };
    try{
      let res = await dispatch (login(User))
      if (res.payload.response.success){
        Swal.fire({
          title: "WELCOME",
          imageUrl:
            "https://img.freepik.com/premium-vector/white-exclamation-mark-sign-red-circle-isolated-white-background_120819-332.jpg?w=2000",
          width: "25rem",
          padding: "2rem",
        })
        navigate("/")
      }else{
        Swal.fire({
          title: "Email or Password invalid",
          imageUrl:
            "https://img.freepik.com/premium-vector/white-exclamation-mark-sign-red-circle-isolated-white-background_120819-332.jpg?w=2000",
          width: "25rem",
          padding: "2rem",
        })
      }
    }
    catch(error){
     
    }
    form.current.reset();
  }
  return (
    <>
      <div className="containerForm">
        <form ref={form} onSubmit={User}>
          <label>
            Email
            <input
              ref={mail}
              className="inputSignUp"
              type="text"
              placeholder="Enter your email"
            />
          </label>
          <label>
            Password
            <input
              ref={pass}
              className="inputSignUp"
              type="password"
              placeholder="Enter your password"
            />
          </label>
          <button className="botonSubmit">Sign In</button>
        </form>
        <NavLink to="/signingoogle">
          <button className="botonSubmit">Sign in with Google</button>
        </NavLink>
      </div>
      <div className="ContainerBotonesSingUp">
        <h4 className="subtituloSignUp">
          {" "}
          <span className="colorNaranjaDeLinea">|</span> You do not have an
          account?
        </h4>
        <NavLink to="/signup">
          <button className="botonSignIn">Sign Up</button>
        </NavLink>
      </div>
    </>
  );
}

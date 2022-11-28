import axios from "axios";
import React from "react";
import { json, NavLink } from "react-router-dom";
import NavBar from "../components/NavBar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";


export default function SignUp() {

    let fName = React.useRef ()
    let lName = React.useRef ()
    let mail = React.useRef ()
    let pass = React.useRef ()
    let form = React.useRef ()
    let photo = React.useRef ()
    let age = React.useRef ()

    function newUser (evento){
        evento.preventDefault()
        console.log(lName.current);
    
        let datosOfNewUser = {
            name: fName.current.value,
            lastName: lName.current.value,
            email: mail.current.value,
            password: pass.current.value,
            photo: photo.current.value,
            age: age.current.value,
            role: 'user'
        } 
    
        axios
        .post ("http://localhost:8000/api/auth/sign-up", datosOfNewUser) //de tipo post, el cual me va a pedir 2 parametros la url y mi objeto q quiero q postee
        .then((Response)=>{
            
            if (Response.data.success === false) {
                Response.data.message.map((message) =>
                  toast.error(`${message}`, {
                    position: "bottom-left",
                    autoClose: false,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                  })
                );
              }
        else {
            Swal.fire({
                title: "The account was created, please check your mail.",
                imageUrl: "https://cdn-icons-png.flaticon.com/128/7807/7807573.png",
                width: "25rem",
                padding: "2rem",
              });
            form.current.reset ()
            }
            })     
    }

  return (
    <div className= "ContainerDeSignUp">
    <div className="containerSingup">
        <div className="containerForm">
                    <h4 className="subtituloSignUp"><span className="colorNaranjaDeLinea">|</span> Create your account</h4>
                <form ref={form} onSubmit= {newUser}>  
                    <label className="labelSignUp">First Name
                        <input className="inputSignUp"  ref={fName} type="text" placeholder="Enter your first name"/>
                    </label>

                    <label className="labelSignUp">Last Name
                        <input className="inputSignUp" ref={lName} type="text" placeholder="Enter your last name"/>
                    </label>

                    <label className="labelSignUp">Age
                        <input className="inputSignUp" ref={age} type="text" placeholder="Enter your age"/>
                    </label>

                    <label className="labelSignUp">Email
                        <input className="inputSignUp"  ref={mail} type="text" placeholder="Enter your email"/>
                    </label>

                    <label className="labelSignUp">Photo
                        <input className="inputSignUp" ref={photo} type="text" placeholder="Enter your photo"/>
                    </label>

                    <label className="labelSignUp">Password
                        <input className="inputSignUp"  ref={pass} type="password" placeholder="Enter your password"/>
                    </label>
                    <button className="botonSubmit">Send</button>
                </form>
        </div>
            <div className="ContainerBotonesSingUp">
                <h4 className="subtituloSignUp"> <span className="colorNaranjaDeLinea">|</span> Already have an account?</h4>
                <NavLink to="/signin">
                <button className="botonSignIn">Sign in with account</button>
                </NavLink>
                <NavLink to="/signingoogle">
                <button className="botonSignIn">Sign in with Google</button>
                </NavLink>
                <ToastContainer></ToastContainer>
            </div>
    </div>
    </div>
);
}

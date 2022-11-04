import React from "react";
import { json, NavLink } from "react-router-dom";
import NavBar from "../components/NavBar";

export default function SignUp() {

    let fName = React.useRef ()
    let lName = React.useRef ()
    let mail = React.useRef ()
    let pass = React.useRef ()
    let form = React.useRef ()
    function newUser (evento){
        evento.preventDefault()
        console.log(lName.current);
    
        let datosOfNewUser = {
            Fname: fName.current.value,
            lName: lName.current.value,
            mail: mail.current.value,
            pass: pass.current.value
        } 
    
        localStorage.setItem ("datosOfNewUser",JSON.stringify(datosOfNewUser))
        form.current.reset()
    }

  return (
    <div className= "FirstContainer">
    <div className="containerSingup">
        <div className="containerForm">
                    <h4 className="subtituloSignUp"><span className="colorNaranjaDeLinea">|</span> Create your account</h4>
                <form ref={form} onSubmit= {newUser}>  
                    <label>First Name
                        <input ref={fName} type="text" placeholder="Enter your first name"/>
                    </label>

                    <label>Last Name
                        <input ref={lName} type="text" placeholder="Enter your last name"/>
                    </label>

                    <label>Email
                        <input ref={mail} type="text" placeholder="Enter your email"/>
                    </label>

                    <label>Password
                        <input ref={pass} type="password" placeholder="Enter your password"/>
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

            </div>
    </div>
    </div>
);
}

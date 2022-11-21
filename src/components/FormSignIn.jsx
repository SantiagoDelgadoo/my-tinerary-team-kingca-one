import React from 'react'
import '../App.css'
import { NavLink } from 'react-router-dom'

export default function SignIn() {
  let mail = React.useRef ()
  let pass = React.useRef ()
  let form = React.useRef ()
  function User (evento){
      evento.preventDefault()
  
      let User = {
          mail: mail.current.value,
          pass: pass.current.value
      } 
      localStorage.setItem ("User",JSON.stringify(User))
      form.current.reset()
  }
    return (
        <>
         <div className="containerForm">
                  <form ref={form} onSubmit= {User}>  
                      <label>Email
                          <input ref={mail} className="inputSignUp" type="text" placeholder="Enter your email"/>
                      </label>
                      <label>Password
                          <input ref={pass} className="inputSignUp" type="password" placeholder="Enter your password"/>
                      </label>
                      <button className="botonSubmit">Sign In</button>
                  </form>
                  <NavLink to="/signingoogle">
                  <button className="botonSubmit">Sign in with Google</button>
                  </NavLink>
          </div>
              <div className="ContainerBotonesSingUp">
                  <h4 className="subtituloSignUp"> <span className="colorNaranjaDeLinea">|</span> You do not have an account?</h4>
                  <NavLink to="/signup">
                  <button className="botonSignIn">Sign Up</button>
                  </NavLink>
              </div>
        </>
         
  )
}

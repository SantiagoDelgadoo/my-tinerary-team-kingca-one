import React from "react";
import { useRef } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function NewCity() {
  const navigate = useNavigate();
  let postCity = async function (city) {
    //creo funcion async xq tiene que esperar, le paso un objeto (city)
    axios //peticion de axios
      .post("http://localhost:8000/api/city/", city) //de tipo post, el cual me va a pedir 2 parametros la url y mi objeto q quiero q postee
      .then((Response) => {
        console.log(Response.data.message); //despues de hacer eso si se creo exitosamente el .then devuelve una respuesta exitosa
        if (Response.data.success == false) {
          Response.data.message.map((message) =>
            toast.error(`${message}`, {
              position: "bottom-left",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              progress: undefined,
              theme: "light",
            })
          );
        } else {
          toast.success(
            `${Response.data.new_city.name} has created successfuly`,
            {
              position: "bottom-left",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              progress: undefined,
              theme: "light",
            }
          );
          setTimeout(function () {
            navigate(`/details/${Response.data.new_city._id}`);
          }, 3250);
        }
      })

      .catch((Error) => console.log(Error)); //si no devuelve una respuesta exitosa, va a devolver error
  };
  let { id } = useSelector((store) => store.userReducer);
  let NewCityForm = useRef();
  let submit = (e) => {
    e.preventDefault();
    let NewCity = {
      name: e.target[0].value,
      continent: e.target[1].value,
      photo: e.target[2].value,
      population: e.target[3].value,
      userid: id,
    };
    postCity(NewCity);
    NewCityForm.current.reset();
    console.log(NewCity);
  };
  return (
    <div>
      <div className="containerNewCity">
        <form
          ref={NewCityForm}
          onSubmit={submit}
          className="containerFormCities">
            
          <label className="labelNewCity">
            {" "}
            Name of city
            <input
              className=".inputSignUp"
              type="text"
              placeholder="Enter name of city"
            />
          </label>

          <label className="labelNewCity">
            {" "}
            Continent
            <input
              className=".inputSignUp"
              type="text"
              placeholder="Enter Continent"
            />
          </label>

          <label className="labelNewCity">
            {" "}
            Photo
            <input
              className=".inputSignUp"
              type="text"
              placeholder="Enter photo"
            />
          </label>

          <label className="labelNewCity">
            {" "}
            Population
            <input
              className=".inputSignUp"
              type="text"
              placeholder="Enter population"
            />
          </label>
          <button className="botonSubmit">Send</button>
        </form>
      </div>

      <ToastContainer
        position="bottom-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="light"
      />
    </div>
  );
}

import React, { useEffect } from 'react'
import CardCity from '../components/CardCity'
import FormEditCities from '../components/FormEditCities'
import { useDispatch, useSelector } from 'react-redux'
import citiesAction from '../redux/actions/citiesAction'
import Swal from "sweetalert2";


export default function MyCities() {
  const dispatch = useDispatch() //dispatch sirve para despachar acciones, adentro de los () se pasa la accion q cree de redux y si le quiero pasar algo mas a esa accion se pasa como data
  const cities = useSelector((store)=>store.citiesReducer.listCities)
  console.log(cities);
  const {getMyCities, deleteMyCities} = citiesAction
  useEffect (()=>{
    dispatch (getMyCities())
  },[])
  console.log(cities);
  const Delete = async ()=>{
  dispatch (deleteMyCities())
  }


  return (
    <>
    <div className="ContainerHeaderCitiesBici">
        <div className="TitulosDeCities">
          <h3 className="subtituloCities">Here you will be able to create cities to your liking</h3>
          <h1 className="tituloCities">
            <span className="colorNaranjaDeLinea">| </span>HERE YOU CAN SEE THE CITIES CREATED
          </h1>
        </div>
      </div>
      <div className="containerSearchCheck"> 
      <label className="containerSearchcities">
      </label>
    </div>
    <div className='divDelForm'>
    <FormEditCities></FormEditCities>
  
    <h3 className="subtituloCities"><span className="colorNaranjaDeLinea">| </span>My cities</h3>
      <div className="myshowsContainer">
        {cities.map((event) => {
          const Delete = async ()=>{

            Swal.fire({
              title: "Are you sure to delete this tinerary?",
              imageUrl: "https://img.freepik.com/premium-vector/white-exclamation-mark-sign-red-circle-isolated-white-background_120819-332.jpg?w=2000",
              width: "25rem",
              padding: "2rem",
              showCancelButton: true,
              confirmButtonColor: "#ea5318",
              cancelButtonColor: "#5e5b5b",
              confirmButtonText: "Yes, delete it!",
            }).then((result) => {
              if (result.isConfirmed) {
                Swal.fire({
                  title: "The tinerary has deleted",
                  imageUrl: "https://cdn-icons-png.flaticon.com/128/7807/7807573.png",
                  width: "25rem",
                  padding: "2rem",
                });
                 dispatch (deleteMyCities({id:event._id})) 
            }
            });  
        }
          return (
            <div className="cardMyshowEditContainer">
              <div className="cardDetailsEvent">
                <div className="cardPhotoEvents">
                  <img src={event.photo} alt="" />
                </div>
                <div className="cardTextEvents">
                  <h2>{event.name}</h2>              
                  <p>
                      <span>ID: </span>
                      {event._id}
                    <button onClick={Delete} className='botonDeDelete'>Delete</button>
                    </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      </div>
    </>
  )
}


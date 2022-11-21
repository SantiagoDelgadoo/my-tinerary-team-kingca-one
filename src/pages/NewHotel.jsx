import React from 'react'
import { useRef } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate } from 'react-router'


export default function NewHotel() {
    let NewPlaceForm = useRef()
    let navigate = useNavigate()

    let postHotel = async function (hotel){
        axios
        .post ('http://localhost:8000/api/hotel/',hotel)
        .then ((Response)=>{
            if (Response.data.success){
                toast.success("Hotel created", {
                    position: "bottom-left",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    });
                    setTimeout(function () {
                        console.log(Response);
                        navigate(`/detailsHotel/${Response.data.response._id}`);
                      }, 3000)

            }else{
               Response.data.message.map((ms)=>{
                    toast.error(`${ms}`, {
                        position: "bottom-left",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                        });
                })
    
            }
    
        })
        .catch((Error)=>console.log(Error))
    }
    let submit = (place) => {
        place.preventDefault ()
        let NewPlace = {
            name:place.target[0].value,
            description:place.target[1].value,
            photo:place.target[2].value,
            capacity:place.target[3].value,
            userId:"636d39111834aa8ba98269f2",
            cityId:"636d5c20033f2a5f173b112e"
        }
        postHotel(NewPlace)
        NewPlaceForm.current.reset ()
        console.log(NewPlace);
    }
  return (
    <div>
    <ToastContainer />
    <div className='containerNewPlace'>
    <form ref={NewPlaceForm} onSubmit={submit} className='containerFormPlace'>

        <label> Name of Place
            <input type="text" placeholder="Enter name of Place"/>
        </label>

        <label> Description
            <input type="text" placeholder="Enter Description"/>
        </label>

        <label> Photo
            <input type="text"  placeholder="Enter photo"/>
        </label>

        <label> Capacity
            <input type="text" placeholder="Enter Capacity"/>
        </label>
        <button className='botonSubmit'>Send</button>
        
        </form>
    </div>
    
</div>
  )
}

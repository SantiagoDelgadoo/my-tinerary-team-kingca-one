import axios from "axios";
import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import Swal from "sweetalert2";
import { base_url } from "../api/url";

export default function FormNewReaction() {
  let [itineries, setitineraries] = useState([]);
  useEffect(() => {
    async function petitionaxios() {
      const res = await axios.get(`${base_url}itinerary/`);
      setitineraries(res.data.id);
    }
    petitionaxios();
  }, []);

  let itineraryid = useRef();
  let name = useRef();
  let icon = useRef();
  let iconBack = useRef();

  async function petitionaxios2(e) {
    e.preventDefault();
    Swal.fire({
      title: "Are you sure to create this reaction?",
      imageUrl:
        "https://img.freepik.com/premium-vector/white-exclamation-mark-sign-red-circle-isolated-white-background_120819-332.jpg?w=2000",
      width: "25rem",
      padding: "2rem",
      showCancelButton: true,
      confirmButtonColor: "#ea5318",
      cancelButtonColor: "#5e5b5b",
      confirmButtonText: "Yes, create it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        let newReaction = {
          itineraryid: itineraryid.current.value,
          name: name.current.value + itineraryid.current.value,
          icon: icon.current.value,
          iconBack: iconBack.current.value,
          userId: [],
        };
        console.log(newReaction);
        const res = await axios.post(`${base_url}reaction/`, newReaction);
        console.log(res);
        if (res.data.success) {
          Swal.fire({
            title: "The reaction has created",
            imageUrl: "https://cdn-icons-png.flaticon.com/128/7807/7807573.png",
            width: "25rem",
            padding: "2rem",
          });
        } else {
          res.data.message.map((error) =>
            toast.error(`${error}`, {
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
        }
      }
    });
  }
  return (
    <div className="containerFormShow">
      <div className="formEdit">
        <h4 className="subtituloSignUpEdit">
          <span className="colorNaranjaDeLinea">| </span> Create your Reaction
        </h4>
        <form>
          <label className="labelEdit">
            ItineraryId
            <select ref={itineraryid}>
              <option value="">Select Tinerary</option>
              {itineries.map((itineries) => (
                <option key={itineries._id} value={itineries._id}>
                  {itineries.name}
                </option>
              ))}
            </select>
          </label>
          <label className="labelEdit">
            Name
            <input
              ref={name}
              className="inputItinery"
              type="text"
              placeholder="Enter name of reaction"
            />
          </label>
          <label className="labelEdit">
            Icon
            <input
              ref={icon}
              className="inputItinery"
              type="text"
              placeholder="Enter active icon of reaction"
            />
          </label>
          <label className="labelEdit">
            IconBack
            <input
              ref={iconBack}
              className="inputItinery"
              type="text"
              placeholder="Enter disable icon"
            />
          </label>
          <button onClick={petitionaxios2} className="botonSubmit">
            Send
          </button>
        </form>

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
    </div>
  );
}

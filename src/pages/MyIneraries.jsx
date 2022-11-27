import React, { useEffect } from "react";
import CardCity from "../components/CardCity";
import FormEditItinearies from "../components/FormEditItinearies";
import { useDispatch, useSelector } from "react-redux";
import itinerariesAction from "../redux/actions/itinerariesAction";
import Swal from "sweetalert2";
import FormCreateItineraries from "../components/FormCreateItineraries";

export default function MyIneraries() {
  let { id } = useSelector((store) => store.userReducer);

  const dispatch = useDispatch();
  const itineraries = useSelector(
    (store) => store.itineraryReducer.itinerariesUser
  );
  const { getItineraries, deleteItineraries } = itinerariesAction;
  useEffect(() => {
    dispatch(getItineraries(id));
  }, []);

  console.log(itineraries);
  const Delete = async () => {
    dispatch(deleteItineraries());
  };

  return (
    <>
      <div className="ContainerHeaderItineraries">
        <div className="TitulosDeCities">
          <h3 className="subtituloCities">
            Here you will be able to create your itineraries to your liking
          </h3>
          <h1 className="tituloCities">
            <span className="colorNaranjaDeLinea">| </span>HERE YOU CAN SEE THE
            ITINERARIES CREATED
          </h1>
        </div>
      </div>
      <div className="containerSearchCheck">
        <label className="containerSearchcities"></label>
      </div>
      <div className="divDelForm">
        <div className="formulariosDeItineraries">
        <FormEditItinearies></FormEditItinearies>
        <FormCreateItineraries></FormCreateItineraries>
        </div>
        <h3 className="subtituloCities">
          <span className="colorNaranjaDeLinea">| </span>My Itinearies
        </h3>
        <div className="myshowsContainer">
          {itineraries.map((event) => {
            const Delete = async () => {
              Swal.fire({
                title: "Are you sure to delete this tinerary?",
                imageUrl:
                  "https://img.freepik.com/premium-vector/white-exclamation-mark-sign-red-circle-isolated-white-background_120819-332.jpg?w=2000",
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
                    imageUrl:
                      "https://cdn-icons-png.flaticon.com/128/7807/7807573.png",
                    width: "25rem",
                    padding: "2rem",
                  });
                  dispatch(deleteItineraries({ id: event._id }));
                }
              });
            };

            return (
              <div className="cardMyshowEditContainer">
                <div className="cardDetailsEdit">
                  <div className="cardPhotoEdit">
                    <img src={event.photo} alt="" />
                  </div>
                  <div className="cardTextEdits">
                    <h2>{event.name}</h2>
                    <p>
                      <span>ID: </span>
                      {event._id}
                    </p>
                    <button onClick={Delete} className="botonDeDelete">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

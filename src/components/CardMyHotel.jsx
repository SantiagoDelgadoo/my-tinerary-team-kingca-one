import React from "react";
import { useEffect } from "react";
import hotelsAction from "../redux/actions/hotelsAction";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

export default function CardDetailsEvents() {
  const hotel = useSelector((store) => store.hotelReducer.hotelAdmin);
  const dispatch = useDispatch();
  let { id } = useSelector((store) => store.userReducer);
  console.log(id);
  const { getHotelAdmin} = hotelsAction;
  const { deleteHotelAdmin } = hotelsAction;
  useEffect(() => {
    dispatch(getHotelAdmin(id));
  }, []);

  return (
    <>
      <h3 className="subtituloCities">My Hotels</h3>
      <div className="myshowsContainer">
        {hotel.map((event) => {
          const Delete = () => {
            Swal.fire({
              title: "Are you sure to delete this Hotel?",
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
                  title: "The Hotel has deleted",
                  imageUrl:
                    "https://cdn-icons-png.flaticon.com/128/7807/7807573.png",
                  width: "25rem",
                  padding: "2rem",
                });
                dispatch(deleteHotelAdmin({ id: event._id }));
              }
            });
          };
          return (
            <div className="cardMyshowEditContainer">
              <div className="cardDetailsEdit">
                <div className="cardPhotoEdit">
                  <img src={event.photo[0]} alt="" />
                </div>
                <div className="cardTextEdits">
                  <h2>{event.name}</h2>
                  <p>
                    <span>Capacity: </span>
                    {event.capacity}
                  </p>
                  <p>
                    <span>Description: </span>
                    {
                      event.description
                      /* .slice(0, 10) */
                    }
                  </p>
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
    </>
  );
}

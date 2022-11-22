import React from "react";
import {useEffect } from "react";
import showAction from "../redux/actions/showAction";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

export default function CardDetailsEvents() {
  const shows = useSelector((store) => store.showsReducer.showUser);
  const dispatch = useDispatch();
  const {getShowUser} = showAction
  const {deleteShowUser} = showAction
  useEffect(() => {
      dispatch(getShowUser());
  }, []);

  return (
    <>
    <h3 className="subtituloCities">My Shows</h3>
      <div className="myshowsContainer">
        {shows.map((event) => {
              const Delete =()=>{
                
                Swal.fire({
                    title: "Are you sure to delete this Show?",
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
                        title: "The Show has deleted",
                        imageUrl: "https://cdn-icons-png.flaticon.com/128/7807/7807573.png",
                        width: "25rem",
                        padding: "2rem",
                      });
                      dispatch(deleteShowUser({id:event._id}))
                    }
                  });
              }
          return (
            <div className="cardMyshowEditContainer">
              <div className="cardDetailsEdit">
                <div className="cardPhotoEdit">
                  <img src={event.photo} alt="" />
                </div>
                <div className="cardTextEdits">
                  <h2>{event.name}</h2>
                  <div>
                    <p>
                      <span>Date: </span>
                      {event.date/* .slice(0, 10) */}
                    </p>
                    <p>
                      <span>Price: </span>
                      {event.price}
                    </p>
                  </div>
                  <p>
                      <span>ID: </span>
                      {event._id}
                    </p>
                    <button onClick={Delete} className='botonDeDelete'>Delete</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

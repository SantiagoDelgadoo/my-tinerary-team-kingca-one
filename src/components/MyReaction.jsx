import React from "react";
import { useDispatch, useSelector } from "react-redux";
import reactionsActions from "../redux/actions/reactionsActions";
import Swal from "sweetalert2/dist/sweetalert2.js";


export default function MyReaction(props) {
    const { token } = useSelector((store) => store.userReducer);
    let { _id, itineraryid } = props.reaction;
    const dispatch = useDispatch();
    const { deleteReaction } = reactionsActions;
  const deleteReactionsUser = (e) => {
    e.preventDefault();
    Swal.fire({
      title: `Are you sure to delete this reaction in ${itineraryid.name}`,
      imageUrl: "https://img.icons8.com/ios-glyphs/120/000000/break.png",
      width: "25rem",
      padding: "2rem",
      showCancelButton: true,
      confirmButtonColor: "#ff3648",
      cancelButtonColor: "#5e5b5b",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await dispatch(deleteReaction({ token, id: _id }));
        Swal.fire({
          title: "The reaction has deleted",
          imageUrl: "https://img.icons8.com/sf-regular/120/null/ok.png",
          width: "25rem",
          padding: "2rem",
        });
      }
    });
  };

  return (
    <div className='containerCards3'>
        <div id="container10">
        <div className='cardImg'>
      {/* <h2>{props.reaction.itineraryid.name}</h2> */}
      <h3 class="subtituloCitiesCard">{props.reaction.itineraryid.name}</h3>
      <img id="imgReaction2" src={props.reaction.itineraryid.photo} alt="" />
      </div>
      <button className="buttonDetailsCities43" onClick={deleteReactionsUser}>Delete</button>
      </div>
    </div>
    
  );
}

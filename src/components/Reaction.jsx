import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import reactionsActions from "../redux/actions/reactionsActions";
import Like from "./Like";


export default function Reaction(props) {
  const { id, token } = useSelector((store) => store.userReducer);
  const dispatch = useDispatch();
  let { itinerary } = props; 
  let { likeDislike } = reactionsActions; 
  let [allReactions, setReactionss] = useState([]);
  console.log(id);

  const { reactions } = reactionsActions; 
  console.log(itinerary);

  async function reactionsfunction() {
    const res = await dispatch(reactions({ id: itinerary, token: token })); 
    setReactionss(res.payload.reactions);
  }

  useEffect(() => {
    reactionsfunction(); 
  }, []);
console.log(itinerary);
  return (
    <div id="containerReactions">
      {allReactions.map(reaction => (
        <Like reaction={reaction}
        key={reaction._id}
        itineraryId={itinerary}>
          </Like>
      ))}
    </div>
  );
}

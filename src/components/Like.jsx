import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import reactionsActions from "../redux/actions/reactionsActions";
import { base_url } from "../api/url";

export default function Like(props) {
  const { id, token } = useSelector((store) => store.userReducer);
  let { reaction , itineraryId, setReload, reload } = props;
  let [reaction2, setReaction] = useState(reaction);
  const { likeDislike } = reactionsActions;

  const dispatch = useDispatch();

  const like = async (e) => {
    const res = await dispatch(
      likeDislike({
        token: token,
        id: itineraryId,
        name: reaction.name,
      })
    );
    setReaction(res.payload.reaction);
  };
  return (
    <div id="containerReactions">
      <p>{reaction2.userId.length}</p>
      <img id="imageReactionnn"
        onClick={like}
        src={reaction2?.userId.includes(id) ? reaction2.icon : reaction2.iconBack}
        alt={reaction2._id}
      />
    </div>
  );
}

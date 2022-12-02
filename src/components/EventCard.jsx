import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import commentAction from "../redux/actions/commentAction";
import { useDispatch, useSelector } from "react-redux";
import Comments from "../components/Comments";
import NewComment from "./NewComment";

export default function EventCard(props) {
  let { event } = props;
  console.log(event);
  let [seeComment, setSeeComment] = useState(false);
  const dispatch = useDispatch();
  const { getComments } = commentAction;
  let comments = useSelector((store) => store.commentReducer.listComment);
  console.log(comments);
  let change = () => {
    dispatch(getComments(event._id));
    setSeeComment(!seeComment);
  };
  

  const filteredComments = comments.filter(
    (comment) => comment.showId === event._id
  );
console.log(filteredComments);
  return (
    <>
      <div className="containerTotal">
        <div className="cardDetailsEvent">
          <div className="cardPhotoEvents">
            <img src={event.photo} alt="" />
          </div>
          <div className="cardTextEvents">
            <h2>{event.name}</h2>
            <div>
              <p>
                <span>Date: </span>
                {event.date.slice(0,10)}
              </p>
              <p>
                <span>Capacity: </span>
                {event.price}
              </p>
            </div>
            <button className="buttonComment" onClick={change}>
              Comment
            </button>
          </div>
        </div>
        {seeComment ? (
          <div className="containerComment">
            <div className="containerCreateComment">
            <NewComment event={event._id}></NewComment>
            </div>
            <div className="containerCommentaries">
              <h3>Comments</h3>
              <div className="comment">
                {filteredComments[0]?.arrayComment?.map((comment) => (
                  <Comments comment={comment} event={event}></Comments>
                ))}
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}

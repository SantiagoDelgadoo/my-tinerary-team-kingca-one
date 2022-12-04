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
  let [seeComment, setSeeComment] = useState(false);
  const dispatch = useDispatch();
  let [comments1, setComments] = useState([]);
  const { getComments } = commentAction;
  let comments = useSelector((store) => store.commentReducer.listComment);
  let update = useSelector((store) => store.commentReducer.update);
  let change = async () => {
    setSeeComment(!seeComment);
    const capurarComments = await dispatch(getComments(event._id));
    setComments(capurarComments.payload.listComment.arrayComment)
  };
  useEffect(()  => {
    async function peticionComment () {
      const capurarComments = await dispatch(getComments(event._id));
    setComments(capurarComments.payload.listComment.arrayComment)
    }
    peticionComment()
  }, [update]);
  console.log(comments1);
  const filteredComments = comments1.filter(
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
              <div className="comment">
                {filteredComments?.map((comment) => (
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

import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import places from "../data/places";
import Reaction from "./Reaction";
import { useDispatch, useSelector } from "react-redux";
import Comments from "../components/Comments";
import NewComment from "./NewComment";
import commentAction from "../redux/actions/commentAction";
export default function Hotel(props) {
  let { id } = useParams();
  let hotelCapture = places.find((place) => place.cityId === id);
  let { object } = props;
  let [seeComment, setSeeComment] = useState(false);
  const dispatch = useDispatch();
  let [comments1, setComments] = useState([]);
  const { getComments } = commentAction;
  let commentCheck = false;
  let update = useSelector((store) => store.commentReducer.update);
  let change = async () => {
    setSeeComment(!seeComment);
    const capurarComments = await dispatch(getComments(object._id));
    setComments(capurarComments.payload.listComment.arrayComment);
  };
  useEffect(() => {
    async function peticionComment() {
      const capurarComments = await dispatch(getComments(object._id));
      setComments(capurarComments.payload.listComment.arrayComment);
    }
    peticionComment();
  }, [update]);
  const filteredComments = comments1.filter(
    (comment) => comment.showId === object._id
  );
  if (filteredComments.length !== 0) {
    commentCheck = true;
  } else {
    commentCheck = false;
  }
  return (
    <div className="conteinarIti">
      <div className="cardDetails">
        <div className="fatherPhoto">
          <img
            src={object.photo}
            className="ImgDetails"
            alt="Image Of Cities"
          />
        </div>
        <div className="fatherDescription">
          <Reaction itinerary={object._id}></Reaction>
          <h3 className="titleCities">{object.name}</h3>
          <div className="desciptionIti">
          <p className="descriptionCities">{object.capacity}</p>
          <p className="descriptionCities">{object.description}</p>
          </div>
          <button className="buttonComment" onClick={change}>
            Comment
          </button>
        </div>
      </div>
      {seeComment ? (
        <div className="containerComment">
          <div className="containerCreateComment">
            <NewComment event={object._id}></NewComment>
          </div>
          {commentCheck ? (
            <div className="containerCommentaries">
              <div className="comment">
                {filteredComments?.map((comment) => (
                  <Comments comment={comment} event={object}></Comments>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}

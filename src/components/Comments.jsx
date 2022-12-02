import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import commentAction from "../redux/actions/commentAction";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
export default function Comments(props) {
  let { event, comment ,update,setUpdate} = props;
  console.log();
  const dispatch = useDispatch();
  let { token } = useSelector((store) => store.userReducer);
  const { deleteComment } = commentAction;
  let [checkEdit, setcheckEdit] = useState(false);
  let date = Date.now();
  const commentss = useRef();
  const form = useRef();
  let editBotton = () =>{
    setcheckEdit(!checkEdit);
  }
  console.log(comment);
  const Delete = () => {
    Swal.fire({
      title: "Are you sure to delete this Comment?",
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
          title: "The Comment has deleted",
          imageUrl: "https://cdn-icons-png.flaticon.com/128/7807/7807573.png",
          width: "25rem",
          padding: "2rem",
        });
        dispatch(deleteComment({ id: comment._id, token: token }));
        setUpdate(!update)
      }
    }).then ((l)=>{
        console.log(update);
        setUpdate(!update);
    });
  };
  let edit = (data) => {
    data.preventDefault();
    let editComment = {
      token: token,
      id:comment._id,
      data: {
        comment: commentss.current.value,
        date: date,
        showId: event._id,
      },
    };
    dispatch(commentAction.editComment(editComment));
    form.current.reset();
  };

  return (
    <div className="renglonGrande">
         <div className="renglonComment">
      <img
        src={comment.userId.photo}
        alt="foto de perfil"
        className="imgFotoComment"
      />
      <div className="comment2">
        <div className="botonesEditar">
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/128/860/860814.png"
              onClick={editBotton}
              alt="editar"
              className="imgeditar"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
              onClick={Delete}
              alt="eliminar"
              className="imgeditar"
            />
          </div>
        </div>
        <div className="textComment">
          <p>
            <span className="nombreComment">{comment.userId.name}:</span>{" "}
            {comment.comment}
          </p>
        </div>
      </div>
    </div>
    {checkEdit ? (
          <form ref={form} className="formCommentEdit2">
            <label className="labelEditComment2">
              <input
                ref={commentss}
                className="inputComment2"
                type="text"
                placeholder="Enter your comment"
              />
            </label>
            <button onClick={edit} className="botonSubmitEditHotel2">
              edit
            </button>
          </form>
        ) : null}
    </div>
   
  );
}

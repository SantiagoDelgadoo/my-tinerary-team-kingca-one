import React from 'react'
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import commentAction from "../redux/actions/commentAction";
import { useDispatch, useSelector } from "react-redux"
import Swal from "sweetalert2";
export default function Comments(props) {
    let {event,comment} = props
    console.log();
    const dispatch = useDispatch();
    let { token } = useSelector((store) => store.userReducer);
    const { deleteComment } = commentAction;
    let [checkEdit, setcheckEdit] = useState(false);

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
              imageUrl:
                "https://cdn-icons-png.flaticon.com/128/7807/7807573.png",
              width: "25rem",
              padding: "2rem",
            });
            dispatch(deleteComment({ id: comment._id,token:token }));
          }})}
          let date = Date.now();
          const commentss = useRef();
          const form = useRef();
          let edit = (comment) => {
            comment.preventDefault();
            let editComment = {
              token: token,
              data: {
                comment: commentss.current.value,
                date: date,
                showId: event._id,
              },
            };
            setcheckEdit(!checkEdit);
            dispatch(commentAction.editComment(editComment));
            form.current.reset();
          };
        
  return (
    <div className='comment2'>
        <div className='botonesEditar'>
        <img src="https://cdn-icons-png.flaticon.com/128/860/860814.png" onClick={edit} alt="editar" className='imgeditar'/>
        <img src="https://cdn-icons-png.flaticon.com/128/1214/1214428.png" onClick={Delete} alt="eliminar" className='imgeditar'/></div>
         <p>Comment:  {comment.comment}</p>  
    {checkEdit ? (
              <form ref={form} className="formComment">
              <label className="labelEditComment">
                Comment
                <input
                  ref={commentss}
                  className="inputComment"
                  type="text"
                  placeholder="Enter your comment"
                />
              </label>
              <button /* onClick={create} */ className="botonSubmitEditHotel">
                edit
              </button>
            </form>
         ): null} 
   </div>
  )
}

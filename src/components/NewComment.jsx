import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import commentAction from "../redux/actions/commentAction";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

export default function NewComment(props) {
  let { event } = props;
  const dispatch = useDispatch();
  let { token } = useSelector((store) => store.userReducer);
  let date = Date.now();
  const commentss = useRef();
  const form = useRef();
  let create = (comment) => {
    comment.preventDefault();
    let createComment = {
      token: token,
      data: {
        comment: commentss.current.value,
        date: date,
        showId: event,
      },
    };
    Swal.fire({
      title: "Are you sure to create this comment?",
      imageUrl:
        "https://img.freepik.com/premium-vector/white-exclamation-mark-sign-red-circle-isolated-white-background_120819-332.jpg?w=2000",
      width: "25rem",
      padding: "2rem",
      showCancelButton: true,
      confirmButtonColor: "#ea5318",
      cancelButtonColor: "#5e5b5b",
      confirmButtonText: "Yes, create it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "The Comment has created",
          imageUrl:
            "https://cdn-icons-png.flaticon.com/128/7807/7807573.png",
          width: "25rem",
          padding: "2rem",
        });
        dispatch(commentAction.createComment(createComment));
        form.current.reset();;
      }})

  };
  return (
    <>
      <form ref={form} className="formComment">
        <label className="labelEditComment">
          <textarea
            ref={commentss}
            className="inputComment"
            type="text"
            placeholder="Enter your comment"
          />
        </label>
        <button onClick={create} className="botonSubmitEditHotel">
          Comment
        </button>
      </form>
    </>
  );
}

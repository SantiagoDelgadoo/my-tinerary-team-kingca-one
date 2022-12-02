import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import commentAction from "../redux/actions/commentAction";
import { useDispatch, useSelector } from "react-redux";

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
        showId: event._id,
      },
    };
    dispatch(commentAction.createComment(createComment));
    form.current.reset();
  };
  return (
    <>
      <h3>Create Comment</h3>
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
        <button onClick={create} className="botonSubmitEditHotel">
          Create
        </button>
      </form>
    </>
  );
}

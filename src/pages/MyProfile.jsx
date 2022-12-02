import React, { useEffect } from "react";
import FormProfile from "../components/FormProfile";
import CardProfile from "../components/CardProfile";
import FormNewReaction from "../components/FormNewReaction";
import admin from "../data/admin";
import { useDispatch, useSelector } from "react-redux";
import userActions from "../redux/actions/userActions";
import reactionsActions from "../redux/actions/reactionsActions";
import MyReaction from "../components/MyReaction";
export default function MyShows() {
let dispatch = useDispatch ()

  let { role, id, token } = useSelector((store) => store.userReducer);
  const { getReactionsOfUser } = reactionsActions;
  const { allReactionsOfUser } = useSelector((store) => store.reactionsReducer);
  console.log(allReactionsOfUser);

  useEffect(() => {
    dispatch(getReactionsOfUser({ id, token }));
  }, []);
  console.log(allReactionsOfUser);
  return (
    <>
      <div className="containerProfile">
      <h4 className="subtituloSignUpEdit">
        <span className="colorNaranjaDeLinea">| </span>Edit your Profile
      </h4>
        <FormProfile />
        <CardProfile />
      </div>
      <div>
        {role==="admin"?<FormNewReaction></FormNewReaction>:null}
      </div>
      {allReactionsOfUser.map(reaction => <MyReaction reaction={reaction}></MyReaction>)}
    </>
  );
}

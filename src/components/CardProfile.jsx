import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import userActions from "../redux/actions/userActions";
export default function CardHotels() {
  let { id } = useSelector((store) => store.userReducer);
  console.log(id);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userActions.getUser(id));
  }, []);
  const userData = useSelector((store) => store.userReducer);
  console.log(userData);
  return (
    <>
      <div className="containerCardsProfile" key={userData._id}>
        <img src={userData.photo} alt="photo of Place" />
        <div>
          {" "}
          <p>Name:</p>
          <h3 className="">{userData.name}</h3>
        </div>
        <div>
          {" "}
          <p>Last Name</p>
          <h3 className="">{userData.lname}</h3>
        </div>
        <div>
          {" "}
          <p>Age:</p>
          <h3 className="">{userData.age}</h3>
        </div>
        <div>
          {" "}
          <p>Email:</p>
          <h3 className="">{userData.email}</h3>
        </div>
      </div>
    </>
  );
}

import logo from "./logo.svg";
import "./data/users";
import "./data/cities";
import "./data/activities";
import "./data/admin";
import "./data/places";
import "./data/events";
import Main from "./layouts/Main";
import { Routes, Route } from "react-router-dom";
import AutoToTop from "./components/AutoToTop";
import NotFound from "./pages/NotFound";
import Welcome from "./pages/Welcome";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Hotels from "./pages/Hotels";
import Cities from "./pages/Cities";
import NewCity from "./pages/NewCity";
import DetailsHotel from "./pages/DetailsHotel";
import DetailsCities from "./pages/DetailsCities";
import NewHotel from "./pages/NewHotel";
import MyCities from "./pages/MyCities";
import MyProfile from "./pages/MyProfile";
import MyShows from "./pages/MyShows";
import MyIneraries from "./pages/MyIneraries";
import MyHotels from "./pages/MyHotels";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import userActions from "./redux/actions/userActions";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  let { logged, role } = useSelector((store) => store.userReducer);
  const { reIngress } = userActions;
  const dispatch = useDispatch();

  useEffect(() => {
    let token = JSON.parse(localStorage.getItem("token"));
    if (token) {
      dispatch(reIngress(token.token.user));
    }
  }, []);
  console.log(logged);
  console.log(role);
  return (
    <Main>
      <AutoToTop></AutoToTop>
      <Routes>
        <Route path="" element={<Welcome />}></Route>
        <Route path="/home" element={<Welcome />}></Route>
        <Route path="*" element={<NotFound />}></Route>
        <Route path="/hotels" element={<Hotels />}></Route>
        <Route path="/cities" element={<Cities />}></Route>
        <Route path="/details/:id" element={<DetailsCities />}></Route>
        <Route path="/detailsHotel/:id" element={<DetailsHotel />}></Route>
        <Route element={<ProtectedRoute isAllowed={!logged} reDirect={"/"} />}>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
        </Route>
        <Route element={<ProtectedRoute isAllowed={!!logged} reDirect={"/"} />}>
          <Route path="/myshows" element={<MyShows />}></Route>
          <Route path="/myitineraries" element={<MyIneraries />}></Route>
          <Route path="/myprofile" element={<MyProfile />}></Route>

          <Route
            path="/newcity"
            element={
              <ProtectedRoute
                isAllowed={!!logged && role === "admin"}
                reDirect={"/"}
              >
                <NewCity />
              </ProtectedRoute>
            }
          />

          <Route
            path="/newhotel"
            element={
              <ProtectedRoute
                isAllowed={!!logged && role === "admin"}
                reDirect={"/"}
              >
                <NewHotel />
              </ProtectedRoute>
            }
          />

          <Route
            path="/mycities"
            element={
              <ProtectedRoute
                isAllowed={!!logged && role === "admin"}
                reDirect={"/"}
              >
                <MyCities />
              </ProtectedRoute>
            }
          />

          <Route
            path="/myhotels"
            element={
              <ProtectedRoute
                isAllowed={!!logged && role === "admin"}
                reDirect={"/"}
              >
                <MyHotels />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </Main>
  );
}
export default App;

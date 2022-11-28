import { Navigate } from "react-router";
import { Outlet } from "react-router";

export default function ProtectedRoute({ isAllowed, children, reDirect }) {
  if (!isAllowed) {
    return <Navigate to={reDirect} />;
  }
  return children ? children : <Outlet />;
}

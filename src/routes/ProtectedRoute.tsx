import { Navigate } from "react-router-dom";

type ProtectedRoutesProps = {
  children: any;
  isLoggedIn: boolean;
};

export default function ProtectedRoute({
  children,
  isLoggedIn,
}: ProtectedRoutesProps): any {
  return isLoggedIn ? children : <Navigate to={"/login"} />;
}

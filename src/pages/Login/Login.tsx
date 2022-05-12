import { Authenticator } from "@aws-amplify/ui-react";
import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

export default function Login() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <>
      {isLoggedIn ? (
        <Navigate to="/" />
      ) : (
        <React.Fragment>
          <Authenticator />
        </React.Fragment>
      )}
    </>
  );
}

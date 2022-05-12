import { useAuthenticator } from "@aws-amplify/ui-react";
import React, { useEffect, useState } from "react";
import { ChildrenProps } from "../types/types";

export const AuthContext = React.createContext<any>(null);

const AuthProvider = ({ children }: ChildrenProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>();
  const { authStatus } = useAuthenticator((context) => [context.authStatus]);
  const { signOut } = useAuthenticator((context) => [context.user]);

  const logOut = () => {
    setIsLoggedIn(false);
    signOut();
    console.log(authStatus);
  };

  useEffect(() => {
    switch (authStatus) {
      case "authenticated":
        setIsLoggedIn(true);
        break;
      case "unauthenticated":
        setIsLoggedIn(false);
        break;
      default:
        break;
    }
  }, [authStatus]);

  return (
    <AuthContext.Provider value={{ isLoggedIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

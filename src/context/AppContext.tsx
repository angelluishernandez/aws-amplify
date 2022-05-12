import { Authenticator } from "@aws-amplify/ui-react";
import React from "react";
import { ChildrenProps } from "../types/types";
import AuthProvider from "./AuthProvider";
import ErrorProvider from "./ErrorContext";
import IncrementProvider from "./IncrementContext";
import TodoProvider from "./TodoContext";

export const AppContext = React.createContext<any>(null);

// This component was created to create in order to simplify the use of providers
// and avoid nested providers in the app components

const AppProvider = ({ children }: ChildrenProps) => {
  return (
    <Authenticator.Provider>
      <AuthProvider>
        <ErrorProvider>
          <IncrementProvider>
            <TodoProvider>{children}</TodoProvider>
          </IncrementProvider>
        </ErrorProvider>
      </AuthProvider>
    </Authenticator.Provider>
  );
};

export default AppProvider;

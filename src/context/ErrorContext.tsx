import React, { useState } from "react";
import { ChildrenProps, Error } from "../types/types";

type onNewErrorArgs = {
  errorText: string;
  errorCode?: number;
};

export const ErrorContext = React.createContext<any>(null);

const ErrorProvider = ({ children }: ChildrenProps) => {
  const [error, setError] = useState<Error | null>(null);

  const onNewError = ({ errorText, errorCode }: onNewErrorArgs): void => {
    setError({ errorText, errorCode });

    console.log(error);
    setTimeout(() => {
      deleteError();
    }, 4000);
  };

  const deleteError = () => setError(null);

  return (
    <ErrorContext.Provider value={{ error, onNewError, deleteError }}>
      {children}
    </ErrorContext.Provider>
  );
};

export default ErrorProvider;

import { Container } from "@mui/material";
import React, { useContext } from "react";
import { ErrorContext } from "../../context/ErrorContext";
import { ChildrenProps } from "../../types/types";
import ErrorToast from "../ErrorToast/ErrorToast";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

export default function Layout({ children }: ChildrenProps) {
  const { error, deleteError } = useContext(ErrorContext);

  return (
    <React.Fragment>
      <Navbar />
      <Container maxWidth="lg" sx={{ paddingTop: "20px" }}>
        {children}
      </Container>
      <Footer />
      {error && (
        <ErrorToast
          errorText={error.errorText}
          handleCloseClick={deleteError}
          open={!!error}
        />
      )}
    </React.Fragment>
  );
}

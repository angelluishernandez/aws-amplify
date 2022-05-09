import { Container } from "@mui/material";
import React from "react";
import { ChildrenProps } from "../../types/types";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

export default function Layout({ children }: ChildrenProps) {
  return (
    <React.Fragment>
      <Navbar />
      <Container maxWidth="lg" sx={{ paddingTop: "20px" }}>
        {children}
      </Container>
      <Footer />
    </React.Fragment>
  );
}

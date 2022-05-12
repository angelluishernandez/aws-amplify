import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import About from "../pages/CreateTodo/CreateTodo";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SingleTodo from "../pages/SingleTodo/SingleTodo";
import ProtectedRoute from "./ProtectedRoute";

export default function RouterConfig() {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/create-todo"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <About />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/todo/:id"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <SingleTodo />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

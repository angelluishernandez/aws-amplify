import { Route, Routes } from "react-router-dom";
import About from "../pages/CreateTodo/CreateTodo";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SingleTodo from "../pages/SingleTodo/SingleTodo";

export default function RouterConfig() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-todo" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/todo/:id" element={<SingleTodo />} />
      </Routes>
    </>
  );
}

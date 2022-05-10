import { Route, Routes } from "react-router-dom";
import About from "../pages/CreateTodo/CreateTodo";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";

export default function RouterConfig() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-todo" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

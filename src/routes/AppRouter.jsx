import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Auth } from "../Auth/Auth";
import { Register } from "../Auth/Register";
import { Home } from "../Views/Home";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Auth />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/home" element={<Home />}></Route>
    </Routes>
  );
};

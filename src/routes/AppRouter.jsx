import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Auth } from "../Auth/Auth";
import { Register } from "../Auth/Register";
import { Home } from "../Views/Home";
import { Inicio } from "../Views/Inicio";
import { Profile } from "../Views/Profile";
import { Patients } from "../Views/Patients";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Inicio />}></Route>
      <Route path="/login" element={<Auth />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/profile" element={<Profile />}></Route>
      <Route path="/pacientes" element={<Patients />}></Route>
    </Routes>
  );
};

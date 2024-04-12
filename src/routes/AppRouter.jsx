import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Auth } from "../Auth/Auth";
import { Register } from "../Auth/Register";
import { Home } from "../Views/Home";
import { Inicio } from "../Views/Inicio";
import { Profile } from "../Views/Profile";
import { Patients } from "../Views/Patients";
import { Welcome } from "../Views/Welcome";
import { useEffect } from "react";
import { tokenAuth } from "../store/apis/localApi";
import { useDispatch } from "react-redux";
import { login } from "../store/auth/authSlice";
import { Cita } from "../Views/Patiens/Cita";
export const AppRouter = () => {
  const dispatch = useDispatch();
  useEffect(() => {
  const token = JSON.parse(localStorage.getItem('datos'))
  console.log(token)
  tokenAuth(token?.token);
  dispatch(login(token));

  
  }, []);
  
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/login" element={<Auth />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/pacientes" element={<Patients />} />
      <Route path="/cita" element={<Cita />} />
    </Routes>
  );
};

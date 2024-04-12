import { createSlice } from "@reduxjs/toolkit";
import { tokenAuth } from "../apis/localApi";
import { cancel } from "./authSlice";

export const patientSlice = createSlice({
  name: "patient",
  initialState: {
    loading:false,
    status: false,
  patient: []
  },
  reducers: {
    getPatients: (state, { payload }) => {
      state.patient=payload.data,
      state.loading=false
    },
    addPat: (state, { payload }) => {
state.loading = false,
state.patient = [...state.patient, payload.data]
    },
    deletePat: (state, { payload }) => {
      state.patient = state.patient.filter((item) => item.id !== payload.id);
    },
    loadP: (state) => {
        state.loading = true;
      },
      cancelP:(state,payload)=>{
        state.loading = false
      }
   
  },
});

export const { getPatients, addPat, deletePat,loadP,cancelP } = patientSlice.actions;

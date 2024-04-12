import { createSlice } from "@reduxjs/toolkit";
import { tokenAuth } from "../apis/localApi";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    loading:false,
    status: false,
    id: null,
    email: null,
    name: null,
    token: null,
    errorMessage: null,
    user: null
  },
  reducers: {
    login: (state, { payload }) => {
      state.user = payload,
        state.loading=false,
        state.status = true
        state.id = payload.id
        state.email = payload.email
        state.name = payload.name
        state.token = payload.token
        tokenAuth(payload.token)
    },
    salir: (state, { payload }) => {

      state.user = null;
      state.status = false;
      state.status = false;
      state.loading = false
      state.id = null;
      state.email = null;
      state.name = null;
      state.token = null;
      state.photoUrl = null;
      state.errorMessage = null
      localStorage.setItem("datos", null)
    },
    chekingCredentials: (state, { payload }) => {
        state.loading =true
      state.status = false;
    },
    load: (state) => {
        state.loading = true;
      },
      cancel:(state,payload)=>{
        state.loading = false
      }
  },
});

export const { login, salir, chekingCredentials,load,cancel } = authSlice.actions;

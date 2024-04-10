import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    loading:false,
    status: false,
    uid: null,
    email: null,
    name: null,
    token: null,
    errorMessage: null,
  },
  reducers: {
    login: (state, { payload }) => {
        state.loading=false,
        state.status = true
        state.email = payload.email
        state.name = payload.name
        state.token = payload.photoUrl
    },
    logout: (state, { payload }) => {

      state.status = false;
      state.loading = false
      state.uid = null;
      state.email = null;
      state.displayName = null;
      state.photoUrl = null;
      state.errorMessage = payload
    },
    chekingCredentials: (state, { payload }) => {
        state.loading =true
      state.status = false;
      localStorage.setItem("user", JSON.stringify(payload));
    },
    load: (state) => {
        state.loading = true;
      },
      cancel:(state,payload)=>{
        state.loading = false
      }
  },
});

export const { login, logout, chekingCredentials,load,cancel } = authSlice.actions;

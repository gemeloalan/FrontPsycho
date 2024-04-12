import { configureStore } from "@reduxjs/toolkit";
import { todosApi } from "./apis/todosApi";
import { authSlice } from "./auth/authSlice";
import { patientSlice } from "./auth/patientSlice";

export const store = configureStore({
    reducer: {
        auth:authSlice.reducer,
        patient:patientSlice.reducer,

        [todosApi.reducerPath]:todosApi.reducer
    },
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(todosApi.middleware)
})
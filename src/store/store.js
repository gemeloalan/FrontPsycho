import { configureStore } from "@reduxjs/toolkit";
import { todosApi } from "./apis/todosApi";
import { authSlice } from "./auth/authSlice";

export const store = configureStore({
    reducer: {
        auth:authSlice.reducer,

        [todosApi.reducerPath]:todosApi.reducer
    },
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(todosApi.middleware)
})
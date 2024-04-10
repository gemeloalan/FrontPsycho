import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const todosApi = createApi({
    reducerPath:'todos',
    baseQuery:fetchBaseQuery({
        baseUrl:'http://127.0.0.1:8000'
    }),
    endpoints:(builder)=>({
        getTodos: builder.query({
            query:()=>'/todos'
        })
    })
})
export const {useGetTodosQuery}=todosApi;
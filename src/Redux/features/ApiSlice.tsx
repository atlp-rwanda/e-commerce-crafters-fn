import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL: any = `${process.env.BACKEND_API_URL}`;

const baseQuery = fetchBaseQuery({ baseUrl: API_URL, credentials: "include" });
export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery,
    endpoints: (builder)=> ({})
})


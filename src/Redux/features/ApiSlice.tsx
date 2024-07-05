import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_URL:any = `${process.env.BACKEND_API_URL}`;

const baseQuery = fetchBaseQuery({ baseUrl: API_URL, credentials: "include" });
export const apiSlice = createApi({
 reducerPath: "api",
 baseQuery,
 endpoints: (builder) => ({
  updateUser: builder.mutation({
   query: ({ userId, newUserData }) => ({
    url: `/updateuser/${userId}`,
    method: "PATCH",
    body: JSON.stringify(newUserData),
    headers: {
     "Content-Type": "application/json",
    },
   }),
  }),
 }),
});

export const { useUpdateUserMutation } = apiSlice;
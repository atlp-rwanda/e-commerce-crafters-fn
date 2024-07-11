import { apiSlice } from "../features/ApiSlice";

const usersSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    selectUsers: builder.query({
      query: () => ({
        url: "/allusers",
        method: "GET",
      }),
    }),
    selectUser: builder.query({
      query: () => ({
        url: "/finduser/:id",
        method: "GET",
      })
    })
  }),
});

export const { useSelectUsersQuery, useSelectUserQuery } = usersSlice;

export default usersSlice;

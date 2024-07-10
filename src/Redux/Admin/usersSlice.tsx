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
      }),
    }),
    updatePassword: builder.mutation({
      query: ({ id, passwords }) => ({
        url: `/updatepassword/${id}`,
        method: "PATCH",
        body: passwords,
      }),
    }),
  }),
});

export const {
  useSelectUsersQuery,
  useSelectUserQuery,
  useUpdatePasswordMutation,
} = usersSlice;

export default usersSlice;

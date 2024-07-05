import { apiSlice } from "./ApiSlice";

const AuthApiSlice = apiSlice.injectEndpoints({
 endpoints: (builder) => ({
  login: builder.mutation({
   query: (credentials) => ({
    url: "/login",
    method: "POST",
    body: credentials,
   }),
  }),
  verifyCode: builder.mutation({
   query: (credentials) => ({
    url: "/verify-code",
    method: "POST",
    body: credentials,
   }),
  }),
  register: builder.mutation({
   query: (credentials) => ({
    url: "/register",
    method: "POST",
    body: credentials,
   }),
  }),
  verifyEmail: builder.query({
   query: (token) => ({
    url: `/verfiy-email?token=${token}`,
   }),
  }),
 }),
});

export const {
 useLoginMutation,
 useVerifyCodeMutation,
 useRegisterMutation,
 useVerifyEmailQuery,
} = AuthApiSlice;
export default AuthApiSlice;

import { apiSlice } from "./ApiSlice";

const AuthApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: '/login',
        method: 'POST',
        body: credentials,
      }),
    }),
    verifyCode: builder.mutation({
      query: (credentials) => ({
        url: '/verify-code',
        method: 'POST',
        body: credentials,

      }),
    }),
    register: builder.mutation({
      query: (credentials) => ({
        url: '/register',
        method: 'POST',
        body: credentials,
      }),
    }),
    verifyEmail: builder.query({
      query: (token) => ({
        url: `/verfiy-email?token=${token}`,
      }),
    }),
    request_pasword: builder.mutation({
<<<<<<< HEAD
      query: (data) => ({
=======
      query: (data)=>({
>>>>>>> c7e1c1b (add forgot password ft)
        url: "/forget-password",
        method: "POST",
        body: data
      })
    }),
    reset_password: builder.mutation({
<<<<<<< HEAD
      query: (data) => ({
=======
      query: (data)=>({
>>>>>>> c7e1c1b (add forgot password ft)
        url: `/reset-password/${data.token}`,
        method: "POST",
        body: data
      })
    })
<<<<<<< HEAD
  })
=======
  }),
>>>>>>> c7e1c1b (add forgot password ft)
});

export const {
  useLoginMutation, useVerifyCodeMutation, useRegisterMutation, useVerifyEmailQuery,useRequest_paswordMutation,useReset_passwordMutation
} = AuthApiSlice;
export default AuthApiSlice;

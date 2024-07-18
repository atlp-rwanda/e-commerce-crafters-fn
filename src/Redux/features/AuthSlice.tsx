<<<<<<< HEAD
import { apiSlice } from "./ApiSlice";
=======
import { apiSlice } from './ApiSlice';
>>>>>>> 3e6d5db (Implement frontend authentication and authorization)

const AuthApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
<<<<<<< HEAD
        url: "/login",
        method: "POST",
        body: credentials,
      })
    }),
    verifyCode: builder.mutation({
      query: (credentials)=>({
        url: "/verify-code",
        method: "POST",
        body: credentials,

      })
    }),
    register: builder.mutation({
      query: (credentials) => ({
        url: "/register",
        method: "POST",
        body: credentials,
      })
    }),
    verifyEmail: builder.query({
      query: (token)=>({
        url: `/verfiy-email?token=${token}`
      })
    })
  })
})

export const { useLoginMutation,useVerifyCodeMutation,useRegisterMutation,useVerifyEmailQuery } = AuthApiSlice
export default AuthApiSlice
=======
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
    selectProducts: builder.query<any[], void>({
      query: () => ({
        url: '/readAllProducts',
      }),
    }),
  }),
});

export const {
  useLoginMutation, useVerifyCodeMutation, useRegisterMutation, useVerifyEmailQuery, useSelectProductsQuery,
} = AuthApiSlice;
export default AuthApiSlice;
>>>>>>> 3e6d5db (Implement frontend authentication and authorization)

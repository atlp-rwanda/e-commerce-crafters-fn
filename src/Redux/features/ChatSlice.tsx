import { apiSlice } from "./ApiSlice";


const chatSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        sendMessage: builder.mutation({
            query: (data) => ({
                url: "/chat",
                method: "POST",
                body: data
            })
        }),
        getVendor: builder.query({
            query: (id) => `/get-vendor/${id}`
        }),
        getAllVendors: builder.query({
            query: () => `/get-all-vendor`
        }),
        getAllMessage: builder.query({
            query: () => `/get-message`
        })

    })
})

export const {useGetVendorQuery,useGetAllVendorsQuery,useGetAllMessageQuery,useSendMessageMutation } = chatSlice

export default chatSlice




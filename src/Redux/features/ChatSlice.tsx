import { apiSlice } from "./ApiSlice";


const chatSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
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

export const {useGetVendorQuery,useGetAllVendorsQuery,useGetAllMessageQuery } = chatSlice

export default chatSlice




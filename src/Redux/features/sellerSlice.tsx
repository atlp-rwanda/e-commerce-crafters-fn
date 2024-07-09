import { apiSlice } from "./ApiSlice";


const SellerSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        selectFeddback: builder.query({
            query: ()=> ({
                url: `select-vendorFeedback`
            })
        })
    })
})

export const { useSelectFeddbackQuery } = SellerSlice
export default SellerSlice
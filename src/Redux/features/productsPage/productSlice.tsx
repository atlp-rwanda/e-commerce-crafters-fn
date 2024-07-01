import { apiSlice } from "../ApiSlice";

const productApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    selectProducts: builder.query({
      query: () => ({
        url: "/readAllProducts",
        method: "GET",
      }),
    }),
  }),
});
export const { useSelectProductsQuery } = productApiSlice;

export default productApiSlice;

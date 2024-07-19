import { apiSlice } from "../features/ApiSlice";
const productApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    AllProducts: builder.query({
      query: () => ({
        url: "/readAllProducts",
        method: "GET",
      }),
    }),
    Carts: builder.query({
      query: () => ({
        url:"/readAllCarts",
        method: "GET",
      }),
    }),
    Wishlists: builder.query({
      query: () => ({
        url: "/readAllWishlists",
        method: "GET",
      }),
    }),
  }),
});
export const { useAllProductsQuery, useCartsQuery, useWishlistsQuery } = productApiSlice;
export default productApiSlice;

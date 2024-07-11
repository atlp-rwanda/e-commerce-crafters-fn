import { apiSlice } from "../features/ApiSlice";

const sellersSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    selectSellers: builder.query({
      query: () => ({
        url: "/allvendors",
        method: "GET",
      }),
    }),
    selectRequests: builder.query({
      query: () => ({
        url: "/allrequests",
        method: "GET",
      }),
    }),
  }),
});

export const { useSelectSellersQuery, useSelectRequestsQuery } = sellersSlice;

export default sellersSlice;

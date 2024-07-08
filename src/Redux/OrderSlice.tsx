import { apiSlice } from "./features/ApiSlice";

const OrderApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getOrder: builder.query({
      query: ({ orderId }) => ({
        url: `/order/getOrder/${orderId}`,
      }),
    }),
    getOrderStatus: builder.query({
      query: ({ orderId, token }) => ({
        url: `/order/${orderId}/status`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
  }),
});

export const { useGetOrderStatusQuery, useGetOrderQuery } = OrderApiSlice;
export default OrderApiSlice;

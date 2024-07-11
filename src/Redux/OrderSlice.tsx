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
    updateOrderStatus: builder.mutation({
      query: ({token, orderId, status, userId}) => ({
        url:`/order/${orderId}/order-status`,
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: { status, userId },
        credentials: 'include'
      })
    }),
    getUserInfo: builder.query({
      query: ({ userId }) => ({
        url: `/user-info/${userId}`,
      })
    })
  }),
});

export const { useGetOrderStatusQuery, useGetOrderQuery, useUpdateOrderStatusMutation, useGetUserInfoQuery } = OrderApiSlice;
export default OrderApiSlice;
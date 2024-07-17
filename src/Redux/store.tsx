
import { configureStore, Action } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
import productsImagesReducer from './features/ProductsImagesSlice';
import popularProductsReducer from './features/PopularProductsSlice';
import contactReducer from './features/contactSlice';
import categoryReducer from './productsPage/categorySlice';
import paginationReducer from './productsPage/paginationSlice';
import searchReducer from './productsPage/searchSlice';
import { apiSlice } from './features/ApiSlice';
import { reviewReducer } from './Action/Reducer/Review';
import { cartReducer, productReducer } from './Action/Reducer/singleproductSlice';

import AuthSlice from "./features/AuthSlice";
import OrderStatusSlice from './Analytic/orderStatusSlice';
import sellingReportReducer from "./Analytic/SellingReportSlice";
import WeeklySellingReducer from './Analytic/WeeklySellingSlice';
import SellerOrderStatusSliceReducer from "../Redux/Analytic/SellerAnalytics/OrderStatusSlice"
import SellerWeekSalesSliceReducer from "../Redux/Analytic/SellerAnalytics/WeekSellingSlice"
import wishlistslice from './Reducer/wishlistslice';
import similarScile from './Reducer/similarScile';
// import wishlistslice from "./Reducer/Reducer/wishlistslice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,

    reviews: reviewReducer,
    product: productReducer,
    Wishlist: wishlistslice,
    category: categoryReducer,
    pagination: paginationReducer,
    search: searchReducer,
    popularProducts: popularProductsReducer,
    contact: contactReducer,

    orderStatus: OrderStatusSlice,
    sellingReport: sellingReportReducer,
    weeklyReport: WeeklySellingReducer,
    sellerSellingReport: sellingReportReducer,
    SellerOrderStatus: SellerOrderStatusSliceReducer,
    SellerWeeklySales: SellerWeekSalesSliceReducer,
    cart: cartReducer,
    // orderStatus: OrderStatusSlice,
    // sellingReport: sellingReportReducer,
    // weeklyReport: WeeklySellingReducer,
    productsImages: productsImagesReducer,
    similarProducts: similarScile,
  },

  middleware: (getDefaultMiddelware) =>
    getDefaultMiddelware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

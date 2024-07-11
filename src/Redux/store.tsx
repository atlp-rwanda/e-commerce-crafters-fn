
import { configureStore, Action } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
import categoryReducer from './productsPage/categorySlice';
import paginationReducer from './productsPage/paginationSlice';
import searchReducer from './productsPage/searchSlice';
import { apiSlice } from './features/ApiSlice';
import { reviewReducer } from './Action/Reducer/Review';
import { productReducer } from './Action/Reducer/singleproductSlice';
import contactReducer from './HomePage/contactSlice';
import productsImagesReducer from './HomePage/ProductsImagesSlice';
import popularProductsReducer from './HomePage/PopularProductsSlice';
import AuthSlice from "./features/AuthSlice";
import OrderStatusSlice from './Analytic/orderStatusSlice';
import sellingReportReducer from "./Analytic/SellingReportSlice";
import WeeklySellingReducer from './Analytic/WeeklySellingSlice';
import SellerOrderStatusSliceReducer from "../Redux/Analytic/SellerAnalytics/OrderStatusSlice"
import SellerWeekSalesSliceReducer from "../Redux/Analytic/SellerAnalytics/WeekSellingSlice"





export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    productsImages: productsImagesReducer,
    category: categoryReducer,
    pagination: paginationReducer,
    search: searchReducer,
    reviews: reviewReducer,
    product: productReducer,
    popularProducts: popularProductsReducer,
    contact: contactReducer,

    orderStatus: OrderStatusSlice,
    sellingReport: sellingReportReducer,
    weeklyReport: WeeklySellingReducer,
    sellerSellingReport: sellingReportReducer,
    SellerOrderStatus: SellerOrderStatusSliceReducer,
    SellerWeeklySales: SellerWeekSalesSliceReducer,
  },
  middleware: (getDefaultMiddelware) =>
    getDefaultMiddelware().concat(apiSlice.middleware),
});

  export type RootState = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch;
  export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;




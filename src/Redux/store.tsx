import { configureStore, Action } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
import productsImagesReducer from './features/ProductsImagesSlice';
import popularProductsReducer from './features/PopularProductsSlice';
import contactReducer from './features/contactSlice';
import categoryReducer from './productsPage/categorySlice';
import paginationReducer from './productsPage/paginationSlice';
import searchReducer from './productsPage/searchSlice';
import { apiSlice } from './features/ApiSlice';
import  unreadMessagesReducer from "./features/MessageSlice"
import { reviewReducer } from './Action/Reducer/Review';
import { productReducer, cartReducer } from './Action/Reducer/singleproductSlice';
import sellingReportReducer from "./Analytic/SellingReportSlice";
import WeeklySellingReducer from "./Analytic/WeeklySellingSlice";
import OrderStatusSlice from "./Analytic/orderStatusSlice";
import wishlistslice from './Reducer/wishlistslice';
import similarScile from './Reducer/similarScile';
// import wishlistslice from "./Reducer/Reducer/wishlistslice";


export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    unreadMessages: unreadMessagesReducer,
    productsImages: productsImagesReducer,
    category: categoryReducer,
    pagination: paginationReducer,
    search: searchReducer,
    popularProducts: popularProductsReducer,
    contact: contactReducer,
    cart: cartReducer,
    orderStatus: OrderStatusSlice,
    sellingReport: sellingReportReducer,
    weeklyReport: WeeklySellingReducer,
    similarProducts: similarScile,]
  },
  middleware: (getDefaultMiddelware) =>
    getDefaultMiddelware().concat(apiSlice.middleware),
});
  
  export type RootState = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch;
  export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

import { configureStore, Action, ThunkAction } from "@reduxjs/toolkit";

import contactReducer from "./features/contactSlice";
import categoryReducer from "./productsPage/categorySlice";
import paginationReducer from "./productsPage/paginationSlice";
import searchReducer from "./productsPage/searchSlice";
import { apiSlice } from "./features/ApiSlice";

import { productReducer } from "./Reducer/singleproductSlice";
import { reviewReducer } from "./Reducer/Review";
import wishlistslice from "./Reducer/wishlistslice";
import { cartReducer } from "./Reducer/singleproductSlice";

import productsImagesReducer from "./HomePage/ProductsImagesSlice";
import popularProductsReducer from "./HomePage/PopularProductsSlice";
import wishlistSlice from "./Reducer/wishlistslice";

import similarScile from "./Reducer/similarScile";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,

    reviews: reviewReducer,
    product: productReducer,
    Wishlist: wishlistslice,
    category: categoryReducer,
    pagination: paginationReducer,
    search: searchReducer,
    productsImages: productsImagesReducer,
    similarProducts: similarScile,
    popularProducts: popularProductsReducer,
    contact: contactReducer,
    wishlist: wishlistSlice,
    cart: cartReducer,
  },

  middleware: (getDefaultMiddelware) =>
    getDefaultMiddelware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./features/productsPage/categorySlice";
import paginationReducer from "./features/productsPage/paginationSlice";
import searchReducer from "./features/productsPage/searchSlice";
import { apiSlice } from "./features/ApiSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    category: categoryReducer,
    pagination: paginationReducer,
    search: searchReducer
  },
  middleware: (getDefaultMiddelware) =>
    getDefaultMiddelware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

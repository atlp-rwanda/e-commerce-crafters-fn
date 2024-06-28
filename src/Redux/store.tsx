import { configureStore, Action } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
import productsImagesReducer from './features/ProductsImagesSlice';
import { apiSlice } from './features/ApiSlice';

export const store = configureStore({
    reducer: {
      productsImages: productsImagesReducer,
      [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddelware) => getDefaultMiddelware().concat(apiSlice.middleware),
  });
  
  export type RootState = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch;
  export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
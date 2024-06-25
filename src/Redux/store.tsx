import { configureStore, Action } from '@reduxjs/toolkit';
import AuthSlice from './features/AuthSlice';
import { ThunkAction } from 'redux-thunk';
import productsImagesReducer from './features/ProductsImagesSlice';

export const store = configureStore({
    reducer: {
      auth: AuthSlice,
      productsImages: productsImagesReducer
    }
  });
  
  export type RootState = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch;
  export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
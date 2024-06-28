import { configureStore, Action } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
import productsImagesReducer from './features/ProductsImagesSlice';
import popularProductsReducer from './features/PopularProductsSlice';

export const store = configureStore({
    reducer: {
      productsImages: productsImagesReducer,
      popularProducts: popularProductsReducer
    }
  });
  
  export type RootState = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch;
  export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
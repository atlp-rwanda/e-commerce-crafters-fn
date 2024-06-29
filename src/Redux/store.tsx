import { configureStore, Action } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
import productsImagesReducer from './features/ProductsImagesSlice';
import popularProductsReducer from './features/PopularProductsSlice';
import contactReducer from './features/contactSlice';

export const store = configureStore({
    reducer: {
      productsImages: productsImagesReducer,
      popularProducts: popularProductsReducer,
      contact: contactReducer
    }
  });
  
  export type RootState = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch;
  export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
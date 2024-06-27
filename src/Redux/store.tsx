import { configureStore } from '@reduxjs/toolkit';
import AuthSlice from './features/AuthSlice';
import { apiSlice } from './features/ApiSlice';
import { productReducer } from './Reducer/singleproductSlice';
import { reviewReducer } from './Reducer/Review';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    reviews: reviewReducer,
    product: productReducer,
    
  },
  middleware: (getDefaultMiddelware) => getDefaultMiddelware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

 

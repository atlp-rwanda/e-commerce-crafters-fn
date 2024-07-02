import { configureStore, Action } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
import categoryReducer from './productsPage/categorySlice';
import paginationReducer from './productsPage/paginationSlice';
import searchReducer from './productsPage/searchSlice';
import { apiSlice } from './features/ApiSlice';
import { productReducer } from './Reducer/singleproductSlice';
import { reviewReducer } from './Reducer/Review';
import wishlistslice from './Reducer/wishlistslice';




import contactReducer from './HomePage/contactSlice';
import productsImagesReducer from './HomePage/ProductsImagesSlice';
import popularProductsReducer from './HomePage/PopularProductsSlice';
import wishlistSlice from './Reducer/wishlistslice';


export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,


    reviews: reviewReducer,
    product: productReducer,
    Wishlist:wishlistslice,
    category: categoryReducer,
    pagination: paginationReducer,
    search: searchReducer,
    productsImages: productsImagesReducer,

    popularProducts: popularProductsReducer,
    contact: contactReducer,
    wishlist:wishlistSlice
    
  },

  middleware: (getDefaultMiddelware) =>
    getDefaultMiddelware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

 

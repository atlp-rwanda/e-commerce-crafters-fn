import { configureStore, Action } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
<<<<<<< HEAD
=======
import productsImagesReducer from './features/ProductsImagesSlice';
import popularProductsReducer from './features/PopularProductsSlice';
<<<<<<< HEAD
>>>>>>> 9b21acb (solved merge conflicts)
=======
import contactReducer from './features/contactSlice';
>>>>>>> b0bc8b9 (solved merge conflicts)
import categoryReducer from './productsPage/categorySlice';
import paginationReducer from './productsPage/paginationSlice';
import searchReducer from './productsPage/searchSlice';
import { apiSlice } from './features/ApiSlice';
<<<<<<< HEAD
import { productReducer } from './Reducer/singleproductSlice';
import { reviewReducer } from './Reducer/Review';
import wishlistslice from './Reducer/wishlistslice';




=======
import { reviewReducer } from './Action/Reducer/Review';
import { productReducer,cartReducer } from './Action/Reducer/singleproductSlice';
>>>>>>> 4440817 (redux the cart)
import contactReducer from './HomePage/contactSlice';
import productsImagesReducer from './HomePage/ProductsImagesSlice';
import popularProductsReducer from './HomePage/PopularProductsSlice';
import wishlistSlice from './Reducer/wishlistslice';
import SimilarProduct from '../Components/singleproduct/similaryProduct';
import similarScile from './Reducer/similarScile';


export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,


    reviews: reviewReducer,
    product: productReducer,
    Wishlist:wishlistslice,
    category: categoryReducer,
    pagination: paginationReducer,
    search: searchReducer,
<<<<<<< HEAD
    productsImages: productsImagesReducer,
    similarProducts:similarScile,

    popularProducts: popularProductsReducer,
    contact: contactReducer,
<<<<<<< HEAD
<<<<<<< HEAD
    wishlist:wishlistSlice
    
=======
    cart: cartReducer
>>>>>>> 4440817 (redux the cart)
=======
    popularProducts: popularProductsReducer,
>>>>>>> 9b21acb (solved merge conflicts)
=======
>>>>>>> b0bc8b9 (solved merge conflicts)
  },

  middleware: (getDefaultMiddelware) =>
    getDefaultMiddelware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

 

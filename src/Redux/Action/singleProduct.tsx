import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


type ReviewData = {
  name: string;
  feedback: string;
  ratingScore: number;
};

export interface Product {
  productId: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

export interface ProductState {
  products: Product[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

export const submitReview = createAsyncThunk(
  'reviews/submitReview',
  async ({ productId, data }: { productId: string; data: ReviewData }, { rejectWithValue }) => {
    try {
      const apiUrl = `https://e-commerce-crafters-bn-6aiy.onrender.com/addfeedback/${productId}`;
      const token = localStorage.getItem('token');
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.post(apiUrl, data, config);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);


export const addToCart = createAsyncThunk(
  'cart/addToCart',
  async (cartItem: { userId: string; productId: string; quantity: number; price: number }) => {
    try {
      const apiUrl = 'https://e-commerce-crafters-bn-6aiy.onrender.com/addcart';
      const response = await axios.post(apiUrl, cartItem);
      return response.data;
    } catch (error) {
     
      throw Error('Failed to add to cart');
    }
  }
);

export const fetchProductDetails = createAsyncThunk(
  'product/fetchProductDetails',
  async (productId, { rejectWithValue }) => {
    try {
      const apiUrl = `http://localhost:5000/readProduct/${productId}`;
      const response = await axios.get(apiUrl);
      return response.data;
    } catch (error:any) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchReviews = createAsyncThunk(
  'product/fetchProductDetails',
  async (productId, { rejectWithValue }) => {
    try {
      const apiUrl = `http://localhost:5000/getfeedback/${productId}`;
      const response = await axios.get(apiUrl);
      return response.data;
    } catch (error:any) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchSimilarProducts = createAsyncThunk(
  'products/fetchSimilarProducts',
  async (productId: string, { rejectWithValue }) => {
    try {
      const apiUrl = `http://localhost:5000/similarproducts/${productId}`;
      const response = await axios.get<Product[]>(apiUrl);
      return response.data;
    } catch (error:any) {
      return rejectWithValue(error.message);
    }
  }
);
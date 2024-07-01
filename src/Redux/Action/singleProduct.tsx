import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const submitReview = createAsyncThunk(
  'reviews/submitReview',
  async (data: { name: string; feedback: string; ratingScore: number }, { rejectWithValue }) => {
    try {
      const apiUrl = `https://e-commerce-crafters-bn-6aiy.onrender.com/addfeedback/10ac05ed-9a26-416d-a491-2aa3d1d46b25`;
      const token = localStorage.getItem('token');
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.post(apiUrl, data, config);
      return response.data; 
    } catch (error:any) {
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
  async (_, { rejectWithValue }) => {
    try {
      const apiUrl = `http://localhost:5000/readProduct/10ac05ed-9a26-416d-a491-2aa3d1d46b25`;
      const response = await axios.get(apiUrl);
      return response.data;
    } catch (error:any) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchReviews = createAsyncThunk(
  'product/fetchProductDetails',
  async (_, { rejectWithValue }) => {
    try {
      const apiUrl = `http://localhost:5000/getfeedback/10ac05ed-9a26-416d-a491-2aa3d1d46b25`;
      const response = await axios.get(apiUrl);
      return response.data;
    } catch (error:any) {
      return rejectWithValue(error.message);
    }
  }
);

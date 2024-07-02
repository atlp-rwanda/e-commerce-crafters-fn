import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const API_URL = 'http://localhost:5000/toWishlist';

export const addToWishlist = createAsyncThunk(
  'wishlist/addToWishlist',
  async (wishlistItem: { userId: string; productId: string; price: number }, { rejectWithValue }) => {
    try {
      const response = await axios.post(API_URL, wishlistItem);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const removeFromWishlist = createAsyncThunk(
  'wishlist/removeFromWishlist',
  async (wishlistItem: { userId: string; productId: string }, { rejectWithValue }) => {
    try {
      const response = await axios.delete(API_URL, { data: wishlistItem });
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchWishlist = createAsyncThunk(
  'wishlist/fetchWishlist',
  async (userId: string, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/${userId}`);
      return response.data; 
    } catch (error: any) {
      return rejectWithValue(error.response.data); 
    }
  }
);
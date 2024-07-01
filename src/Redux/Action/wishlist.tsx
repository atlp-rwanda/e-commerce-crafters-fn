import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const API_URL = 'https://e-commerce-crafters-bn-6aiy.onrender.com/toWishlist';

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

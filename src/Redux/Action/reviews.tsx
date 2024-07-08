import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchReviews = createAsyncThunk(
  'reviews/fetchReviews',
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

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchReviews = createAsyncThunk(
  'reviews/fetchReviews',
  async (_, { rejectWithValue }) => {
    try {
      const apiUrl = 'http://localhost:5000/getfeedback/10ac05ed-9a26-416d-a491-2aa3d1d46b25'; // Replace with your actual API endpoint
      const response = await axios.get(apiUrl);
      return response.data; 
    } catch (error:any) {
      return rejectWithValue(error.message); 
    }
  }
);

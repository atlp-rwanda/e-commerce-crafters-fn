import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchReviews = createAsyncThunk(
  "reviews/fetchReviews",
  async (_, { rejectWithValue }) => {
    try {
      const apiUrl =
        "http://localhost:5000/getfeedback/1b4a20ca-0d75-4bfb-8c66-147ea41ae8e1"; // Replace with your actual API endpoint
      const response = await axios.get(apiUrl);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

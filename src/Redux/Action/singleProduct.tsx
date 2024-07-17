import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const submitReview = createAsyncThunk(
  "reviews/submitReview",
  async (
    data: { name: string; feedback: string; ratingScore: number },
    { rejectWithValue }
  ) => {
    try {
      const apiUrl = `https://e-commerce-crafters-bn-6aiy.onrender.com/addfeedback/1b4a20ca-0d75-4bfb-8c66-147ea41ae8e1`;
      const token = localStorage.getItem("token");
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
  "cart/addToCart",
  async (cartItem: {
    userId: string;
    productId: string;
    quantity: number;
    price: number;
  }) => {
    try {
      const apiUrl = "http://localhost:5000/addcart";
      const response = await axios.post(apiUrl, cartItem);
      return response.data;
    } catch (error) {
      throw Error("Failed to add to cart");
    }
  }
);

export const fetchProductDetails = createAsyncThunk(
  "product/fetchProductDetails",
  async (_, { rejectWithValue }) => {
    try {
      const apiUrl = `http://localhost:5000/readProduct/1b4a20ca-0d75-4bfb-8c66-147ea41ae8e1`;
      const response = await axios.get(apiUrl);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchReviews = createAsyncThunk(
  "product/fetchProductDetails",
  async (_, { rejectWithValue }) => {
    try {
      const apiUrl = `http://localhost:5000/getfeedback/1b4a20ca-0d75-4bfb-8c66-147ea41ae8e1`;
      const response = await axios.get(apiUrl);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

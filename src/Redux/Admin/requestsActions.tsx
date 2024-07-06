import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const approveVendor = createAsyncThunk(
  "requests/approveVendor",
  async (userId: string) => {
    const response = await axios.put(
      `http://localhost:5000/approve-vendor/${userId}`
    );
    return response.data;
  }
);

export const rejectVendor = createAsyncThunk(
  "requests/rejectVendor",
  async (userId: string) => {
    const response = await axios.put(
      `http://localhost:5000//reject-vendor/${userId}`
    );
    return response.data;
  }
);

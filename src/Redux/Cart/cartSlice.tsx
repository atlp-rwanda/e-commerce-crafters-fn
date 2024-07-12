import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface CartState {
  cart: Array<any>;
  loading: boolean;
  error: string;
}

export const fetchCart = createAsyncThunk(
  "cart/fetchCart",
  async () => {
    const response = await fetch("http://localhost:5000/getcart");
    if (!response.ok) {
      throw new Error("Failed to fetch cart");
    }
    const data = await response.json();
    return data;
  }
);

const initialState: CartState = {
  cart: [],
  loading: false,
  error: "",
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        fetchCart.fulfilled, (state, action) => {
        state.loading = false;
        state.cart = action.payload;
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "An error occurred";
      });
  },
});

export default cartSlice.reducer;

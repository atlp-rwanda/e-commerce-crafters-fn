import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define the type for the slice state
interface PopularProductsState {
  products: Array<any>;
  loading: boolean;
  error: string;
}

// Define a thunk that fetches the popular products
export const fetchPopularProducts = createAsyncThunk(
  'popularProducts/fetchPopularProducts',
  async () => {
    const response = await fetch('http://localhost:5000/popular-product');
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    const data = await response.json();
    return data;
  }
);

// Define the initial state of the slice
const initialState: PopularProductsState = {
  products: [],
  loading: false,
  error: '',
};

// Create the slice
const popularProductsSlice = createSlice({
  name: 'popularProducts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPopularProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPopularProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchPopularProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'An error occurred';
      });
  },
});

export default popularProductsSlice.reducer;

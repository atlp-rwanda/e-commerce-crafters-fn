import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { addToWishlist } from '../Action/wishlist';

interface WishlistState {
  items: Array<{ userId: string; productId: string; price: number }>;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: WishlistState = {
  items: [],
  status: 'idle',
  error: null,
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(addToWishlist.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addToWishlist.fulfilled, (state, action: PayloadAction<{ userId: string; productId: string; price: number }>) => {
        state.status = 'succeeded';
        state.items.push(action.payload);
      })
      .addCase(addToWishlist.rejected, (state, action: PayloadAction<any>) => {
        state.status = 'failed';
        state.error = action.payload as string;
      });
  },
});

export default wishlistSlice.reducer;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { addToWishlist, removeFromWishlist, fetchWishlist } from '../Action/wishlist';

interface WishlistItem {
  userId: string;
  productId: string;
  price: number;
}

interface WishlistState {
  items: WishlistItem[];
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
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addToWishlist.fulfilled, (state, action: PayloadAction<WishlistItem>) => {
        state.items.push(action.payload);
        state.status = 'succeeded';
      })
      .addCase(removeFromWishlist.fulfilled, (state, action: PayloadAction<{ productId: string }>) => {
        state.items = state.items.filter((item) => item.productId !== action.payload.productId);
        state.status = 'succeeded';
      })
      .addCase(fetchWishlist.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchWishlist.fulfilled, (state, action: PayloadAction<WishlistItem[]>) => {
        state.items = action.payload;
        state.status = 'succeeded';
      })
      .addCase(fetchWishlist.rejected, (state, action: PayloadAction<any>) => {
        state.error = action.payload;
        state.status = 'failed';
      })
      .addCase(addToWishlist.rejected, (state, action: PayloadAction<any>) => {
        state.error = action.payload;
        state.status = 'failed';
      })
      .addCase(removeFromWishlist.rejected, (state, action: PayloadAction<any>) => {
        state.error = action.payload;
        state.status = 'failed';
      });
  },
});

export default wishlistSlice.reducer;

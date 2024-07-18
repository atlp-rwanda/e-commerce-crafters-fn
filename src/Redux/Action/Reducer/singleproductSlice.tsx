import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { 
  fetchProductDetails, 
  addToCart, 
  fetchCart, 
  updateCart, 
  clearCart, 
  deleteProductFromCart, 
  submitReview, 
  fetchReviews, 
  fetchSimilarProducts 
} from "../singleProduct"; // Adjust the import path as needed

interface Review {
  id: number;
  name: string;
  date: string;
  rating: number;
  text: string;
}

interface ReviewState {
  reviews: Review[];
  loading: boolean;
  error: string | null;
}

interface CartItem {
  id: string;
  productId: string;
  quantity: number;
  price: number;
}

interface CartState {
  items: CartItem[];
  loading: boolean;
  error: string | null;
}

interface ProductState {
  product: any;
  status: string;
  error: string | null;
}

const initialReviewState: ReviewState = {
  reviews: [],
  loading: false,
  error: null,
};

const initialProductState: ProductState = {
  product: {},
  status: "idle",
  error: null,
};

const initialState: CartState = {
  items: [],
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: "product",
  initialState: initialProductState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductDetails.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchProductDetails.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.status = "succeeded";
          state.product = action.payload;
        }
      )
      .addCase(fetchProductDetails.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch product details";
      });
  },
});

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addToCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        addToCart.fulfilled,
        (state, action: PayloadAction<CartItem>) => {
          state.loading = false;
          state.items.push(action.payload);
        }
      )
      .addCase(addToCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to add to cart";
      })
      .addCase(fetchCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchCart.fulfilled,
        (state, action: PayloadAction<CartItem[]>) => {
          state.loading = false;
          state.items = action.payload;
        }
      )
      .addCase(fetchCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch cart";
      })
      .addCase(updateCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        updateCart.fulfilled,
        (state, action: PayloadAction<CartItem>) => {
          state.loading = false;
          const index = state.items.findIndex(item => item.id === action.payload.id);
          if (index !== -1) {
            state.items[index] = action.payload;
          }
        }
      )
      .addCase(updateCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to update cart";
      })
      .addCase(clearCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        clearCart.fulfilled,
        (state) => {
          state.loading = false;
          state.items = [];
        }
      )
      .addCase(clearCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to clear cart";
      })
      .addCase(deleteProductFromCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        deleteProductFromCart.fulfilled,
        (state, action: PayloadAction<{ productId: string }>) => {
          state.loading = false;
          state.items = state.items.filter(item => item.productId !== action.payload.productId);
        }
      )
      .addCase(deleteProductFromCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to delete product from cart";
      });
  },
});

export const productReducer = productSlice.reducer;
export const cartReducer = cartSlice.reducer;

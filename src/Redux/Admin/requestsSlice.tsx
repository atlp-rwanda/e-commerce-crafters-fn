import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { approveVendor, rejectVendor } from "./requestsActions";




interface RequestsState {
  approvedVendors: string[];
  rejectedVendors: string[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: RequestsState = {
  approvedVendors: [],
  rejectedVendors: [],
  status: "idle",
  error: null,
};

const requestsSlice = createSlice({
  name: "requests",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(approveVendor.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        approveVendor.fulfilled,
        (state, action: PayloadAction<string>) => {
          state.status = "succeeded";
          state.approvedVendors.push(action.payload);
        }
      )
      .addCase(approveVendor.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      })
      .addCase(rejectVendor.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        rejectVendor.fulfilled,
        (state, action: PayloadAction<string>) => {
          state.status = "succeeded";
          state.rejectedVendors.push(action.payload);
        }
      )
      .addCase(rejectVendor.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      });
  },
});

export default requestsSlice.reducer;

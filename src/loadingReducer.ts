import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "./store";

export interface loadingState {
  page: string;
  name: string;
}

const initialState: loadingState = {
  page: "",
  name: "test",
};

export const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    changeLoading: (state, action: PayloadAction<loadingState>) => {
      state = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export const { changeLoading } = loadingSlice.actions;

export const selectLoading = (state: RootState) => state.loading;

export default loadingSlice.reducer;

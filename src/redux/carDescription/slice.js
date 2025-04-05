import { createSlice } from '@reduxjs/toolkit';
import { fetchCarDescription } from './operations';

const initialState = {
  car: {},
  loading: false,
  error: null,
};

const slice = createSlice({
  name: 'carDescription',
  initialState,
  reducers: {
    resetCar: () => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCarDescription.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCarDescription.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.car = action.payload;
      })
      .addCase(fetchCarDescription.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export const { resetCar } = slice.actions;
export const carDescriptionReducer = slice.reducer;

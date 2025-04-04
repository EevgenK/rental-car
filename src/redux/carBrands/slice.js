import { createSlice } from '@reduxjs/toolkit';
import { fetchCarBrands } from './opreations';

const initialState = {
  brands: [],
  loading: false,
  error: null,
};

const slice = createSlice({
  name: 'carBrands',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchCarBrands.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCarBrands.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.brands = action.payload;
      })
      .addCase(fetchCarBrands.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const carBrandsReducer = slice.reducer;

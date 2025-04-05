import { createSlice } from '@reduxjs/toolkit';
import { fetchCars, fetchMoreCars } from './operations';

const initialState = {
  cars: [],
  pageAmount: 0,
  loading: false,
  error: null,
  currentPage: 0,
};
const slice = createSlice({
  name: 'carsList',
  initialState,
  reducers: {
    resetCars: () => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.cars = action.payload.cars;
        state.pageAmount = action.payload.totalPages;
        state.currentPage = action.payload.page;
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchMoreCars.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMoreCars.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.cars = [...state.cars, ...action.payload.cars];
        state.currentPage = action.payload.page;
      })
      .addCase(fetchMoreCars.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export const { resetCars } = slice.actions;
export const carsReducer = slice.reducer;

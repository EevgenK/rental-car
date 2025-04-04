import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  brand: '',
  rentalPrice: '',
  minMileage: '',
  maxMileage: '',
};

const slice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilters: (state, action) => {
      return { ...state, ...action.payload };
    },
    resetFilter: () => {
      return initialState;
    },
  },
});

export const { setFilters, resetFilter } = slice.actions;

export const filtersReducer = slice.reducer;

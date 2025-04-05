import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../../utils/api';

export const fetchCars = createAsyncThunk(
  'carsList/fetchCars',
  async (query, thunkAPI) => {
    try {
      const filterParams = Object.fromEntries(
        Object.entries(query).filter(([_, value]) => !!value),
      );

      const {
        data: { cars, totalPages, page },
      } = await instance.get('/cars', {
        params: { limit: 12, ...filterParams },
      });

      return { cars, totalPages, page };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const fetchMoreCars = createAsyncThunk(
  'carsList/fetchMoreCars',
  async (query, thunkAPI) => {
    try {
      const {
        data: { cars, page },
      } = await instance.get('/cars', {
        params: { limit: 12, ...query },
      });
      return { cars, page };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../../utils/api';
import toast from 'react-hot-toast';

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
      if (!cars.length) {
        toast(
          `There are no cars matching your search criteria. Please try again.`,
        );
        return thunkAPI.rejectWithValue('No cars found');
      }
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

import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../../utils/api';

export const fetchCarBrands = createAsyncThunk(
  'carBrands/fetchCarBrands',
  async (_, thunkAPI) => {
    try {
      const { data } = await instance.get('/brands');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

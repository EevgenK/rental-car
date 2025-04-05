import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../../utils/api';

export const fetchCarDescription = createAsyncThunk(
  'carDescription/fetchCarDescription',
  async (carId, thunkAPI) => {
    try {
      const { data } = await instance.get(`/cars/${carId}`);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

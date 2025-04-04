import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  favorites: [],
};
const slice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    setFavorites: (state, action) => {
      const isFavorite = state.favorites.some(
        (favorite) => favorite.id === action.payload,
      );
      if (isFavorite) {
        state.favorites = state.favorites.filter(
          (favorite) => favorite.id !== action.payload,
        );
        return;
      }
      state.favorites.push({ id: action.payload, liked: true });
    },
  },
});

export const { setFavorites } = slice.actions;
export const favoritesReducer = slice.reducer;

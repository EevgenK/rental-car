import { createSelector } from '@reduxjs/toolkit';
export const selectFavorites = (state) => state.favorites.favorites;

export const selectIfFavorite = (carId) =>
  createSelector([selectFavorites], (favorites) => {
    return favorites.some((fav) => fav.id === carId);
  });

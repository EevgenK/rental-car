import { createSelector } from '@reduxjs/toolkit';

export const selectCarsList = (state) => state.carsList.cars;
export const selectCarsPageAmount = (state) => state.carsList.pageAmount;
export const selectIsLoading = (state) => state.carsList.loading;
export const selectCurrentPage = (state) => state.carsList.currentPage;

export const selectIfFavorite = createSelector(
  [selectCarsPageAmount, selectCurrentPage],
  (pageAmount, currentPage) => pageAmount <= currentPage,
);

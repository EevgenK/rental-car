import { createSelector } from '@reduxjs/toolkit';
import { selectCarsList } from '../cars/selectors';

export const selectCarBrands = (state) => state.carBrands.brands;

export const selectCarPricesMemo = createSelector([selectCarsList], (cars) => {
  const prices = cars.map((car) => car.rentalPrice);
  return [...new Set(prices)].sort((a, b) => a - b);
});

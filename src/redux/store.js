import { configureStore } from '@reduxjs/toolkit';

import { carBrandsReducer } from './carBrands/slice';
import { carsReducer } from './cars/slice';
import { filtersReducer } from './filters/slice';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import { favoritesReducer } from './favorites/slice';

const favoritesPersistConfig = {
  key: 'favorites',
  storage,
  whitelist: ['favorites'],
};
const persistedReducerFavorites = persistReducer(
  favoritesPersistConfig,
  favoritesReducer,
);

export const store = configureStore({
  reducer: {
    carBrands: carBrandsReducer,
    carsList: carsReducer,
    filters: filtersReducer,
    favorites: persistedReducerFavorites,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        ignoredPaths: ['register'],
      },
    }),
});

export const persistor = persistStore(store);

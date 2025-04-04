import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://car-rental-api.goit.global',
});

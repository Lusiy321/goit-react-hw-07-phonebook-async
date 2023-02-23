import { configureStore } from '@reduxjs/toolkit';
import contactReducer from 'redux/contactSlice';
import filterReducer from 'redux/filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filter: filterReducer,
  },
});

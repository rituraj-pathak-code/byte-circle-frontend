import { configureStore } from '@reduxjs/toolkit'
import userReducer from './redux/slices/userSlice.js';

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
})
// src/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';

export const store = configureStore({
  reducer: {
    login: authReducer,
  },
});

// Type for accessing state
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

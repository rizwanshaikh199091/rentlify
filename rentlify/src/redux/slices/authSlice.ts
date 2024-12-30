// src/redux/slices/authSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type LoginState = {
  status: 'authenticating' | 'loggedIn' | 'logout' | 'forceUpdate';
};

const initialState: LoginState = {
  status: 'loggedIn',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthStatus(state, action: PayloadAction<LoginState['status']>) {
      state.status = action.payload;
    },
  },
});

export const { setAuthStatus } = authSlice.actions;
export default authSlice.reducer;

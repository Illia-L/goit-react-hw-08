import { createSlice } from '@reduxjs/toolkit';
import { login, logout, refreshUser, register } from './operations';

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: true,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, action) => ({
        ...state,
        isLoggedIn: true,
        token: action.payload.token,
        user: action.payload.user,
      }))
      .addCase(login.fulfilled, (state, action) => ({
        ...state,
        isLoggedIn: true,
        token: action.payload.token,
        user: action.payload.user,
      }))
      .addCase(refreshUser.fulfilled, (state, action) => ({
        ...state,
        isLoggedIn: true,
        isRefreshing: false,
        user: action.payload,
      }))
      .addCase(refreshUser.rejected, () => ({
        ...initialState,
        isRefreshing: false,
      }))
      .addCase(logout.fulfilled, () => ({
        ...initialState,
        isRefreshing: false,
      }));
  },
});

export default slice.reducer;

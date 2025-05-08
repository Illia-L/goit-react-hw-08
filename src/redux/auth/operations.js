import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.goit.global';

function setAuthorizationHeader(value) {
  axios.defaults.headers.common['Authorization'] = value;
}

function unsetAuthorizationHeader() {
  delete axios.defaults.headers.common['Authorization'];
}

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    console.log('register operation runs...');
    try {
      const response = await axios.post('/users/signup', credentials);
      const data = response.data;

      setAuthorizationHeader(data.token);
      console.log(data);

      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post('/users/login', credentials);
      const data = response.data;

      setAuthorizationHeader(data.token);

      return data;
    } catch (err) {}
  }
);

export const logout = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/users/logout');

    unsetAuthorizationHeader();
  } catch (err) {}
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, { getState, rejectWithValue }) => {
    const token = getState().auth.token;

    if (!token) throw new error('Not authorized');

    setAuthorizationHeader(token);

    try {
      const response = await axios.get('/users/current');

      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
);

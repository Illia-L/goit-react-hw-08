import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { clearContacts } from '../contacts/slice';

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

export const login = createAsyncThunk('auth/login', async credentials => {
  try {
    const response = await axios.post('/users/login', credentials);
    const data = response.data;

    setAuthorizationHeader(data.token);

    return data;
  } catch (err) {}
});

export const logout = createAsyncThunk('auth/logout', async () => {
  await axios.post('/users/logout');

  unsetAuthorizationHeader();
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, { getState }) => {
    const token = getState().auth.token;

    if (!token) throw new Error();

    setAuthorizationHeader(token);

    const response = await axios.get('/users/current');

    return response.data;
  }
);

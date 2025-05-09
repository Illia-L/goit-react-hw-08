import { createSlice } from '@reduxjs/toolkit';
import { logout } from '../auth/operations';
import {
  addContact,
  deleteContact,
  fetchContacts,
  updateContact,
} from './operations';

const initialState = { items: [], loading: false, error: null };

const slice = createSlice({
  name: 'contacts',

  initialState,

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(fetchContacts.fulfilled, (state, action) => ({
        ...state,
        items: action.payload,
        loading: false,
      }))
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.rejected, handleRejected)
      .addCase(addContact.fulfilled, (state, action) => ({
        ...state,
        items: [...state.items, action.payload],
        loading: false,
      }))
      .addCase(updateContact.pending, handlePending)
      .addCase(updateContact.rejected, handleRejected)
      .addCase(updateContact.fulfilled, (state, action) => ({
        ...state,
        items: state.items.map(i =>
          i.id === action.payload.id ? action.payload : i
        ),
        loading: false,
      }))
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.rejected, handleRejected)
      .addCase(deleteContact.fulfilled, (state, action) => ({
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
        loading: false,
      }))
      .addCase(logout.fulfilled, state => ({
        ...state,
        items: [],
      }));
  },
});

export default slice.reducer;
export const { clearContacts } = slice.actions;

const handlePending = state => ({ ...state, loading: true, error: null });

const handleRejected = (state, action) => ({
  ...state,
  error: action.payload,
  loading: false,
});

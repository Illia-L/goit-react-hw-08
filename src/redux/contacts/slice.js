import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './operations';

const slice = createSlice({
  name: 'contacts',

  initialState: { items: [], loading: false, error: null },

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
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.rejected, handleRejected)
      .addCase(deleteContact.fulfilled, (state, action) => ({
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
        loading: false,
      }));
  },
});

export default slice.reducer;

const handlePending = state => ({ ...state, loading: true, error: null });

const handleRejected = (state, action) => ({
  ...state,
  error: action.payload,
  loading: false,
});

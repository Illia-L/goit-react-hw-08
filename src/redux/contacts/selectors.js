import { createSelector } from '@reduxjs/toolkit';
import { selectNameFilter } from '../filters/selectors';

const selectContacts = state => state.contacts.items;
export const selectLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, search) =>
    contacts?.filter(
      contact =>
        contact.name.toLowerCase().includes(search.toLowerCase()) ||
        contact.number.toLowerCase().includes(search.toLowerCase())
    )
);

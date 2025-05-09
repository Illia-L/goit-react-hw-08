import css from './ContactList.module.css';
import Contact from '../Contact/Contact';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectError,
  selectFilteredContacts,
  selectLoading,
} from '../../redux/contacts/selectors';
import { fetchContacts } from '../../redux/contacts/operations';
import { useEffect } from 'react';
import { List } from '@mui/material';
import { selectNameFilter } from '../../redux/filters/selectors';

function ContactList({setEditeeditedContactId}) {
  const filteredContacts = useSelector(selectFilteredContacts);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectLoading)
  const search = useSelector(selectNameFilter)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, []);

  if (!filteredContacts.length && !error && !isLoading && !search)
    return (
      <p className={css.message}>No contacts yet. Add your first contact.</p>
    );

  if (!filteredContacts.length && !error && !isLoading && search)
    return (
      <p className={css.message}>No contacts found.</p>
    );

  return (
    <List>
      {filteredContacts?.map(contact => (
        <Contact
          contact={contact}
          setEditeeditedContactId={setEditeeditedContactId}
          key={contact.id}
        />
      ))}
    </List>
  );
}

export default ContactList;

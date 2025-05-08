import css from './ContactList.module.css';
import Contact from '../Contact/Contact';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectError,
  selectFilteredContacts,
} from '../../redux/contacts/selectors';
import { fetchContacts } from '../../redux/contacts/operations';
import { useEffect } from 'react';
import { Grid, List } from '@mui/material';

function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, []);

  if (!filteredContacts.length && !error)
    return (
      <p className={css.message}>No contacts yet. Add your first contact.</p>
    );

  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3, lg: 4 }}
      // sx={{ justifyContent: 'center' }}
    >
      {filteredContacts?.map(contact => (
        <Contact
          contact={contact}
          key={contact.id}
        />
      ))}
    </Grid>
  );
}

export default ContactList;

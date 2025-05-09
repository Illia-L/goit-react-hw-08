import { useSelector } from 'react-redux';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import { selectIsLogged, selectIsRefreshing } from '../../redux/auth/selectors';
import { Typography } from '@mui/material';
import { useState } from 'react';
import { selectNameFilter } from '../../redux/filters/selectors';

function ContactsPage() {
  const [editedContactId, setEditeeditedContactId] = useState(null);
  const isLogged = useSelector(selectIsLogged);
  const isRefreshing = useSelector(selectIsRefreshing);

  if (isRefreshing) return null;

  if (!isLogged)
    return <Typography>Login to get access to your contacts.</Typography>;

  return (
    <div>
      <ContactForm
        editedContactId={editedContactId}
        setEditeeditedContactId={setEditeeditedContactId}
      />

      <ContactList setEditeeditedContactId={setEditeeditedContactId} />
    </div>
  );
}

export default ContactsPage;

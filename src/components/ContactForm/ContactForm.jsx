import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, updateContact } from '../../redux/contacts/operations';
import { Box, Button, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';
import {
  selectError,
  selectFilteredContacts,
} from '../../redux/contacts/selectors';
import SnackbarAlert from '../SnackbarAlert/SnackbarAlert';
const ContactValidationSchema = Yup.object().shape({
  // name: Yup.string()
  //   .min(3, 'Too short')
  //   .max(50, 'Too long')
  //   .required('Required'),
  number: Yup.string()
    .min(3, 'Too short')
    .max(50, 'Too long')
    .required('Required'),
});

function ContactForm({ editedContactId, setEditeeditedContactId }) {
  const [isPending, setIsPending] = useState(null);
  const [isServerError, setIsServerError] = useState(null);
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);
  const error = useSelector(selectError);
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState,
    formState: { errors },
  } = useForm({
    defaultValues: { name: '', number: '' },
    resolver: yupResolver(ContactValidationSchema),
  });

  useEffect(() => {
    if (formState.isSubmitSuccessful) reset();
  }, [formState.isSubmitSuccessful]);

  useEffect(() => {
    if (!editedContactId) return;

    const editedContact = filteredContacts.find(c => c.id === editedContactId);
    const { name, number } = editedContact;

    setValue('name', name);
    setValue('number', number);
  }, [editedContactId]);

  function onSubmit(values) {
    if (editedContactId) {
      return dispatch(updateContact({ ...values, id: editedContactId }));
    } else {
      dispatch(addContact({ ...values }));
    }

    setEditeeditedContactId(null);
    reset();
  }

  function handleCancelEdit() {
    setEditeeditedContactId(null);
    reset();
  }

  return (
    <>
      <SnackbarAlert
        open={!!error}
        message={error}
      />

      <Box
        component='form'
        onSubmit={handleSubmit(onSubmit)}
        onReset={handleCancelEdit}
        sx={{
          display: 'flex',
          gap: '1rem',
          alignItems: 'flex-start',
          mt: { xs: 3, sm: 4, lg: 5 },
        }}
      >
        <TextField
          {...register('name')}
          type='text'
          label='Name *'
          value={watch('name')}
          helperText={errors.name?.message || ' '}
          size='small'
          margin='normal'
          error={!!errors.name}
          sx={{ width: '10rem' }}
        />
        <TextField
          {...register('number')}
          type='text'
          label='Number *'
          value={watch('number')}
          helperText={errors.number?.message || ' '}
          size='small'
          fullWidth
          margin='normal'
          error={!!errors.number}
          sx={{ width: '10rem' }}
        />

        <Button
          variant='contained'
          type='submit'
          sx={{ mt: '1rem' }}
        >
          {editedContactId ? 'Save' : 'Add'}
        </Button>

        {editedContactId && (
          <Button
            variant='contained'
            type='reset'
            sx={{ mt: '1rem' }}
          >
            Cancel
          </Button>
        )}
      </Box>
    </>
  );
}

export default ContactForm;

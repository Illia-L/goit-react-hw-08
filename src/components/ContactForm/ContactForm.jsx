import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { Box, Button, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
const ContactValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too short')
    .max(50, 'Too long')
    .required('Required'),
  number: Yup.string()
    .min(3, 'Too short')
    .max(50, 'Too long')
    .required('Required'),
});

function ContactForm() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors },
  } = useForm({
    defaultValues: { name: '', number: '' },
    resolver: yupResolver(ContactValidationSchema),
  });

  useEffect(() => {
    if (formState.isSubmitSuccessful) reset();
  }, [formState.isSubmitSuccessful]);

  function onSubmit(values) {
    dispatch(addContact({ ...values }));
  }

  return (
    <Box
      component='form'
      onSubmit={handleSubmit(onSubmit)}
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
        Add
      </Button>
    </Box>
  );
}

export default ContactForm;

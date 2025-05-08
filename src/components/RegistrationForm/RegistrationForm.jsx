import { Box, Button, Paper, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import * as api from '../../redux/auth/operations';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';

const validationSchema = yup.object({
  name: yup
    .string()
    .required('Name is required')
    .max(50, 'Name must be no more that 50 symbols long'),
  email: yup
    .string()
    .required('Email is required')
    .email('Enter a valid email'),
  password: yup
    .string()
    .required('Password is required')
    .min(7, 'Password must be at least 8 sybmols long'),
  confirmPassword: yup
    .string()
    .required('Password confirm is required')
    .oneOf([yup.ref('password')], 'Passwords must match'),
});

function RegistrationForm() {
  const [isPending, setIsPending] = useState(false);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) });

  async function onSubmit(formData) {
    const { name, email, password } = formData;
    const credentials = { name, email, password };

    try {
      clearErrors();
      setIsPending(true);
      await dispatch(api.register(credentials)).unwrap();
    } catch (err) {
      console.log(err);
      if (err.response.data.code == 11000)
        setError('email', { message: 'This email is already registered' });
    } finally {
      setIsPending(false);
    }
  }

  return (
    <Paper
      sx={{
        marginInline: 'auto',
        mt: { xs: 6, sm: 7, lg: 8 },
        width: { xs: '90%', sm: '360px', lg: '450px' },
        padding: {
          xs: '24px 16px',
          sm: '28px 18px',
          lg: '40px 40px',
        },
      }}
    >
      <Box
        component='form'
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <Typography
          variant='h2'
          component='h1'
          align='center'
        >
          Signup
        </Typography>

        <TextField
          {...register('name')}
          type='text'
          label='Name *'
          helperText={errors.name?.message || ' '}
          fullWidth
          margin='normal'
          error={!!errors.name}
        />

        <TextField
          {...register('email')}
          type='email'
          label='Email *'
          helperText={errors.email?.message || ' '}
          fullWidth
          margin='normal'
          error={!!errors.email}
        />

        <TextField
          {...register('password')}
          type='password'
          label='Password *'
          helperText={errors.password?.message || ' '}
          fullWidth
          margin='normal'
          error={!!errors.password}
        />

        <TextField
          {...register('confirmPassword')}
          type='password'
          label='Confirm Password *'
          helperText={errors.confirmPassword?.message || ' '}
          fullWidth
          margin='normal'
          error={!!errors.confirmPassword}
        />

        <Button
          type='submit'
          variant='contained'
          size='large'
          loading={isPending}
          sx={{ mt: { xs: 3, sm: 4, lg: 5 }, mx: 'auto', display: 'block' }}
        >
          Signup
        </Button>
      </Box>
    </Paper>
  );
}

export default RegistrationForm;

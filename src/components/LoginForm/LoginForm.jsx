import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, Paper, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import { login } from '../../redux/auth/operations';
import { useState } from 'react';

const validationSchema = yup.object({
  email: yup
    .string()
    .required('Email is required')
    .email('Enter a valid email'),
  password: yup.string().required('Password is required'),
});

function LoginForm() {
  const [isPending, setIsPending] = useState(false);
  const [isError, setIsError] = useState(false);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) });

  async function onSubmit(data) {
    const { email, password } = data;
    const credentials = { email, password };

    try {
      setIsPending(true);
      setIsError(false);
      await dispatch(login(credentials)).unwrap();
    } catch (error) {
      setIsError(true);
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
          xs: 3,
          sm: 3.5,
          lg: 4,
        },
        pb: {
          xs: 1,
          sm: 1.5,
          lg: 2
        }
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
          Login
        </Typography>

        <TextField
          {...register('email')}
          label='Email *'
          helperText={errors.email?.message || ' '}
          error={!!errors.email}
          type='email'
          margin='normal'
          fullWidth
        />

        <TextField
          {...register('password')}
          label='Password *'
          helperText={errors.password?.message || ' '}
          error={!!errors.password}
          type='password'
          margin='normal'
          fullWidth
        />

        <Button
          type='submit'
          variant='contained'
          size='large'
          loading={isPending}
          sx={{ mt: { xs: 2, sm: 3, lg: 4 }, mx: 'auto', display: 'block' }}
        >
          Login
        </Button>

        <Typography
          color='error'
          sx={{
            mt: { sx: 1, sm: 1.5, lg: 2 },
            textAlign: 'center',
            fontSize: { xs: '0.5rem', sm: '0.6rem', lg: '0.8rem' },
          }}
        >
          {isError && 'Invalid email or password'}&nbsp;
        </Typography>
      </Box>
    </Paper>
  );
}

export default LoginForm;

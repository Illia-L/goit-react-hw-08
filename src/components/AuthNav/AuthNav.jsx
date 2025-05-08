import { Box, Button } from '@mui/material';
import { NavLink } from 'react-router';

function AuthNav() {
  return (
    <Box sx={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Button
        component={NavLink}
        to={'/login'}
        sx={{ color: { md: 'white' } }}
      >
        Login
      </Button>

      <Button
        component={NavLink}
        to={'/signup'}
        sx={{ color: 'white' }}
      >
        Signup
      </Button>
    </Box>
  );
}

export default AuthNav;

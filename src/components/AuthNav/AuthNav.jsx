import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { NavLink } from 'react-router';

function AuthNav() {
  return (
    <>
      {/* <Button
        component={NavLink}
        to='/'
        sx={{ my: 2, color: 'white', display: 'block' }}
      >
        Home
      </Button> */}

      <Box
        sx={{
          flexGrow: 1,
          display: 'flex',
          gap: { xs: 2, sm: 2.25, md: 2.5, lg: 2.75 },
          justifyContent: 'flex-end',
        }}
      >
        <Button
          component={NavLink}
          to={'/login'}
          sx={{ color: 'white' }}
        >
          Login
        </Button>
        <Button
          component={NavLink}
          to={'/register'}
          sx={{ color: 'white' }}
        >
          Signup
        </Button>
      </Box>
    </>
  );
}

export default AuthNav;

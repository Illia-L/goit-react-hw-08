import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { NavLink } from 'react-router';

function Navigation({ isLogged, isRefreshing }) {
  const isMobile = useMediaQuery('(max-width: 767px)');

  return (
    <>
      {!isMobile && isLogged && (
        <Box
          component='nav'
          aria-label='Main navigation'
          sx={{ display: 'flex', gap: { xs: 2, sm: 2.25, md: 2.5, lg: 2.75 } }}
        >
          <Button
            component={NavLink}
            to='/'
            sx={theme => ({
              my: 2,
              color: 'white',
              display: 'block',
              '&.active': {
                textDecoration: 'underline',
              },
            })}
          >
            Home
          </Button>

          <Button
            component={NavLink}
            to='/contacts'
            sx={theme => ({
              my: 2,
              color: 'white',
              display: 'block',
              '&.active': {
                textDecoration: 'underline',
                pointerEvents: 'none',
                cursor: 'default',
              },
              '&:hover': {
                textDecoration: 'underline',
              },
            })}
          >
            Contacts
          </Button>
        </Box>
      )}

      {!isLogged && !isRefreshing && (
        <Button
          component={NavLink}
          to='/'
          sx={theme => ({
            my: 2,
            color: 'white',
            display: 'block',
            '&.active': {
              textDecoration: 'underline',
            },
          })}
        >
          Home
        </Button>
      )}
    </>
  );
}

export default Navigation;

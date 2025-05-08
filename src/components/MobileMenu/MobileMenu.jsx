import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { NavLink } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/auth/operations';
import { selectName } from '../../redux/auth/selectors';
import { useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import SnackbarAlert from '../SnackbarAlert/SnackbarAlert';

function MobileMenu({ anchorElNav, handleCloseNavMenu }) {
  const [isPending, setIsPending] = useState(false);
  const [isError, setIsError] = useState(false);
  const dispatch = useDispatch();
  const name = useSelector(selectName);

  async function handleLogoutClick() {
    try {
      setIsError(false);
      setIsPending(true);
      await dispatch(logout()).unwrap();
      handleCloseNavMenu();
    } catch (err) {
      setIsError(true);
    } finally {
      setIsPending(false);
    }
  }

  return (
    <>
      <SnackbarAlert open={isError} />

      <Menu
        component='div'
        id='menu-appbar'
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        slotProps={{ paper: { sx: { minWidth: 200 } } }}
      >
        <MenuItem
          component={NavLink}
          to='/'
          onClick={handleCloseNavMenu}
          sx={theme => ({
            '&.active': {
              textDecoration: 'underline',
            },
          })}
        >
          Home
        </MenuItem>
        <MenuItem
          component={NavLink}
          to='/contacts'
          onClick={handleCloseNavMenu}
          sx={theme => ({
            '&.active': {
              textDecoration: 'underline',
            },
          })}
        >
          Contacts
        </MenuItem>
        <Divider />
        <MenuItem sx={{ pointerEvents: 'none', cursor: 'default' }}>
          <Typography color='primary'>
            <Box
              component='span'
              sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <AccountCircleIcon />{' '}
              <Box
                component='span'
                sx={{
                  display: 'block',
                  maxWidth: 200,
                  overflow: 'hidden',
                  whiteSpace: 'nowrap',
                  textOverflow: 'ellipsis',
                }}
              >
                {name || 'Guest'}
              </Box>
            </Box>
          </Typography>
        </MenuItem>
        <MenuItem onClick={handleLogoutClick}>
          {isPending ? (
            <CircularProgress
              color='inherit'
              size={20}
            />
          ) : (
            'Logout'
          )}
        </MenuItem>
      </Menu>
    </>
  );
}

export default MobileMenu;

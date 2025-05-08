import {
  Box,
  Button,
  Divider,
  Menu,
  MenuItem,
  Typography,
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { NavLink } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/auth/operations';
import { selectName } from '../../redux/auth/selectors';

function MobileMenu({ anchorElNav, handleCloseNavMenu }) {
  const dispatch = useDispatch();
  const name = useSelector(selectName);

  function handleLogoutClick() {
    dispatch(logout());
    handleCloseNavMenu();
  }

  return (
    <Menu
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
      >
        Home
      </MenuItem>

      <MenuItem
        component={NavLink}
        to='/contacts'
        onClick={handleCloseNavMenu}
      >
        Contacts
      </MenuItem>

      <Divider />

      <MenuItem
        component={NavLink}
        to='/logout'
        onClick={handleCloseNavMenu}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <AccountCircleIcon /> {name || 'Guest'}
        </Box>
      </MenuItem>

      <MenuItem
        component={NavLink}
        to='/logout'
        onClick={handleLogoutClick}
      >
        Logout
      </MenuItem>
    </Menu>
  );
}

export default MobileMenu;

import {
  InputAdornment,
  TextField,
  useTheme,
} from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useDispatch, useSelector } from 'react-redux';
import { selectName } from '../../redux/auth/selectors';
import SearchBox from '../SearchBox/SearchBox';
import { logout } from '../../redux/auth/operations';
import { NavLink } from 'react-router';
import MenuIcon from '@mui/icons-material/Menu';
import * as mui from '@mui/material'
// import { useTheme } from '@emotion/react';

// User menu:
// Desktop header: +Home, +Contacts, +search, user, Logout
// Mobile header: +search, menu icon

// Mobile menu: Home, Contacts, devider, user, Logout

console.log(mui);

function UserMenu() {
  const name = useSelector(selectName);
  const dispatch = useDispatch();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      {!isMobile && (
        <Box
          component='nav'
          aria-label='Main navigation'
          sx={{ display: 'flex', gap: { xs: 2, sm: 2.25, md: 2.5, lg: 2.75 } }}
        >
          <Button
            component={NavLink}
            to='/'
            sx={{ my: 2, color: 'white', display: 'block' }}
          >
            Home
          </Button>

          <Button
            component={NavLink}
            to='/contacts'
            sx={{ my: 2, color: 'white', display: 'block' }}
          >
            Contacts
          </Button>
        </Box>
      )}

      <Box sx={{ flexGrow: 1 }}>
        <Box sx={{ justifySelf: 'flex-end' }}>
          <SearchBox />
        </Box>
      </Box>

      {!isMobile && (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <Typography
            sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
          >
            <AccountCircleIcon /> {name || 'Guest'}
          </Typography>

          <Button
            onClick={() => dispatch(logout())}
            sx={{ color: 'white' }}
          >
            Logout
          </Button>
        </Box>
      )}

      {isMobile && (
        <Box sx={{ flexGrow: 1 }}>
          <IconButton
            size='large'
            aria-label='account of current user'
            aria-controls='menu-appbar'
            aria-haspopup='true'
            onClick={handleOpenNavMenu}
            color='inherit'
          >
            <MenuIcon />
          </IconButton>

          <MobileMenu
            anchorElNav={anchorElNav}
            isLogged={isLogged}
            isRefreshing={isRefreshing}
            handleCloseNavMenu={handleCloseNavMenu}
          />
        </Box>
      )}
    </>
  );
}

export default UserMenu;

import MuiAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import { useState } from 'react';
import { NavLink } from 'react-router';
import UserMenu from '../UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLogged, selectIsRefreshing } from '../../redux/auth/selectors';
import AuthNav from '../AuthNav/AuthNav';
import { useTheme, useMediaQuery } from '@mui/material';

function AppBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const isLogged = useSelector(selectIsLogged);
  const isRefreshing = useSelector(selectIsRefreshing);
  const theme = useTheme();

  return (
    <MuiAppBar position='static'>
      <Container>
        <Toolbar
          disableGutters
          sx={{ gap: { xs: 2, sm: 2.25, md: 2.5, lg: 2.75 } }}
        >
          <MenuBookIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 5 }} />

          {isLogged && <UserMenu />}

          {/* {!isMobile && (
            <Box sx={{ flexGrow: 1 }}>
              <Button
                component={NavLink}
                to='/'
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Home
              </Button>

              {isLogged && (
                <Button
                  component={NavLink}
                  to='/contacts'
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  Contacts
                </Button>
              )}
            </Box>
          )}

          <Box>
            {!isLogged && !isRefreshing && <AuthNav />}
            {isLogged && !isMobile && <UserMenu />}
          </Box>

          {isLogged && isMobile && (
            <Box sx={{ flexGrow: 1}}>
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
          )} */}
        </Toolbar>
      </Container>
    </MuiAppBar>
  );
}

export default AppBar;

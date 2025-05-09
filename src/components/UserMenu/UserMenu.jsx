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
import MobileMenu from '../MobileMenu/MobileMenu';
import { useState } from 'react';
import SnackbarAlert from '../SnackbarAlert/SnackbarAlert';

function UserMenu() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [isError, setIsError] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const name = useSelector(selectName);
  const dispatch = useDispatch();
  const isMobile = useMediaQuery('(max-width: 767px');

  function handleOpenNavMenu(e) {
    setAnchorElNav(e.currentTarget);
  }

  function handleCloseNavMenu() {
    setAnchorElNav(null);
  }

  async function handleLogout() {
    try {
      setIsError(false);
      setIsPending(true);
      await dispatch(logout()).unwrap();
    } catch (err) {
      setIsError(true);
    } finally {
      setIsPending(false);
    }
  }

  return (
    <>
      <SnackbarAlert open={isError} />

      <Box sx={{ flexGrow: 1 }}>
        <Box sx={{ justifySelf: 'flex-end' }}>
          <SearchBox />
        </Box>
      </Box>

      {!isMobile && (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <AccountCircleIcon />

            <Typography
              sx={{
                maxWidth: 100,
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
              }}
            >
              {name || 'Guest'}
            </Typography>
          </Box>

          <Button
            onClick={handleLogout}
            loading={isPending}
            sx={{ color: 'white' }}
          >
            Logout
          </Button>
        </Box>
      )}

      {isMobile && (
        <Box>
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
            handleCloseNavMenu={handleCloseNavMenu}
          />
        </Box>
      )}
    </>
  );
}

export default UserMenu;

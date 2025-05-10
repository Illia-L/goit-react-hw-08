import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import Container from '@mui/material/Container';
import UserMenu from '../UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectIsRefreshing,
} from '../../redux/auth/selectors';
import AuthNav from '../AuthNav/AuthNav';
import Navigation from '../Navigation/Navigation';

function AppBar() {
  const isLogged = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  return (
    <MuiAppBar position='static'>
      <Container>
        <Toolbar
          disableGutters
          sx={{ gap: { xs: 2, sm: 2.25, md: 2.5, lg: 2.75 } }}
        >
          <MenuBookIcon />

          <Navigation />

          {isLogged && <UserMenu />}

          {!isLogged && !isRefreshing && <AuthNav />}
        </Toolbar>
      </Container>
    </MuiAppBar>
  );
}

export default AppBar;

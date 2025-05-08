import { Container} from '@mui/material';
import AppBar from '../AppBar/AppBar';
import CssBaseline from '@mui/material/CssBaseline';

function Layout({ children }) {
  return (
    <>
      <CssBaseline />

      <AppBar />

      <Container
        component='main'
      >
        {children}
      </Container>
    </>
  );
}

export default Layout;

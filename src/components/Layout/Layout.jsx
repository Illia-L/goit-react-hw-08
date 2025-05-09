import { Container, ThemeProvider } from '@mui/material';
import AppBar from '../AppBar/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../../theme';

function Layout({ children }) {
  return (
    <>
      <CssBaseline />

      <ThemeProvider theme={theme}>
        <AppBar />

        <Container
          component='main'
          sx={{
            mt: { xs: 5, sm: 6, md: 7, lg: 8 },
            mb: { xs: 3, sm: 4, md: 5, lg: 6 },
          }}
        >
          {children}
        </Container>
      </ThemeProvider>
    </>
  );
}

export default Layout;

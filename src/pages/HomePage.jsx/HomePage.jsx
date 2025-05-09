import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { FaReact } from 'react-icons/fa';
import { SiRedux } from 'react-icons/si';
import { SiMui } from 'react-icons/si';
import { SiReacthookform } from 'react-icons/si';
import { SiAxios } from 'react-icons/si';

function HomePage() {
  return (
    <Box>
      <Typography
        variant='h2'
        component='h1'
      >
        Contacts App
      </Typography>

      <Typography variant='body1'>A training app to manage contacts.</Typography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: { xs: 4, sm: 4.5, md: 5, lg: 5.5 },
          mt: { xs: 8, sm: 10, md: 12, lg: 16 },
          maxWidth: { xs: 500, md: 'unset' },
        }}
      >
        <Box component='section'>
          <Paper
            elevation={2}
            sx={{ height: '100%' }}
          >
            <Box
              sx={{ width: { md: 420 }, p: { xs: 3, sm: 3.5, md: 4, lg: 4.5 } }}
            >
              <Typography
                variant='h4'
                component='h2'
              >
                Functionality
              </Typography>

              <List>
                <ListItem sx={{ mt: { xs: 1.5, sm: 1.75, md: 2, lg: 2.25 } }}>
                  Create, edit and delete contacts
                </ListItem>
                <ListItem>Search contacts</ListItem>
                <ListItem>Signup, Login and Logout</ListItem>
              </List>
            </Box>
          </Paper>
        </Box>

        <Box component='section'>
          <Paper elevation={2}>
            <Box
              sx={{ width: { md: 420 }, p: { xs: 3, sm: 3.5, md: 4, lg: 4.5 } }}
            >
              <Typography
                variant='h4'
                component='h2'
              >
                Technology stack
              </Typography>
              <List>
                <ListItem
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: { xs: 1.5, sm: 1.75, md: 2, lg: 2.25 },
                  }}
                >
                  <FaReact />
                  React
                </ListItem>
                <ListItem
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: { xs: 1.5, sm: 1.75, md: 2, lg: 2.25 },
                  }}
                >
                  <SiRedux />
                  Redux
                </ListItem>
                <ListItem
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: { xs: 1.5, sm: 1.75, md: 2, lg: 2.25 },
                  }}
                >
                  <SiMui />
                  Material UI
                </ListItem>
                <ListItem
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: { xs: 1.5, sm: 1.75, md: 2, lg: 2.25 },
                  }}
                >
                  <SiReacthookform />
                  React-hook-form
                </ListItem>
                <ListItem
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: { xs: 1.5, sm: 1.75, md: 2, lg: 2.25 },
                  }}
                >
                  <SiAxios />
                  Axios
                </ListItem>
                <ListItem
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: { xs: 1.5, sm: 1.75, md: 2, lg: 2.25 },
                  }}
                >
                  Redux Persist
                </ListItem>
                <ListItem
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: { xs: 1.5, sm: 1.75, md: 2, lg: 2.25 },
                  }}
                >
                  Yup
                </ListItem>
              </List>
            </Box>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
}

export default HomePage;

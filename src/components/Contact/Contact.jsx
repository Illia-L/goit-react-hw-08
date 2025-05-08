import css from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import PhoneIcon from '@mui/icons-material/Phone';
import PersonIcon from '@mui/icons-material/Person';
import { Box, Grid, IconButton, Paper, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function Contact({ contact }) {
  const dispatch = useDispatch();

  return (
    <Grid
      size={{ xs: 12, sm: 6, lg: 4 }}
      sx={{ maxWidth: { xs: 400 } }}
    >
      <Paper>
        <Box
          sx={{
            p: { xs: 1.5, sm: 2, md: 2.5, lg: 3 },
            display: 'flex',
            gap: 2,
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%'
          }}
        >
          <Box
            sx={{
              width: 'calc(100% - 40px - 16px)',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                gap: { xs: 1, sm: 1.5, lg: 2 },
                alignItems: 'center',
                width: '100%',
              }}
            >
              <PersonIcon />

              <Typography
                sx={{
                  fontSize: { xs: 16, sm: 18, md: 20, lg: 22 },
                  overflow: 'hidden',
                  whiteSpace: 'nowrap',
                  textOverflow: 'ellipsis',
                }}
              >
                {contact.name}
              </Typography>
            </Box>

            <Box
              sx={{
                display: 'flex',
                gap: { xs: 1, sm: 1.5, lg: 2 },
                alignItems: 'center',
              }}
            >
              <PhoneIcon />
              <Typography sx={{ fontSize: { xs: 16, sm: 18, md: 20, lg: 22 } }}>
                <span>{contact.number}</span>
              </Typography>
            </Box>
          </Box>

          <IconButton
            aria-label='delete'
            onClick={() => dispatch(deleteContact(contact.id))}
            sx={{ flex: '0 0 40px' }}
          >
            <DeleteIcon />
          </IconButton>
        </Box>
      </Paper>
    </Grid>
  );
}

export default Contact;

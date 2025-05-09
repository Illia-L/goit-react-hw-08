import css from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import PhoneIcon from '@mui/icons-material/Phone';
import PersonIcon from '@mui/icons-material/Person';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function Contact({ contact, setEditeeditedContactId }) {
  const dispatch = useDispatch();

  return (
    <ListItem
      size={{ xs: 12, sm: 6, lg: 4 }}
      sx={{ maxWidth: { xs: 400 }, px: 0 }}
    >
      <Paper>
        <Box
          sx={{
            p: { xs: 1.5, sm: 2, md: 2.5, lg: 3 },
            display: 'flex',
            gap: 2,
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: {
                xs: 'column',
                md: 'row',
              },
              gap: { xs: 1, sm: 1.5, md: 2, lg: 2.5 },
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
                  width: { xs: 120, sm: 200 },
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
              <Typography
                sx={{
                  width: { xs: 120, sm: 150 },
                  overflow: 'hidden',
                  whiteSpace: 'nowrap',
                  textOverflow: 'ellipsis',
                }}
              >
                <span>{contact.number}</span>
              </Typography>
            </Box>
          </Box>

          <IconButton
            aria-label='edit'
            onClick={() => setEditeeditedContactId(contact.id)}
            sx={{ flex: '0 0 40px' }}
          >
            <EditIcon />
          </IconButton>

          <IconButton
            aria-label='delete'
            onClick={() => dispatch(deleteContact(contact.id))}
            sx={{ flex: '0 0 40px' }}
          >
            <DeleteIcon />
          </IconButton>
        </Box>
      </Paper>
    </ListItem>
  );
}

export default Contact;

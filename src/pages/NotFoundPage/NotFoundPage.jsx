import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        textAlign: 'center',
        py: 10,
        px: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography
        variant='h1'
        color='primary'
        gutterBottom
      >
        404
      </Typography>

      <Typography
        variant='h5'
        gutterBottom
      >
        Page Not Found
      </Typography>

      <Button
        variant='contained'
        onClick={() => navigate('/')}
        sx={{ mt: 4 }}
      >
        Go to Home
      </Button>
    </Box>
  );
}

export default NotFoundPage;

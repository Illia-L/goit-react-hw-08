import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const defaultTheme = createTheme();

const theme = responsiveFontSizes(defaultTheme);

export default theme;
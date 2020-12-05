import { createMuiTheme } from '@material-ui/core/styles';
// Create a theme instance.
const lightTheme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        'html, body': {
          height: '100%',
          background: '#ebebeb',
          '&::-webkit-scrollbar': {
            width: '6px',
            background: '#ebebeb',
            height: '80%',
            borderRadius: 8,
          },
          '&::-webkit-scrollbar-track': {
            background: '#ebebeb',
            borderRadius: 8,
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#c9c9c9',
            borderRadius: 8,
          },
          '&::-webkit-scrollbar-thumb:hover': {
            background: '#a6a6a6',
          },
        },
      },
    },
  },
  palette: {
    type: 'light',
  },
  custom: {
    palette: {
      card: {
        main: '#ebebeb',
      },
      opposite: {
        background: '#424242',
        text: '#fff',
      },
    },
  },
});

export default lightTheme;

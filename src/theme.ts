import { createMuiTheme } from '@material-ui/core/styles';

// Create a theme instance.
const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        'html, body': {
          height: '100%',
          background: '#242424',
          '&::-webkit-scrollbar': {
            width: '6px',
            background: '#242424',
            height: '80%',
            borderRadius: 8,
          },
          '&::-webkit-scrollbar-track': {
            background: '#242424',
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
});

export default theme;

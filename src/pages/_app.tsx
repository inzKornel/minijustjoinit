import { AppProps } from 'next/app';
import CssBaseline from '@material-ui/core/CssBaseline';
import CustomThemeProvider from '@src/theme/CustommeProvider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CustomThemeProvider>
      <CssBaseline />
      <Component {...pageProps} />
    </CustomThemeProvider>
  );
}

export default MyApp;

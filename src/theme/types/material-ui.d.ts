import { Theme, ThemeOptions } from '@material-ui/core/styles/createMuiTheme';

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    custom: {
      palette: {
        card?: {
          main?: string;
        };
        opposite?: {
          background?: string;
          text?: string;
        };
      };
    };
  }
  interface ThemeOptions {
    custom?: {
      palette?: {
        card?: {
          main?: string;
        };
        opposite?: {
          background?: string;
          text?: string;
        };
      };
    };
  }
}

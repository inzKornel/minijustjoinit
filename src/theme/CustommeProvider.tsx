import * as React from 'react';
import { ThemeProvider } from '@material-ui/core';
import { getTheme, ThemeEnum } from './utils';

export interface ICustomThemeProvider {
  children: React.ReactNode;
}
export interface ICustomThemeContext {
  currentTheme: string;
  setTheme: ((theme: string) => void) | null; // null for initial value
}

export const CustomThemeContext = React.createContext<ICustomThemeContext>({
  currentTheme: ThemeEnum.DARK,
  setTheme: null,
});

function CustomThemeProvider(props: ICustomThemeProvider) {
  const { children } = props;
  // const storageTheme = localStorage.getItem('appTheme') || 'dark';
  const [themeName, setThemeName] = React.useState(ThemeEnum.DARK);

  const theme = getTheme(themeName);

  const handleThemeChange = (name: ThemeEnum) => {
    // localStorage.setItem('appTheme', name);
    setThemeName(name);
  };

  const contextValue: ICustomThemeContext = {
    currentTheme: themeName,
    setTheme: handleThemeChange,
  };

  return (
    <CustomThemeContext.Provider value={contextValue}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </CustomThemeContext.Provider>
  );
}

export default CustomThemeProvider;

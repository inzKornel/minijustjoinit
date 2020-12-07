import { Theme } from '@material-ui/core';
import light from './light';
import { Palette } from '@material-ui/core/styles/createPalette';
import dark from './dark';
export interface ICustomPalette extends Palette {
  custom: {
    background: string;
    paper: string;
  };
}

export enum ThemeEnum {
  DARK = 'dark',
  LIGHT = 'light',
}

interface ITheme {
  [key: string]: Theme;
}

const themes: ITheme = {
  light,
  dark,
};

export function getTheme(theme: ThemeEnum = ThemeEnum.LIGHT) {
  return themes[theme] || light;
}

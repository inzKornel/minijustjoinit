// external
import * as React from 'react';
import Link from 'next/link';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { Container, Switch } from '@material-ui/core';
//internal
import { CustomThemeContext, ICustomThemeContext } from '@src/theme/CustommeProvider';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  appbar: {
    background: theme.palette.background.paper,
    padding: '16px 12px',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    color: theme.palette.text.primary,
    transition: 'color .3s ease-in-out',
    '&:hover': {
      cursor: 'pointer',
      color: theme.palette.text.secondary,
      transition: 'color .3s ease-in-out',
    },
  },
  it: {
    color: theme.palette.info.light,
  },
}));

export default function Header() {
  const { currentTheme, setTheme } = React.useContext<ICustomThemeContext>(CustomThemeContext);
  const classes = useStyles();

  const handleThemeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event?.target;
    if (setTheme === null) return;
    if (checked) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <div className={classes.root}>
      <AppBar position='static' className={classes.appbar}>
        <Container className={classes.container}>
          <Link href='/'>
            <Typography variant='h6' className={classes.title}>
              Mini JustJoint<span className={classes.it}>.IT</span>
            </Typography>
          </Link>
          <Switch
            checked={currentTheme === 'dark'}
            onChange={handleThemeChange}
            name='themeSwitch'
            inputProps={{ 'aria-label': 'theme switch' }}
          />
        </Container>
      </AppBar>
    </div>
  );
}

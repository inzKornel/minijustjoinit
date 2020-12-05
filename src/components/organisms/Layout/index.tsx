//external
import * as React from 'react';
import { Container, Grid, makeStyles, Paper, Theme } from '@material-ui/core';

//internal
import { ICategory } from '@core/models/category';
import { IOffer } from '@core/models/offer';
import CategoriesBar from '@components/organisms/CategoriesBar';
import Header from '@components/organisms/Header';
import VisualMap from '@components/organisms/VisualMap';

export interface ILayout {
  offers: IOffer[];
  categories: ICategory[];
  children?: React.ReactNode;
}

const useStyles = makeStyles((theme: Theme) => ({
  grid: {
    position: 'relative',
    margin: '4px 0',
  },
  root: {
    [theme.breakpoints.up('md')]: {
      minWidth: 600,
      minHeight: 600,
    },
  },
}));

function Layout({ offers, categories, children }: ILayout) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Header />
      <Container>
        <CategoriesBar categories={categories} />
        {children}
        <Grid item xs={12} className={classes.grid}>
          <Paper elevation={3} className={classes.root}>
            <VisualMap offers={offers} />
          </Paper>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default Layout;

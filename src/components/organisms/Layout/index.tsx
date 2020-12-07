//external
import * as React from 'react';
import { Container, Grid, makeStyles, Paper, Theme } from '@material-ui/core';
import dynamic from 'next/dynamic';

//internal
import { ICategory } from '@core/models/category';
import { IOffer } from '@core/models/offer';
import CategoriesBar from '@components/organisms/CategoriesBar';
import Header from '@components/organisms/Header';

const NoSSRVisualMap = dynamic(() => import('@components/molecules/VisualMap'), {
  ssr: false,
});

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
            <NoSSRVisualMap offers={offers} />
          </Paper>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default Layout;

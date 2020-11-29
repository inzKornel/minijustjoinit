import * as React from 'react';
import { ICategory } from '@core/models/category';
import { IOffer } from '@core/models/offer';
import Header from '@components/organisms/Header';
import OffersContainer from '@components/organisms/OffersList';
import MapContainer from '@components/organisms/VisualMap';
import Container from '@material-ui/core/Container';
import { createStyles, Grid, makeStyles, Theme } from '@material-ui/core';

export interface IHomePage {
  offers: IOffer[];
  categories: ICategory[];
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grid: {
      position: 'relative',
    },
  })
);

function HomePage(props: IHomePage) {
  const { categories, offers } = props;
  const classes = useStyles();

  return (
    <React.Fragment>
      <Header />
      <Container>
        <Grid container>
          <Grid item xs={12}>
            <OffersContainer offers={offers} />
          </Grid>
          <Grid item xs={12} className={classes.grid}>
            <MapContainer offers={offers} />
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default HomePage;

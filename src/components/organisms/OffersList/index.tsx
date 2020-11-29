import OfferListItem from '@components/molecules/OfferListItem';
import { IOffer } from '@core/models/offer';
import { Grid, makeStyles, Paper } from '@material-ui/core';
import * as React from 'react';

export interface IOffersContainer {
  offers: IOffer[];
}

const useStyles = makeStyles({
  root: {
    maxHeight: 600,
    margin: '32px 0',
    padding: '32px 0',
    overflowX: 'hidden',
    background: '#303030',
    '&::-webkit-scrollbar': {
      width: '6px',
      background: '#303030',
      height: '80%',
      borderRadius: 8,
    },

    '&::-webkit-scrollbar-track': {
      background: '#303030',
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
});

function OffersContainer(props: IOffersContainer) {
  const classes = useStyles();

  const { offers } = props;
  return (
    <Paper elevation={3} className={classes.root}>
      <Grid container justify='center' spacing={2}>
        {offers &&
          offers.map((offer) => (
            <Grid key={offer.id} item>
              <OfferListItem {...offer} />
            </Grid>
          ))}
      </Grid>
    </Paper>
  );
}

export default OffersContainer;

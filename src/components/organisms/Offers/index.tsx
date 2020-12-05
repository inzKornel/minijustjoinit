//external
import * as React from 'react';
import { Grid, makeStyles, Paper, Theme } from '@material-ui/core';

//internal
import { IOffer } from '@core/models/offer';
import OfferListItem from '@components/molecules/OfferListItem';

export interface IOffersContainer {
  offers: IOffer[];
}

//TODO(K.S) Add global theme - do not use string colors variables :(
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    maxHeight: 600,
    margin: '4px 0 8px',
    padding: '32px 0',
    overflowX: 'hidden',
    background: theme.palette.background.paper,
    '&::-webkit-scrollbar': {
      width: '6px',
      background: theme.palette.background.paper,
      height: '80%',
      borderRadius: 8,
    },

    '&::-webkit-scrollbar-track': {
      background: theme.palette.background.paper,
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
}));

function OffersContainer(props: IOffersContainer) {
  const classes = useStyles();

  const { offers } = props;
  return (
    <Grid item xs={12}>
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
    </Grid>
  );
}

export default OffersContainer;

import { createStyles, makeStyles } from '@material-ui/core';
import * as React from 'react';

export interface ICity {
  city: string;
}

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    mark: {
      width: 12,
    },
    city: {
      paddingLeft: 8,
      fontSize: 12,
    },
  })
);

function City(props: ICity) {
  const classes = useStyles();
  if (!props.city.trim()) return null;

  return (
    <div className={classes.root}>
      <img src='/pin.svg' className={classes.mark} />
      <span className={classes.city}>{props.city}</span>
    </div>
  );
}

export default City;

import * as React from 'react';
import Image from 'next/image';
import { createStyles, makeStyles } from '@material-ui/core';

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
      <Image src='/assets/pin.svg' alt='city marker' width={12} height={20} />
      <span className={classes.city}>{props.city}</span>
    </div>
  );
}

export default City;

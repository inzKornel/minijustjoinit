import * as React from 'react';
import { makeStyles, Paper } from '@material-ui/core';
import { IOffer } from '@core/models/offer';

import ReactMapboxGl, { Layer, Feature, Image, ZoomControl, ScaleControl } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

export interface IMap {
  offers: IOffer[];
}

const Mapbox = ReactMapboxGl({
  accessToken: process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN || '',
});

const useStyles = makeStyles({
  root: {
    minWidth: 600,
    minHeight: 600,
  },
});

function VisualMap(props: IMap) {
  const { offers } = props;
  const classes = useStyles();

  return (
    <Paper elevation={3} className={classes.root}>
      <Mapbox
        style='mapbox://styles/mapbox/dark-v10'
        containerStyle={{
          height: '100%',
          width: '100%',
          position: 'absolute',
          flex: 1,
        }}
        center={[20.984284601314716, 52.244987578727326]}
        zoom={[12]}
      >
        <ScaleControl />
        <ZoomControl />

        <Layer
          type='circle'
          paint={{
            'circle-radius': 15,
            'circle-color': 'red',
            'circle-opacity': 0.8,
          }}
        >
          <Feature coordinates={[20.984284601314716, 52.244987578727326]} />
        </Layer>
      </Mapbox>
    </Paper>
  );
}

export default VisualMap;

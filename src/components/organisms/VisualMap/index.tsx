import 'mapbox-gl/dist/mapbox-gl.css';
import * as React from 'react';
import ReactMapboxGl, { Feature, Layer, ScaleControl, ZoomControl } from 'react-mapbox-gl';
import { IOffer } from '@core/models/offer';

export interface IMap {
  offers: IOffer[];
  containerStyle?: Partial<React.CSSProperties>;
}

const Mapbox = ReactMapboxGl({
  accessToken: process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN || '',
});

function VisualMap(props: IMap) {
  const { offers = [], containerStyle, ...rest } = props;

  return (
    <Mapbox
      {...rest}
      style='mapbox://styles/mapbox/dark-v10'
      containerStyle={{
        height: '100%',
        width: '100%',
        position: 'absolute',
        flex: 1,
        ...containerStyle,
      }}
      //TODO: Add some validation
      center={[offers.length && offers[0]?.longitude, offers && offers.length && offers[0]?.latitude]}
      zoom={[12]}
    >
      <ScaleControl />
      <ZoomControl />
      <Layer
        type='circle'
        paint={{
          'circle-radius': 10,
          'circle-color': 'yellow',
          'circle-opacity': 0.8,
        }}
      >
        {offers.map((offer) => (
          <Feature key={offer.id} coordinates={[offer.longitude, offer.latitude]} />
        ))}
      </Layer>
    </Mapbox>
  );
}

export default VisualMap;

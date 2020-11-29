import * as React from 'react';
import * as offersApi from '@core/api/offers';
import { IOffer } from '@core/models/offer';
import { getOffersMemory } from '@core/utils/offers';

export interface IOfferDetails {
  offer: IOffer;
}

function OfferDetails(props: IOfferDetails) {
  return <div>Offers for category: /all/:id</div>;
}

export default OfferDetails;

export async function getStaticPaths(props) {
  const offers: IOffer[] = await offersApi.getOffers();
  const paths = offers.map((offer) => `/all/${offer.marker_icon}`);

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params, ...rest }) {
  const offers = await getOffersMemory();
  const offersForCategory = offers?.filter((offer) => offer.marker_icon === params.id);

  if (offersForCategory && !offersForCategory.length) {
    return {
      redirect: {
        destination: '/all',
        permanent: false,
      },
    };
  }
  // Pass post data to the page via props
  return {
    props: {
      offers: offersForCategory,
    },
  };
}

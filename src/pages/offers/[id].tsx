import * as React from 'react';
import * as offersApi from '@core/api/offers';
import { IOffer } from '@core/models/offer';
import { getOffersMemory } from '@core/utils/offers';

export interface IOfferDetails {
  offer: IOffer;
}

function OfferDetails(props: IOfferDetails) {
  return <div>OfferDetails path: /offers/:id</div>;
}

export default OfferDetails;

export async function getStaticPaths(props) {
  const offers: IOffer[] = await offersApi.getOffers();
  const paths = offers.map((offer) => `/offers/${offer.id}`);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params, ...rest }) {
  // params contains the post `id`.
  const offers = await getOffersMemory();
  // If the route is like /posts/1, then params.id is 1
  const offer = offers?.find((offer) => offer.id === params.id);

  // Pass post data to the page via props
  return {
    props: {
      offer,
    },
  };
}

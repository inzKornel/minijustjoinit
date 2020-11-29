import * as React from 'react';
import { ICategory } from '@core/models/category';
import { IOffer } from '@core/models/offer';
import { mapCategories } from '@core/utils/categories';
import * as offersApi from '@core/api/offers';
import VisualMap from '@components/organisms/VisualMap';
import OffersList from '@components/organisms/OffersList';

export interface IOffers {
  offers: IOffer[];
}

export default function Offers(props: IOffers) {
  const { offers } = props;
  return (
    <div>
      <OffersList offers={offers} />
      <VisualMap offers={props.offers} />
    </div>
  );
}

export async function getStaticProps() {
  const offersData: IOffer[] = await offersApi.getOffers();
  const categoriesData: ICategory[] = mapCategories(offersData);
  //TODO: Add error handling here

  return {
    props: {
      offers: offersData,
      categories: categoriesData,
    },
  };
}

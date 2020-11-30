import * as React from 'react';
import { IOffer } from '@core/models/offer';
import { getOffersMemory } from '@core/utils/offers';
import { ICategory } from '@src/core/models/category';
import { mapCategories } from '@src/core/utils/categories';
import Layout from '@components/organisms/Layout';
import OffersContainer from '@components/organisms/Offers';
export interface IOffersByCategoryPage {
  offers: IOffer[];
  categories: ICategory[];
}

function OffersByCategoryPage(props: IOffersByCategoryPage) {
  const { offers, categories } = props;

  return (
    <Layout categories={categories} offers={offers}>
      <OffersContainer offers={offers} />
    </Layout>
  );
}

export default OffersByCategoryPage;

export async function getStaticPaths() {
  const offers = await getOffersMemory();
  const paths = offers && offers.map((offer) => `/all/${offer.marker_icon}`);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const offers = await getOffersMemory();
  const offersByCategory = offers && offers.filter((offer) => offer.marker_icon === params.id);
  const categoriesData: ICategory[] = mapCategories(offers);

  // Pass post data to the page via props
  return {
    props: {
      offers: offersByCategory,
      categories: categoriesData,
    },
  };
}

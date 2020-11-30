import * as React from 'react';
import { IOffer } from '@core/models/offer';
import { getOffersMemory } from '@core/utils/offers';
import { ICategory } from '@src/core/models/category';
import OfferDetails from '@components/organisms/OfferDetails';
import { mapCategories } from '@src/core/utils/categories';
import { Container } from '@material-ui/core';
import Header from '@components/organisms/Header';
import CategoriesBar from '@components/organisms/CategoriesBar';

export interface IOfferDetailsPage {
  offer: IOffer;
  categories: ICategory[];
}

function OfferDetailsPage(props: IOfferDetailsPage) {
  const { offer, categories } = props;

  return (
    <React.Fragment>
      <Header />
      <Container>
        <CategoriesBar categories={categories} />
        <OfferDetails offer={offer} />
      </Container>
    </React.Fragment>
  );
}

export default OfferDetailsPage;

export async function getStaticPaths() {
  const offers = await getOffersMemory();
  const paths = offers && offers.map((offer) => `/offers/${offer.id}`);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const offers = await getOffersMemory();
  const offer = offers && offers.find((offer) => offer.id === params.id);
  const categories: ICategory[] = mapCategories(offers);

  return {
    props: {
      offer,
      categories,
    },
  };
}

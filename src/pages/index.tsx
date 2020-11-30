import 'fontsource-roboto';
import { IOffer } from '@core/models/offer';
import { ICategory } from '@core/models/category';
import { mapCategories } from '@core/utils/categories';
import { getOffersMemory } from '@core/utils/offers';
import Layout from '@components/organisms/Layout';
import OffersContainer from '@components/organisms/Offers';
import { isArray } from 'util';

export interface IMainState {
  offers: IOffer[];
  categories: ICategory[];
}

export default function SSG(props: IMainState) {
  return (
    <Layout {...props}>
      <OffersContainer offers={props.offers} />
    </Layout>
  );
}

export async function getStaticProps() {
  const offers = await getOffersMemory();
  //TODO(K.S) Add better error handling pls
  if (!Array.isArray(offers)) {
    // 404 or redirect
  }
  const categories: ICategory[] = mapCategories(offers);

  return {
    props: {
      offers,
      categories,
    },
  };
}

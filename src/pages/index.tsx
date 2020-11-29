import 'fontsource-roboto';
import * as offersApi from '@core/api/offers';
import { IOffer } from '@core/models/offer';
import { ICategory } from '@core/models/category';
import { mapCategories } from '@core/utils/categories';
import HomePage from './home';

export interface IMainState {
  offers: IOffer[];
  categories: ICategory[];
}

export default function SSG(props: IMainState) {
  return <HomePage {...props} />;
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

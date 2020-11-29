import { ApiRequestException } from '@core/exceptions/ApiException';
import { IOffer } from '@core/models/offer';
import axios from 'axios';

export async function getOffers(): Promise<IOffer[]> {
  try {
    const { data } = await axios.get('https://test.justjoin.it/offers');
    return data;
  } catch (error: unknown) {
    // We should check error type and probably behave differently on each case
    throw new ApiRequestException();
  }
}

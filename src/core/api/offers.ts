import axios from 'axios';
import { ApiRequestException } from '@core/exceptions/apiexception';
import { IOffer } from '@core/models/offer';

class JustJoinApi {
  private readonly _apiUrlBase: string;

  constructor(baseUrl: string) {
    this._apiUrlBase = baseUrl;
  }

  public getOffers = async (): Promise<IOffer[]> => {
    try {
      const { data } = await axios.get(this._apiUrlBase + 'offers');
      return data;
    } catch (error: unknown) {
      // We should check error type and probably behave differently on each case
      throw new ApiRequestException();
    }
  };
}

export default new JustJoinApi('https://test.justjoin.it/');

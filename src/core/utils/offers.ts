import * as offersApi from '@core/api/offers';
import { SingleOfferException } from '@core/exceptions/SingleOfferException';
import { IOffer } from '@core/models/offer';
import { addMinutes, isAfter, subMinutes } from 'date-fns';

interface IOffersMemory {
  fetchedDate: Date | null;
  data: IOffer[] | null;
}

let offersMemory: IOffersMemory = {
  fetchedDate: null,
  data: null,
};

export async function getOffersMemory() {
  try {
    if (shouldFetchData(offersMemory)) {
      const offers = await offersApi.getOffers();
      offersMemory.data = offers;
      offersMemory.fetchedDate = new Date();
      return offers;
    } else {
      return Promise.resolve(offersMemory.data);
    }
  } catch (error) {
    throw new SingleOfferException();
  }
}

function isOffersMemoryObject(obj: any): obj is IOffersMemory {
  return typeof obj === 'object' && obj.data !== undefined && obj.fetchedDate !== undefined;
}

function shouldFetchData(memoryData: IOffersMemory) {
  const now = new Date();
  if (memoryData.data === null || memoryData.fetchedDate === null) return true;

  var memoryDateLimit = addMinutes(memoryData.fetchedDate, 5);
  // if data already exists and data was fetched not earlier than 5 minutes from now
  // tbh. it is hack for preventing double data fetching in getStaticPaths and getStaticProps
  // I've implemented this because api endpoint for single offer doesn't exists like on justjoin :(
  return memoryData.data !== null && !isAfter(now, memoryDateLimit);
}

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

/**
 * This is probably some anty-pattern. I dunno how to prevent fetching all data without /offers/:id api route
 */
export async function getOffersMemory() {
  try {
    if (shouldFetchData(offersMemory)) {
      const offers = await offersApi.getOffers();
      const mappedOffers = offers.map((offer) => ({ ...offer, id: decodeURIComponent(offer.id).trim() }));
      offersMemory.data = mappedOffers;
      offersMemory.fetchedDate = new Date();
      return mappedOffers;
    } else {
      return Promise.resolve(offersMemory.data);
    }
  } catch (error) {
    throw new SingleOfferException();
  }
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

function isOffer(obj: any): obj is IOffer {
  return (
    typeof obj === 'object' &&
    obj !== undefined &&
    obj.id !== undefined &&
    obj.title !== undefined &&
    obj.street !== undefined &&
    obj.city !== undefined &&
    obj.country_code !== undefined &&
    obj.marker_icon !== undefined &&
    obj.remote !== undefined &&
    obj.experience_level !== undefined &&
    obj.salary_from !== undefined &&
    obj.salary_to !== undefined &&
    obj.salary_currency !== undefined &&
    obj.latitude !== undefined &&
    obj.longitude !== undefined &&
    obj.employment_type !== undefined &&
    obj.published_at !== undefined &&
    obj.company_name !== undefined &&
    obj.company_url !== undefined &&
    obj.company_size !== undefined &&
    obj.company_logo_url !== undefined &&
    obj.skills !== undefined
  );
}

function isArray(arr: any): arr is any[] {
  return typeof arr === 'object' && Array.isArray(arr);
}

// function isPureArrayOf<T>(arr: any[], obj: () => T): arr is T[] {
//   if (isArray(arr)) {
//     for (const item of arr) {
//       if (!(item instanceof obj)) {
//         return false;
//       }
//     }
//   }
//   return true
// }

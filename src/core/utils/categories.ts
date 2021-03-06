import { CategoriesEnum, ICategory, ICategoryAppearance } from '@core/models/category';
import { IOffer } from '@core/models/offer';

/**
 * This function is probably anty-pattern but I dunno know atm how to map icons/colors for categories
 *
 */
export function mapCategories(offers: IOffer[] | null): ICategory[] {
  if (!Array.isArray(offers)) return [];

  return offers
    .map((offer, index) => {
      const { imageSrc, color } = getCategoryImage(offer.marker_icon);
      return {
        id: index,
        name: offer.marker_icon,
        imageSrc,
        color,
      };
    })
    .filter((offer, index, arr) => arr.findIndex((elem) => elem.name === offer.name) === index);
}

export function getCategoryImage(categoryName: string, defaultImageSrc?: string, defaultColor?: string) {
  let appearanceObj: ICategoryAppearance = {
    color: defaultColor || '255, 224, 130',
    imageSrc: defaultImageSrc || '/assets/windows8-original.svg',
  };

  switch (categoryName) {
    case CategoriesEnum.JAVA: {
      (appearanceObj.color = '239, 83, 80'), (appearanceObj.imageSrc = '/assets/java-original.svg');
      break;
    }
    case CategoriesEnum.NET: {
      (appearanceObj.color = '186, 104, 200'), (appearanceObj.imageSrc = '/assets/dot-net-original.svg');
      break;
    }
    case CategoriesEnum.TESTING: {
      (appearanceObj.color = '142, 36, 170'), (appearanceObj.imageSrc = '/assets/test.svg');
      break;
    }
    case CategoriesEnum.C: {
      (appearanceObj.color = '171, 71, 188'), (appearanceObj.imageSrc = '/assets/c-original.svg');
      break;
    }
    case CategoriesEnum.JAVASCRIPT: {
      (appearanceObj.color = '255, 224, 130'), (appearanceObj.imageSrc = '/assets/javascript-original.svg');
      break;
    }
    case CategoriesEnum.UX: {
      (appearanceObj.color = '142, 36, 170'), (appearanceObj.imageSrc = '/assets/sketch-original.svg');
      break;
    }
    case CategoriesEnum.PHP: {
      (appearanceObj.color = '79, 195, 247'), (appearanceObj.imageSrc = '/assets/php-original.svg');
      break;
    }
    case CategoriesEnum.DATA: {
      (appearanceObj.color = '41, 121, 255'), (appearanceObj.imageSrc = '/assets/db.svg');
      break;
    }
    case CategoriesEnum.RUBY: {
      (appearanceObj.color = '229, 115, 115'), (appearanceObj.imageSrc = '/assets/ruby-original.svg');
      break;
    }
    case CategoriesEnum.DEVOPS: {
      (appearanceObj.color = '171, 71, 188'), (appearanceObj.imageSrc = '/assets/devops.svg');
      break;
    }
    case CategoriesEnum.BLOCKCHAIN: {
      (appearanceObj.color = '161, 136, 127'), (appearanceObj.imageSrc = '/assets/blockchain.svg');
      break;
    }
    case CategoriesEnum.PYTHON: {
      (appearanceObj.color = '174, 213, 129'), (appearanceObj.imageSrc = '/assets/python-original.svg');
      break;
    }
    case CategoriesEnum.HTML: {
      (appearanceObj.color = '255, 183, 77'), (appearanceObj.imageSrc = '/assets/html5-original.svg');
      break;
    }
    case CategoriesEnum.MOBILE: {
      (appearanceObj.color = '41, 121, 255'), (appearanceObj.imageSrc = '/assets/android-original.svg');
      break;
    }
    case CategoriesEnum.SCALA: {
      (appearanceObj.color = '239, 83, 80'), (appearanceObj.imageSrc = '/assets/scala-original.svg');
      break;
    }
    case CategoriesEnum.PM: {
      (appearanceObj.color = '174, 213, 129'), (appearanceObj.imageSrc = '/assets/pm.svg');
      break;
    }
    case CategoriesEnum.SAP: {
      (appearanceObj.color = '161, 136, 127'), (appearanceObj.imageSrc = '/assets/sap.svg');
      break;
    }
    case CategoriesEnum.GO: {
      (appearanceObj.color = '171, 71, 188'), (appearanceObj.imageSrc = '/assets/go-original.svg');
      break;
    }
    case CategoriesEnum.SECURITY: {
      (appearanceObj.color = '183, 239, 80'), (appearanceObj.imageSrc = '/assets/test.svg');
      break;
    }
    case CategoriesEnum.GAME: {
      (appearanceObj.color = '171, 71, 188'), (appearanceObj.imageSrc = '/assets/support.svg');
      break;
    }
    case CategoriesEnum.OTHER:
    default:
      return appearanceObj;
  }
  return appearanceObj;
}

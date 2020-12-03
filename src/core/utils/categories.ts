import { CategoriesEnum, ICategory, ICategoryAppearance } from '@core/models/category';
import { IOffer } from '@core/models/offer';
import { cdnImage } from '@core/utils/images';

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
    imageSrc: defaultImageSrc || cdnImage('/windows8-original.svg', false, ''),
  };

  switch (categoryName) {
    case CategoriesEnum.JAVA: {
      (appearanceObj.color = '239, 83, 80'), (appearanceObj.imageSrc = cdnImage('  /java-original.svg', false, ''));
      break;
    }
    case CategoriesEnum.NET: {
      (appearanceObj.color = '186, 104, 200'), (appearanceObj.imageSrc = cdnImage('/dot-net-original.svg', false, ''));
      break;
    }
    case CategoriesEnum.TESTING: {
      (appearanceObj.color = '142, 36, 170'), (appearanceObj.imageSrc = cdnImage('/test.svg', false, ''));
      break;
    }
    case CategoriesEnum.C: {
      (appearanceObj.color = '171, 71, 188'), (appearanceObj.imageSrc = cdnImage('/c-original.svg', false, ''));
      break;
    }
    case CategoriesEnum.JAVASCRIPT: {
      (appearanceObj.color = '255, 224, 130'),
        (appearanceObj.imageSrc = cdnImage('/javascript-original.svg', false, ''));
      break;
    }
    case CategoriesEnum.UX: {
      (appearanceObj.color = '142, 36, 170'), (appearanceObj.imageSrc = cdnImage('/sketch-original.svg', false, ''));
      break;
    }
    case CategoriesEnum.PHP: {
      (appearanceObj.color = '79, 195, 247'), (appearanceObj.imageSrc = cdnImage('/php-original.svg', false, ''));
      break;
    }
    case CategoriesEnum.DATA: {
      (appearanceObj.color = '41, 121, 255'), (appearanceObj.imageSrc = cdnImage('/db.svg', false, ''));
      break;
    }
    case CategoriesEnum.RUBY: {
      (appearanceObj.color = '229, 115, 115'), (appearanceObj.imageSrc = cdnImage('/ruby-original.svg', false, ''));
      break;
    }
    case CategoriesEnum.DEVOPS: {
      (appearanceObj.color = '171, 71, 188'), (appearanceObj.imageSrc = cdnImage('/devops.svg', false, ''));
      break;
    }
    case CategoriesEnum.BLOCKCHAIN: {
      (appearanceObj.color = '161, 136, 127'), (appearanceObj.imageSrc = cdnImage('/blockchain.svg', false, ''));
      break;
    }
    case CategoriesEnum.PYTHON: {
      (appearanceObj.color = '174, 213, 129'), (appearanceObj.imageSrc = cdnImage('/python-original.svg', false, ''));
      break;
    }
    case CategoriesEnum.HTML: {
      (appearanceObj.color = '255, 183, 77'), (appearanceObj.imageSrc = cdnImage('/html5-original.svg', false, ''));
      break;
    }
    case CategoriesEnum.MOBILE: {
      (appearanceObj.color = '41, 121, 255'), (appearanceObj.imageSrc = cdnImage('/android-original.svg', false, ''));
      break;
    }
    case CategoriesEnum.SCALA: {
      (appearanceObj.color = '239, 83, 80'), (appearanceObj.imageSrc = cdnImage('/scala-original.svg', false, ''));
      break;
    }
    case CategoriesEnum.PM: {
      (appearanceObj.color = '174, 213, 129'), (appearanceObj.imageSrc = cdnImage('/pm.svg', false, ''));
      break;
    }
    case CategoriesEnum.SAP: {
      (appearanceObj.color = '161, 136, 127'), (appearanceObj.imageSrc = cdnImage('/sap.svg', false, ''));
      break;
    }
    case CategoriesEnum.GO: {
      (appearanceObj.color = '171, 71, 188'), (appearanceObj.imageSrc = cdnImage('/go-original.svg', false, ''));
      break;
    }
    case CategoriesEnum.SECURITY: {
      (appearanceObj.color = '183, 239, 80'), (appearanceObj.imageSrc = cdnImage('/test.svg', false, ''));
      break;
    }
    case CategoriesEnum.GAME: {
      (appearanceObj.color = '171, 71, 188'), (appearanceObj.imageSrc = cdnImage('/support.svg', false, ''));
      break;
    }
    case CategoriesEnum.OTHER:
    default:
      return appearanceObj;
  }
  return appearanceObj;
}

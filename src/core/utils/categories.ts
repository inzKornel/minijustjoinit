import { CategoriesEnum, ICategory, ICategoryAppearance } from '@core/models/category';
import { IOffer } from '@core/models/offer';

export function mapCategories(offers: IOffer[]): ICategory[] {
  const result = offers
    .map((offer, index) => ({
      id: index,
      name: offer.marker_icon,
      imageSrc: getCategoryImage(offer.marker_icon).imageSrc || null,
    }))
    .filter((offer, index, arr) => arr.findIndex((elem) => elem.name === offer.name) === index);
  return result;
}

export function getCategoryImage(categoryName: string, defaultImageSrc?: string, defaultColor?: string) {
  let appearanceObj: ICategoryAppearance = {
    color: defaultColor || '#ffecb3',
    imageSrc:
      defaultImageSrc ||
      'https://styles.redditmedia.com/t5_2vz91/styles/communityIcon_6bw4i7ra1sl31.png?width=256&s=8af73cada9f13406ce93c642bc60e83d98be2945',
  };

  switch (categoryName) {
    case CategoriesEnum.JAVA: {
      (appearanceObj.color = '239, 83, 80'),
        (appearanceObj.imageSrc = 'https://jaki-jezyk-programowania.pl/img/technologies/java.png');
      break;
    }
    case CategoriesEnum.NET: {
      (appearanceObj.color = '186, 104, 200'),
        (appearanceObj.imageSrc = 'https://winaero.com/blog/wp-content/uploads/2018/06/net-framework-icon.png');
      break;
    }
    case CategoriesEnum.TESTING: {
      (appearanceObj.color = '142, 36, 170'),
        (appearanceObj.imageSrc =
          'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/001/217/square_256/cypress.png');
      break;
    }
    case CategoriesEnum.C: {
      (appearanceObj.color = ''),
        (appearanceObj.imageSrc = 'https://cdn.iconscout.com/icon/free/png-256/c-programming-569564.png');
      break;
    }
    case CategoriesEnum.JAVASCRIPT: {
      (appearanceObj.color = '255, 224, 130'),
        (appearanceObj.imageSrc = 'https://jaki-jezyk-programowania.pl/img/technologies/javascript.png');
      break;
    }
    case CategoriesEnum.UX: {
      (appearanceObj.color = '142, 36, 170'),
        (appearanceObj.imageSrc = 'https://i.pinimg.com/originals/46/55/f0/4655f094bdb42780875cd9180a4a83a9.png');
      break;
    }
    case CategoriesEnum.PHP: {
      (appearanceObj.color = '79, 195, 247'),
        (appearanceObj.imageSrc = 'https://cdn.iconscout.com/icon/free/png-256/php-99-1175127.png');
      break;
    }
    case CategoriesEnum.DATA: {
      (appearanceObj.color = '41, 121, 255'),
        (appearanceObj.imageSrc = 'https://cdn.iconscout.com/icon/premium/png-256-thumb/big-data-1661872-1414877.png');
      break;
    }
    case CategoriesEnum.RUBY: {
      (appearanceObj.color = '229, 115, 115'),
        (appearanceObj.imageSrc = 'https://jaki-jezyk-programowania.pl/img/technologies/ruby.png');
      break;
    }
    case CategoriesEnum.DEVOPS: {
      (appearanceObj.color = '171, 71, 188'),
        (appearanceObj.imageSrc =
          'https://cdn1.iconfinder.com/data/icons/devops-cycle/256/devops_cycle_2_flat-128.png');
      break;
    }
    case CategoriesEnum.BLOCKCHAIN: {
      (appearanceObj.color = '161, 136, 127'),
        (appearanceObj.imageSrc = 'https://blockgeni.com/wp-content/uploads/2019/10/blockchain-42-913207.png');
      break;
    }
    case CategoriesEnum.PYTHON: {
      (appearanceObj.color = '174, 213, 129'),
        (appearanceObj.imageSrc = 'https://jaki-jezyk-programowania.pl/img/technologies/python.png');
      break;
    }
    case CategoriesEnum.HTML: {
      (appearanceObj.color = '255, 183, 77'),
        (appearanceObj.imageSrc = 'https://sekurak.pl/wp-content/uploads/2013/03/HTML5_Logo_256.png');
      break;
    }
    case CategoriesEnum.MOBILE: {
      (appearanceObj.color = '41, 121, 255'), (appearanceObj.imageSrc = '');
      break;
    }
    case CategoriesEnum.SCALA: {
      (appearanceObj.color = '239, 83, 80'), (appearanceObj.imageSrc = '');
      break;
    }
    case CategoriesEnum.PM: {
      (appearanceObj.color = '174, 213, 129'), (appearanceObj.imageSrc = '');
      break;
    }
    case CategoriesEnum.SAP: {
      (appearanceObj.color = '161, 136, 127'), (appearanceObj.imageSrc = '');
      break;
    }
    case CategoriesEnum.GO: {
      (appearanceObj.color = '171, 71, 188'), (appearanceObj.imageSrc = '');
      break;
    }
    case CategoriesEnum.SECURITY: {
      (appearanceObj.color = '183, 239, 80'), (appearanceObj.imageSrc = '');
      break;
    }
    case CategoriesEnum.GAME: {
      (appearanceObj.color = '171, 71, 188'), (appearanceObj.imageSrc = '');
      break;
    }
    case CategoriesEnum.OTHER:
    default:
      return appearanceObj;
  }
  return appearanceObj;
}

export interface ICategory {
  id: string | number;
  name: CategoriesEnum | string;
  imageSrc: string | null;
}

export interface ICategoryAppearance {
  color: string;
  imageSrc: string;
}

export enum CategoriesEnum {
  JAVA = 'java',
  NET = 'net',
  TESTING = 'testing',
  C = 'c',
  JAVASCRIPT = 'javascript',
  UX = 'ux',
  PHP = 'php',
  DATA = 'data',
  OTHER = 'other',
  RUBY = 'ruby',
  DEVOPS = 'devops',
  BLOCKCHAIN = 'blockchain',
  PYTHON = 'python',
  HTML = 'html',
  MOBILE = 'mobile',
  SCALA = 'scala',
  PM = 'pm',
  SAP = 'sap',
  GO = 'go',
  SECURITY = 'security',
  GAME = 'game',
}

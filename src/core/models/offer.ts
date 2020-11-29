import { ISkill } from './skill';

export interface IOffer {
  id: string;
  title: string;
  street: string;
  city: string;
  country_code: string;
  marker_icon: string;
  remote: boolean;
  experience_level: 'senior' | 'mid' | 'junior';
  salary_from: number;
  salary_to: number;
  salary_currency: string;
  latitude: number;
  longitude: number;
  employment_type: 'b2b' | 'permanent';
  published_at: string;
  company_name: string;
  company_url: string;
  company_size: string;
  company_logo_url: string;
  skills: ISkill[];
}

import { Url } from 'next/dist/shared/lib/router/router';

export interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href: Url;
}

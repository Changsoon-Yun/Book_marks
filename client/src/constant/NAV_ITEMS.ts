import { useUser } from '@/feature/auth/hooks/useUser';
import { COOKIE_NAME, getCookie } from '@/lib/cookie/cookie';
import { Url } from 'next/dist/shared/lib/router/router';

export interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href: Url;
}

const MENU_1 = 'menu-1';
const MENU_2 = 'menu-2';
export const NAV_ITEMS: { label: string; href?: Url; children: NavItem[] }[] = [
  {
    label: `${MENU_1}.title`,
    children: [
      {
        label: `${MENU_1}.label-1`,
        subLabel: `${MENU_1}.sub-1`,
        href: '/bookmark',
      },
      {
        label: `${MENU_1}.label-2`,
        subLabel: `${MENU_1}.sub-2`,
        href: '/bookmark/new',
      },
    ],
  },
];

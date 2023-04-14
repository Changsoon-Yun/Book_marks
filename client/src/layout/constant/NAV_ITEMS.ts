import { NavItem } from '@/types/NavItem';
import { Url } from 'next/dist/shared/lib/router/router';

const MENU_1 = 'menu-1';
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

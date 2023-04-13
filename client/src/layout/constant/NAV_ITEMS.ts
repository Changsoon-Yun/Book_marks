import { NavItem } from '@/types/NavItem';
import { Url } from 'next/dist/shared/lib/router/router';

export const NAV_ITEMS: { label: string; href?: Url; children: NavItem[] }[] = [
  {
    label: 'menu-1',
    children: [
      {
        label: 'menu-1-label-1',
        subLabel: 'menu-1-sub-1',
        href: '/bookmark',
      },
      {
        label: 'menu-1-label-2',
        subLabel: 'menu-1-sub-2',
        href: '/bookmark/new',
      },
    ],
  },
];

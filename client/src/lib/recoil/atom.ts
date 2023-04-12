import { UserWidthToken } from '@/feature/auth/hooks/useUser';
import { atom } from 'recoil';

export const userDataAtom = atom<UserWidthToken>({
  // next + recoil 사용시 atom key 관련 duplicated 문제가 있음
  key: `userDataAtom/${Math.random()}`,
  default: {
    id: 0,
    userName: '',
    accessToken: '',
  },
});

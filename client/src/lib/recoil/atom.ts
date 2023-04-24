import { UserWidthToken } from '@/feature/auth/hooks/useUser';
import { atom } from 'recoil';
import { Bookmark } from '@/types/api/Bookmark';
import { Folder } from '@/types/api/Folder';

export const userDataAtom = atom<UserWidthToken>({
  // next + recoil 사용시 atom key 관련 duplicated 문제가 있음
  key: `userDataAtom/${Math.random()}`,
  default: {
    id: 0,
    userName: '',
    accessToken: '',
  },
});

export const grabbedTargetAtom = atom<{ grabbedTarget: Bookmark | undefined }>({
  key: `grabbedTarget/${Math.random()}`,
  default: { grabbedTarget: undefined },
});

export const droppedTargetAtom = atom<{ droppedTarget: Folder | Bookmark | undefined }>({
  key: `droppedTarget/${Math.random()}`,
  default: { droppedTarget: undefined },
});

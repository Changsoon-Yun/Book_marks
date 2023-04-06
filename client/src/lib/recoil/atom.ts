import { atom } from 'recoil';

interface SnackBarType {
  open: boolean;
  text: string;
}

export const snackbarAtom = atom<SnackBarType>({
  // next + recoil 사용시 atom key 관련 duplicated 문제가 있음
  key: `snackbarAtom/${Math.random()}`,
  default: {
    open: false,
    text: '',
  },
});

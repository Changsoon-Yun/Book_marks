import {atom} from "recoil";
import {AlertColor} from "@mui/material"

interface SnackBarType {
  open: boolean,
  text: string,
  severity: AlertColor
}

export const snackbarAtom = atom<SnackBarType>({
  // next + recoil 사용시 atom key 관련 duplicated 문제가 있음
  key: `snackbarAtom/${Math.random()}`,
  default: {
    open: false,
    text: "",
    severity: "info"
  }
})
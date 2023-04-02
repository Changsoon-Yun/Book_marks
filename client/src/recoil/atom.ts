import {atom} from "recoil";
import {AlertColor} from "@mui/material"

interface SnackBarType {
  open: boolean,
  text: string,
  severity: AlertColor
}

export const snackbarAtom = atom<SnackBarType>({
  key: "snackbarAtom",
  default: {
    open: false,
    text: "",
    severity: "info"
  }
})
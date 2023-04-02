import {atom} from "recoil";
import {AlertColor} from "@mui/material"

interface SnackBarType {
  open: boolean,
  text: string,
  severity: AlertColor
}

export const snackbar = atom<SnackBarType>({
  key: "snackbar",
  default: {
    open: false,
    text: "",
    severity: "info"
  }
})
import { Alert, Button, Snackbar as SnackbarComponent } from "@mui/material";
import { useRecoilState } from "recoil";
import { snackbarAtom } from "@/lib/recoil/atom";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

export default function Snackbar() {
  const [{ open, text, severity }, setSnack] = useRecoilState(snackbarAtom);
  const onClose = () => {
    setSnack({ open: false, text: "", severity: "info" });
  };

  const action = (
    <>
      <Button color="secondary" size="small" onClick={onClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={onClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );
  return (
    <SnackbarComponent
      action={action}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      open={open}
      onClose={onClose}
      autoHideDuration={3000}
    >
      <Alert onClose={onClose} severity={severity}>
        {text}
      </Alert>
    </SnackbarComponent>
  );
}

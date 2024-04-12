import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
} from "@mui/material";
export const ModalRecibe = ({ open = false, handleClose }) => {
  return (
    <Dialog
      //   sx={{ backgroundImage: fondo }}
      open={open}
      // TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>{"Llena el campo a continuacion."}</DialogTitle>
      <DialogContent sx={{ textAlign: "center" }}>
        <TextField
          name="data"
          placeholder="ej: Se que necesito ayuda"
          variant="outlined"
          fullWidth
        />
      </DialogContent>
      <DialogActions sx={{ justifyContent: "center", alignItems: "center" }}>
        <Button
          color="primary"
          variant="contained"
          fullWidth
          onClick={handleClose}
        >
          Aceptar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

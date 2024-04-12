import { TrackChanges } from "@mui/icons-material";
import {
    Dialog,
    DialogTitle,
    DialogContent,
  } from "@mui/material";
export const DetailPlan = ({open, handleClose}) => {
  return (
    <Dialog
    fullWidth
    //   sx={{ backgroundImage: fondo }}
    open={open}
    // TransitionComponent={Transition}
    keepMounted
    onClose={handleClose}
    aria-describedby="alert-dialog-slide-description"
  >
    <DialogTitle
      sx={{
        ml:'10%',
          width:'80%',
        fontSizeAdjust: "initial",
        textAlign: "center",
        fontSize: "30px",
        boxShadow: "0px 0px 10px 0px black",
        mb: 2,
      }}
    >
      Exploracion de Emociones
    </DialogTitle>
    <DialogContent sx={{ textAlign: "center" }}>
  
      <h3>
        <TrackChanges fontSize="small" />
        A través de preguntas guiadas y un diario emocional integrado los usuarios puedan registrar sus experiencias emocionales identificar patrones y comprender mejor las raíces de sus sentimientos esta actividad fomenta la autoconciencia emocional proporcionando ayuda
      </h3>
    </DialogContent>
  
  </Dialog>
);
}

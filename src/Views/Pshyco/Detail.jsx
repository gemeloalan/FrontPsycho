import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Grid,
  Box,
  Button,
} from "@mui/material";
import img from "../../assets/xd.jpg";
import { SwipeRightAlt, TrackChanges } from "@mui/icons-material";
export const Detail = ({ open, handleClose }) => {
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
          fontSizeAdjust: "initial",
          textAlign: "center",
          fontSize: "30px",
          boxShadow: "0px 0px 10px 0px black",
          mb: 2,
        }}
      >
        Phsyco Profiler.
      </DialogTitle>
      <DialogContent sx={{ textAlign: "center" }}>
        <div>
                <img src={img} alt="NO esta" width={100}  />
        </div>
        <h3>
          <TrackChanges fontSize="small" />
          {"   "}
          Liberación de Version 1.0 : <br /> El contenido de ésta version esta
          implementada correctamente, se identificarán los primeros errores y
          discrepancias entre los datos.
        </h3>
      </DialogContent>
    
    </Dialog>
  );
};

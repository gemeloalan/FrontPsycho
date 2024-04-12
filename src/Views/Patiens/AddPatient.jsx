import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogActions,
  Button,
  TextField,
  DialogContent,
  Grid,
  InputAdornment
} from "@mui/material";
import { useForm } from "react-hook-form";
import { Scale } from "@mui/icons-material";
import GenderSelect from "./Select";
import { useState } from "react";
import { addPat } from "../../store/auth/patientSlice";
import { useDispatch } from "react-redux";
import { addPatient } from "../../store/auth/thunks";

export const AddPatient = ({ open, handleClose }) => {
  const dispatch = useDispatch();
  const [dato, setDato] = useState()
    const { register, handleSubmit, formState:{errors} } = useForm();
    const onSubmit = (data) => {
      data.genero = dato;
      data.status = 0;
      dispatch(addPatient(data,handleClose));
    }
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
      <DialogTitle sx={{ fontSizeAdjust:'initial',textAlign:'center',fontSize:'30px' }}>Agregar Paciente.</DialogTitle>
      <DialogContent sx={{ textAlign: "center" }}>
        <form onSubmit={handleSubmit(onSubmit)} noValidate >
            <Grid sx={{ mt:'10px' }} container spacing={2} justifyContent={'center'} alignItems={'center'}>
                <Grid item xs={12} xl={6} md={6}>
                    <TextField
                      name="name"
                      label="Nombre del paciente"
                      type="text"
                      placeholder="ej: Juanito Perez"
                      variant="outlined"
                      fullWidth
                      {...register("name", { required: true })}
                      error={!!errors?.name}
                      helperText={errors?.name?.message}
                    />
                </Grid>
                <Grid item xs={12} xl={6} md={6}>
                    <TextField
                      type="number"
                      label="Edad del paciente"
                      name="old"
                      placeholder="ej: Se que necesito ayuda"
                      variant="outlined"
                      fullWidth
                      {...register("old", { required: true })}
                      error={!!errors?.old}
                      helperText={errors?.old?.message}
                    />
                </Grid>
                <Grid item xs={12} xl={6} md={6}>
                    <TextField
                      type="number"
                      label="Altura del paciente"
                      name="tall"
                      placeholder="ej: Se que necesito ayuda"
                      variant="outlined"
                      fullWidth
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                           Cm
                          </InputAdornment>
                        ),
                      }}
                      {...register("tall", { required: true })}
                      error={!!errors?.old}
                      helperText={errors?.old?.message}
                    />
                </Grid>
                <Grid item xs={12} xl={6} md={6}>
                    <TextField
                      type="number"
                      label="Peso del paciente"
                      name="weigth"
                      placeholder="ej: 20"
                      variant="outlined"
                      fullWidth
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            < Scale/>Peso
                          </InputAdornment>
                        ),
                      }}
                      {...register("weigth", { required: true })}
                      error={!!errors?.old}
                      helperText={errors?.old?.message}
                    />
                </Grid>
                <Grid item xs={12} xl={6} md={6}>
              <GenderSelect setDato={setDato}/>
                </Grid>
            
            
                <Grid item xs={12} xl={6} md={6}>
                    <TextField
                      type="text"
                      label="Problemas Medicos"
                      name="problems"
                      placeholder="ej: Asma, epilepsia, etc"
                      variant="outlined"
                      fullWidth
                    error={!!errors?.problems}
                    helperText={errors?.problems?.message}
                      {...register("problems", { required: true })}
                    />
                </Grid>
            
            </Grid>
        <Button
        sx={{ mt: 2 }}
          color="primary"
          variant="contained"
          fullWidth
          type="submit"
        >
          Aceptar
        </Button>
        </form>
      </DialogContent>
      <DialogActions sx={{ justifyContent: "center", alignItems: "center" }}>
      </DialogActions>
    </Dialog>
  );
};

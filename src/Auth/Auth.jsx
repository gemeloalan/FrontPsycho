import { Button, Grid, TextField, Tooltip, Typography } from "@mui/material";
import React, { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Google, Visibility, VisibilityOff } from "@mui/icons-material";
import { AuthLayout } from "../Layouts/AuthLayouth";
import { checkingAuth } from "../store/auth/thunks";
import { Load } from "../Layouts/Load";
import { useNavigate } from 'react-router-dom';

export const Auth = () => {
  const { status,loading } = useSelector((state) => state.auth);
  const [eye, seteye] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    dispatch(checkingAuth(data,navigate));
  };
  if (loading)return <Load state={loading} />

  return (
    <AuthLayout title="Iniciar Sesion">
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Grid container spacing={2}>
          <Grid item xs={12} xl={12} md={12} sx={{ mt: 2 }}>
            <TextField
              {...register("email", {
                required: "El correo electronico es obligatorio",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Escribe un correo valido",
                },
              })}
              name="email"
              type="email"
              label="Correo Electronico"
              placeholder="alan@gmail.com"
              fullWidth
              error={errors.email}
              helperText={errors?.email?.message}
            />
          </Grid>
          <Grid item xs={12} xl={12} md={12} sx={{ mt: 2 }}>
            <TextField
              {...register("password", {
                required: "La contraseña es obligatoria",
                type: "text",
              })}
              name="password"
              type={!eye ? "text" : "password"}
              label="Contraseña"
              fullWidth
              error={errors.password}
              onClick={() => seteye(!eye)}
              InputProps={{
                endAdornment: (
                  <Tooltip
                    title={eye ? "Ocultar COntraseña" : "Mostrar COntra"}
                  >
                    <Button variant="text" size="small">
                      {eye ? <VisibilityOff /> : <Visibility />}
                    </Button>
                  </Tooltip>
                ),
              }}
              helperText={errors.password?.message}
            />
          </Grid>
          <Grid item sm={6} xs={12} xl={6}>
            <Button variant="contained" fullWidth type="submit">
              <Typography sx={{ ml: 1 }}>Login</Typography>
            </Button>
          </Grid>
          {/* <Grid item sm={6} xs={12} xl={6}>
            <Button
              variant="contained"
              fullWidth
              onClick={() => onGoogleSignIn()}
            >
              <Google />
              <Typography sx={{ ml: 1 }}>Google</Typography>
            </Button>
          </Grid> */}
          <Grid item>
            <Link to={"/auth/register"}>
              <Typography sx={{ ml: 1 }}>Crear Cuenta</Typography>
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};

import React from "react";
import { MainLayout } from "../Layouts/MainLayout";
import { useSelector } from "react-redux";
import { Grid ,Box,TextField,Button} from "@mui/material";
import persil from "../assets/persil.jpg";
export const Profile = () => {
  const { name,user } = useSelector((state) => state.auth);
  return (
    <MainLayout cont={0}>
      
      <Grid sx={{ margin:'5%' }} container spacing={2}>
        <Grid xs={12} xl={12} sx={{ justifyContent:'center',alignItems:'center' }} item >
        <h1 style={{ textAlign:'center' }}>Holaa {name??'Bienvenido'}</h1>
        <Box sx={{ textAlign:'center' }}><img src={persil} alt="ON esta" width={200} style={{ borderRadius:'50%', border: '5px solid black',float:'center' }}  /></Box>

        </Grid>
        <Grid item xs={6} xl={6}>
          <TextField
          name="email"
          placeholder="Cambia tu nombre"
          label='Nombre'
          defaultValue={name??''} 
          fullWidth/>
          </Grid>
          <Grid item xs={6} xl={6}>
          <TextField
          name="email"
          defaultValue={user?.email ?? ''} 
          placeholder="ej mago@gmail.com  "
          label='Correo Electronico'
          fullWidth/>
        </Grid>
          <Button sx={{ mt:5 }} fullWidth variant="outlined"> Actualizar Informacion</Button>
         </Grid>

    </MainLayout>
  );
};

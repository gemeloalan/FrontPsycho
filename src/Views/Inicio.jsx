import React from "react";
import { Grid, Button, Typography } from "@mui/material";
import tridente from "../assets/tridente.jpeg";
import fondo from "../assets/buur.jpeg";
import {useNavigate} from 'react-router-dom'

export const Inicio = () => {
    const navigate = useNavigate();
  return (
    <Grid
      container
      spacing={0}
      className="animate__bounce"
      direction={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      sx={{ minHeight: "100vh", backgroundImage: `url(${fondo})`, padding: 4 }}
    >
      <Grid
        item
        className="box-shadow animate__animated animate__zoomInDown"
        xl={12}
        xs={12}
        md={12}
        sx={{
          backgroundColor: "white",
          padding: 3,
          borderRadius: 2,
        }}
      >
        <div
          style={{
            textAlign: "center",
            boxShadow: "0px 5px 5px black",
            borderRadius: "20px",
          }}
        >
          <img src={tridente} width={"100"} alt="No sta"  />
        </div>
        <h1>Psycho Profile</h1>
        <hr />
        <h3>
          Descubre el alma a traves de datos PsychoProfiler, tu aliado psicologo
        </h3>
        <Typography
          variant="h5"
          sx={{ mb: 1, textAlign: "center" }}
        ></Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} xl={6} md={6}>
            <Button  onClick={()=>navigate('/login')} fullWidth variant="contained" sx={{ bgcolor:'lightblue', color:'black', '&:hover':{
                color:'white'
            }}}>
              Comencemos
            </Button>
          </Grid>
          <Grid item xs={12} xl={6} md={6} >
            <Button onClick={()=>navigate('/register')} fullWidth variant="contained" sx={{ bgcolor:'lightgreen', color:'black', '&:hover': {
          color: 'white', // Anular el cambio de color durante el hover
        } }}>
              Registrate
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

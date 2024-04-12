import React from "react";
import { Grid, Toolbar,Button} from "@mui/material";
import { WelCard } from "./WelCard";
import { useNavigate } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";
export const Welcome = () => {
    const navi = useNavigate()
  return (
    <Grid className="animate__zoomInDown" container sx={{ margin: "5%" }}>
      <Grid
        item
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Toolbar />
        <h1  className="animate__animated animate__headShake animate__infinite">Hola, para empezar realizaremos un test de diagnostico ♥</h1>
      <Button onClick={()=>navi(-1)}> 
        <ArrowBack />
      </Button>
      </Grid>
      <Grid item xs={12} xl={12}>
        <h4 style={{ color: "gren" }}>
          Nota: Los datos recopilados son seguros!!!
        </h4>
      </Grid>
   <WelCard color='red' text='  Cual es tu principal motivo para buscar apoyo psicologico en este
    momento' />
   <WelCard color='purple' text='En una Escala del 1-10, Como describirias tu nivel actual de bienestar emocional? (Escala:1-Muy abajo,10-Muy alto)' />
   <WelCard color='green' text='Hay situaciones especificas o desafios que te generen estres o ansiedad en tu vida diaria?' />
   <Button onClick={()=>navi('/profile')} sx={{ marginTop:'20px',marginRight:'5%' }} fullWidth variant="contained" color="primary"> Enviar Test</Button>
    </Grid>
  );
};

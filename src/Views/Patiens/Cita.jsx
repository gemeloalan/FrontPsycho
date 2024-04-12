import React, { useEffect } from "react";
import { MainLayout } from "../../Layouts/MainLayout";
// import { SelectPatient } from '../../components/selects/SelectPatient';
import { Grid,Select,InputLabel,FormControl,MenuItem,Button } from "@mui/material";
import { CardInit } from "../../Layouts/CardInit";
import { getPacientes } from "../../store/auth/thunks";
import {useDispatch,useSelector  } from "react-redux";
export const Cita = () => {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getPacientes());
    }, [])
    const {patient}=useSelector((state)=>state.patient)
    
 const handleChange=()=>{

 }
  return (
    <MainLayout>
      <CardInit title="Agendar Cita ">
        <Grid container spacing={3}>
          <Grid item xs={12} xl={12}>
          <FormControl variant="outlined" fullWidth>
      <InputLabel id="gender-label">Género</InputLabel>
      <Select
        labelId="gender-label"
        id="gender"
        // value={gender}
        onChange={handleChange}
        label="Género"
      >
        {patient.map((item, key) => (
          <MenuItem value={item.id}>
            {item.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
          </Grid>
          <Grid item xs={6} sm={6} md={3} lg={3} xl={3}>
            
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Button fullWidth variant='contained'>Guardar CIta</Button>
          </Grid>
        </Grid>
      </CardInit>
    </MainLayout>
  );
};

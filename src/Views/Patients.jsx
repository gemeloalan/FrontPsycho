import React, { useState } from "react";
import { MainLayout } from "../Layouts/MainLayout";
import { Grid, Table, TableRow, TableCell,TableContainer,TableHead,TableBody } from "@mui/material";
import { CardInit } from "../Layouts/CardInit";
import CardP from "./CardP";
import { AddPatient } from "./Patiens/AddPatient";
import { Add, Summarize } from "@mui/icons-material";
import { useSelector , useDispatch} from "react-redux";
import { useEffect } from "react";
import { getPacientes } from "../store/auth/thunks";
export const Patients = () => {
const { patient} = useSelector((state) => state.patient);
console.log(patient ?? 'rdytfuygiuoip')
const dispatch = useDispatch();
useEffect(() => {
 dispatch(getPacientes());
}, [])

    const [open, setOpen] = useState(false);
  return (
    <MainLayout cont={1}>
      <CardInit
        title="Mis Pacientees"
        icon={<Add />}
        open={() => setOpen(!open)}
      >
        <Grid
          sx={{ justifyContent: "center", alignItems: "center" }}
          container
          spacing={2}
        >
          <Grid item xs={12} xl={12}>
            <h2 style={{ textAlign: "center" }}>Historial Clinico</h2>
          </Grid>
          <Grid item xs>
            <TableContainer>
                <Table sx={{border:'1px solid gray'}}  aria-label="simple table">
                  <TableHead sx={{boxShadow:'0px 3px 3px black' }}>
                      <TableRow>
                        <TableCell>Nombre</TableCell>
                        <TableCell>Edad</TableCell>
                        <TableCell>Peso</TableCell>
                        <TableCell>Altura</TableCell>
                        <TableCell>Sexo</TableCell>
                      </TableRow>
                  </TableHead>
                  <TableBody>
                      {patient.map((item, key) => (
                        <TableRow key={key}>
                          <TableCell>{item.name}</TableCell>
                          <TableCell>{item.old} años</TableCell>
                          <TableCell>{item.weigth} kg</TableCell>
                          <TableCell>{item?.tall} cm</TableCell>
                          <TableCell>{item.genero==0?'Masculino': 'Femenino'}</TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
            </TableContainer>
            <CardP />
          </Grid>
          {/* <Grid item xs={12} xl={12}>
            <h2 style={{ textAlign: "center" }}>Mi Plan</h2>
          </Grid> */}
      
        </Grid>
      </CardInit>
      <AddPatient open={open} handleClose={() => setOpen(!open)} />
    </MainLayout>
  );
};

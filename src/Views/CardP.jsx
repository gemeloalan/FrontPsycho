import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import { Grid } from "@mui/material";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const data = [
  {
    xd: (
      <Item className="gradient" sx={{ color: "black" }}>
        Pacientes Depresion: 50
      </Item>
    ),
  },
  {
    xd: (
      <Item className="gradient" sx={{ color: "black" }}>
        Pacientes Ansiedad: 50
      </Item>
    ),
  },
  {
    xd: (
      <Item className="gradient" sx={{ color: "black" }}>
        Pacientes Estres: 50
      </Item>
    ),
  },
  {
    xd: (
      <Item className="gradient" sx={{ color: "black" }}>
        Total de Pacientes: 50
      </Item>
    ),
  },
];

export default function CardP() {
  return (
    <div>
      <Stack direction="row" spacing={2}>
        <Grid container spacing={2}>
                {data.map((item,key) => (
                    <Grid key={key} item xs={6} xl={12}>
                        {item.xd}
                    </Grid>
                ))
                }
        </Grid>
      </Stack>
    </div>
  );
}

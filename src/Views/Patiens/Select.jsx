import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { Male, Female } from '@mui/icons-material'; // Importa los iconos masculino y femenino

function GenderSelect({setDato}) {
  const [gender, setGender] = React.useState('');

  const handleChange = (event) => {
    setGender(event.target.value);
    setDato(event.target.value)
  };
  return (
    <FormControl variant="outlined" fullWidth>
      <InputLabel id="gender-label">Género</InputLabel>
      <Select
        labelId="gender-label"
        id="gender"
        value={gender}
        onChange={handleChange}
        label="Género"
      >
        <MenuItem value="">
          <em>Selecciona un género</em>
        </MenuItem>
        <MenuItem value={0}>
       Masculino
        </MenuItem>
        <MenuItem fontSize='small' value={1}>
      Femenino
        </MenuItem>
      </Select>
    </FormControl>
  );
}

export default GenderSelect;

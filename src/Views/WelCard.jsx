import React, { useState } from 'react'
import { Grid,Button } from "@mui/material";
import { QuestionAnswer } from '@mui/icons-material';
import { ModalRecibe } from './ModalRecibe';
export const WelCard = ({text,color}) => {
    const [open, setopen] = useState();
    const change = ()=>{
        setopen(!open)
    }
  return (
    <Grid
    width={"100%"}
    item
    sx={{
      borderRight: "6px solid black",
      borderLeft: "6px solid black",
      padding: "8px",
      marginTop: "3vh",
      bgcolor: color,
      marginRight: "5%",
      borderRadius: "5px",
      boxShadow:'0px 5px 5px black'
    }}
  >
    <Button onClick={()=>change()}>
        <QuestionAnswer />
    </Button>
  {text}
  <ModalRecibe open={open} handleClose={change} />
  </Grid>
  )
}

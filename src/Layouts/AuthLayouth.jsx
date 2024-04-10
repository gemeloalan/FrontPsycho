import { Person } from "@mui/icons-material"
import { Grid, IconButton, Typography } from "@mui/material"
import fondo from '../assets/buur.jpeg'

export const AuthLayout = ({ children, title = '',icon = <Person/> }) => {
  return (
    <Grid
      container
      spacing={0}
      className="animate__bounce"
      direction={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      sx={{ minHeight: "100vh", bgcolor:'white', padding: 4, }}
    >
      <Grid
        item
        className="box-shadow animate__animated animate__zoomInDown"
        xl={12}
        xs={12}
        md={12}
        sx={{width: {md:450}, 
          backgroundColor: "white", padding: 3, borderRadius: 2 , boxShadow: '0px 5px 5px black'}}
      >
        <IconButton size="medium" sx={{ mb: 1,float:'left', width: '30px',bgcolor: 'gray' }}>
          {icon}
          </IconButton>
        <Typography variant="h5" sx={{ mb: 1, textAlign: "center" }}>
          {title}
        </Typography>
        {children} 
      </Grid>
    </Grid>

  )
}
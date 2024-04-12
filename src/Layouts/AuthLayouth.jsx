import { Person } from "@mui/icons-material"
import { Grid, IconButton, Typography } from "@mui/material"
import img from '../assets/gray.jpg'
import logo from '../assets/xd.jpg'

export const AuthLayout = ({ children, title = '',icon = <Person/> }) => {
  return (
    <Grid
      container
      spacing={0}
      className="animate__bounce"
      direction={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      sx={{ minHeight: "100vh", bgcolor:'white', padding: 4, backgroundImage: `url(${img})`,backgroundSize:'cover'}}
    >
      <Grid
        item
        className="box-shadow animate__animated animate__zoomInDown"
        xl={12}
        xs={12}
        md={12}
        sx={{width: {md:450}, 
          bgcolor:'transparent', padding: 3, borderRadius: 2 , boxShadow: '0px 5px 5px black'}}
      >
        
        <div style={{ textAlign:'center',marginBottom:'30px',borderRadius:'20px' }}><img src={logo} alt="No esta" width={'100px'} /></div>

        <Typography variant="h5" sx={{ mb: 1, textAlign: "center" }}>
          {title}
        </Typography>
        {children} 
      </Grid>
    </Grid>

  )
}
import { Box, Grid, Toolbar } from "@mui/material";
import { useState } from "react";
import { UserSidebar } from "../Views/UserSidebar";
import { NavBar } from "../Views/NavBar";


export const MainLayout = ({ children }) => {
  const [sideB, setSideB] = useState(true);
  const toogleSide = () => {
    setSideB(!sideB);
  };
  return (
    <Box sx={{ display: "flex",
     backgroundImage: 'url(https://images.unsplash.com/photo-1591130690907-993056c57965?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YnVyYnVqYXMlMjBkZSUyMGFndWF8ZW58MHx8MHx8fDA%3D)' ,
     backgroundSize:'cover'
     }}>
      <NavBar  sideB={sideB} toogle={toogleSide} />

      <UserSidebar  sideB={sideB} toogle={toogleSide} />
      <Box
        component={"main"}
        sx={{
          flexGrow: 1,
          p: 3,
        }}
      >
        <Toolbar />
        <Grid
          container
         
          sx={{
            minHeight: "calc(100vh - 110px)",
            borderRadius: '20px',
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2), 0px 8px 16px rgba(0, 0, 0, 0.1)",
            
          }}
        >
          {children}
        </Grid>
      </Box>
    </Box>
  );
};

import { Box, Grid, Toolbar } from "@mui/material";
import { useState } from "react";
import { UserSidebar } from "../Views/UserSidebar";
import { NavBar } from "../Views/NavBar";
import img from "../assets/gray.jpg";

export const MainLayout = ({ children,cont }) => {
  const [sideB, setSideB] = useState(true);
  const toogleSide = () => {
    setSideB(!sideB);
  };
  return (
    <Box
      sx={{
        display: "flex",
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
      }}
    >
      <NavBar sideB={sideB} toogle={toogleSide} />

      <UserSidebar sideB={sideB} toogle={toogleSide} />
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
            className="animate__animated animate__flipInY animate__delay-1s gradient"
            sx={{
              minHeight: "calc(100vh - 110px)",
              borderRadius: "20px",
              boxShadow:
                "0px 5px 5px rgba(0, 0, 0, 0.2), 0px 8px 16px rgba(0, 0, 0, 0.1), 0px 5px 5px black",
              
            }}
          >
            {children}
          </Grid>
   
      </Box>
    </Box>
  );
};

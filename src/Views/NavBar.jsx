import {
  MenuOutlined,
  MoreVertOutlined,
  PointOfSale,
} from "@mui/icons-material";
import {
  AppBar,
  Grid,
  IconButton,
  Button,
  Toolbar,
  Tooltip,
  Popper,
  Fade,
  Paper,
  Typography,
} from "@mui/material";
import img from "../assets/nav.jpeg";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { logout } from "../store/auth/thunks";
import { useNavigate } from "react-router-dom";

export const NavBar = ({ drawerWidth = 240, sideB, toogle }) => {
  const [open, setopen] = useState({ state: false, anchor: null });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handle = (data) => (event) => {
    setopen({ state: !open.state, anchor: event.currentTarget });
  };
  return (
    <AppBar
      className="animate__animated animate__bounceInDown animate__backOutDown animate__heartBeat"
      position="fixed"
      sx={{
        zIndex: 1,
        maxHeight: "60px",
        // width: { sm: `calc(100% - ${sideB!==false?drawerWidth:0}px)` },
        // ml: { sm: `${drawerWidth}px` },
        backgroundImage: `url(${img})`,
      }}
    >
      <Toolbar>
        <Grid
          container
          justifyContent={"space-between"}
          alignItems={"center"}
          direction={"row"}
        >
          <Grid item xs={2} xl={2}>
            <Tooltip title="Mostrar Menu" arrow>
              <IconButton
                color="inherit"
                edge={"start"}
                onClick={() => {
                  toogle();
                }}
              >
                <MenuOutlined sx={{ color: "black" }} />
              </IconButton>
            </Tooltip>
          </Grid>
          <Grid
            sx={{ overflow: "hidden" }}
            className="animate__animated "
            item
            xs={6}
            xl={6}
          >
            <h2 className="scrolling-tex" style={{ color: "black" }}>
              PhsycoProfiler
            </h2>
          </Grid>
          <Grid
            sx={{ overflow: "hidden" }}
            className="animate__animated "
            item
            justifyContent={"end"}
            xs={2}
            xl={2}
          >
            <Button onClick={handle()} sx={{ float: "right" }}>
              <Popper
                // Note: The following zIndex style is specifically for documentation purposes and may not be necessary in your application.
                sx={{ zIndex: 1200 }}
                open={open.state}
                anchorEl={open.anchor}
                transition
              >
                {({ TransitionProps }) => (
                  <Fade {...TransitionProps}>
                    <Button
                      onClick={() => dispatch(logout(navigate))}
                      variant="contained"
                      fullWidth
                    >
                      Cerrar Sesion
                    </Button>
                  </Fade>
                )}
              </Popper>
              <MoreVertOutlined />
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

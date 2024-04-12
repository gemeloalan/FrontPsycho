import {
    AdminPanelSettings,
    CalendarMonth,
    DataArray,
    DocumentScanner,
    MapsHomeWork,
    Person,
    QrCode,
    QuestionAnswer,
    SecurityUpdateWarningSharp,
  } from "@mui/icons-material";
  import {

    Box,

  } from "@mui/material";
  import { Link } from "react-router-dom";
  import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import { useState } from "react";
import { Detail } from "./Pshyco/Detail";
  const menu = [
    {
      name: "Inicio",
      url: "/",
      icon: <SecurityUpdateWarningSharp />,
    },
    {
      name: "Padrinos",
      url: "/padrinos",
      icon: <AdminPanelSettings />,
    },
    {
      name: "Ubicaciones",
      url: "/Ubicaciones",
      icon: <MapsHomeWork />,
    },
    {
      name: "Acompañantes",
      url: "/helps",
      icon: <Person />,
    },
    {
      name: "Mi Mesa",
      url: "/mesa:id",
      icon: <Person />,
    },
  ];
  
  export const UserSidebar = ({  sideB, toogle }) => {
    const [open, setOpen] = useState(false);

    return (
      <Box component={"nav"}>
        <Sidebar
        //   image={xd}
          style={{ backgroundSize: "cover" }}
          toggled={!sideB}
          onBackdropClick={() => toogle()}
          breakPoint="always"
        >
          <Menu
            transitionDuration={1000}
            menuItemStyles={{
              button: {
                // the active class will be added automatically by react router
                // so we can use it to style the active menu item
                [`&.active`]: {
                  backgroundColor: "black",
                  color: "red",
                },
              },
            }}
          >
          
              <MenuItem
                icon={<DocumentScanner />}
                component={<Link to="/home" />}
              >
                Inicio
              </MenuItem>
              <MenuItem
                component={<Link to="/profile" />}
                icon={<CalendarMonth />}
                suffix={<span className="badge yellow">8</span>}
              >
                {" "}
                Perfil
              </MenuItem>
            <MenuItem icon={<QrCode />} component={<Link to="/pacientes" />}>
              {" "}
              Pacientes
            </MenuItem>
            <MenuItem icon={<QrCode />} component={<Link to="/cita" />}>
              {" "}
              Agendar Cita
            </MenuItem>
            <MenuItem icon={<QuestionAnswer />} component={<Link to="/welcome" />}>
              {" "}
              Mis Preguntas
            </MenuItem>
            <MenuItem icon={<DataArray />} onClick={()=>setOpen(!open)}>
              Acerca de PshycoProfiler
            </MenuItem>
          </Menu><Detail open={open} handleClose={()=>setOpen(!open)}/>
        </Sidebar>
  
      </Box>
    );
  };
  
import {
    AdminPanelSettings,
    CalendarMonth,
    DocumentScanner,
    MapsHomeWork,
    Person,
    QrCode,
    SecurityUpdateWarningSharp,
  } from "@mui/icons-material";
  import {

    Box,

  } from "@mui/material";
  import { Link } from "react-router-dom";
  import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
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
                component={<Link to="/" />}
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
          </Menu>
        </Sidebar>
  
      </Box>
    );
  };
  
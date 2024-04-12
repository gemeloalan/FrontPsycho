import { ArrowBack } from "@mui/icons-material";
import { Tooltip, IconButton } from "@mui/material";
import { Link } from "react-router-dom";

export const CardInit = ({
  children,
  title = "Hola",
  link,
  icon = <ArrowBack />,
  tooltip = "Regresar",
  open,
}) => {
  return (
    <div
      className="card animate__animated animate__backInDown gradient"
      style={{ borderRadius: "20px" }}
    >
      <div className="card-header ">
        <div className="card-header-title">
          <h2>{title}</h2>
        </div>
        <div className="card-actions">
          {link && (
            <Tooltip title={tooltip}>
              <Link to={link}>{icon}</Link>
            </Tooltip>
          )}
          {open && (
            <IconButton
              onClick={() => open()}
              title={tooltip}
            >
              {icon}
            </IconButton>
          )}
        </div>
      </div>
      <div className="card-body">{children}</div>
    </div>
  );
};

import React, { useState } from "react";
import SidebarComponent from "./sidebarComponent";
import dashboardIcon from "../assets/dashboardIcon.svg";
import settingsIcon from "../assets/settingsIcon.svg";
import logOutIcon from "../assets/logOutIcon.svg";
import scanIcon from "../assets/scanIcon.svg";
import calendarIcon from "../assets/calendarIcon.svg";
import { useNavigate } from "react-router-dom";

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState<string>("dashboard");

  const handleItemClick = (item: string) => {
    setActiveItem(item);
  };

  switch (activeItem) {
    case "dashboard":
      navigate("/dashboard");
      break;

    case "scan":
      navigate("/scan"); 
      break;
    case "transactions":
      navigate("/transactions");
      break;

    case "settings":
      navigate("/settings");
      break;

    case "logout":
      navigate("/");
      break;

    default:
      break;
  }

  return (
    <div className="w-33 h-full fixed top-[4.125rem] left-0 p-4 bg-black-white">
      <ul className="space-y-4 pt-8">
        <li>
          <SidebarComponent
            icon={dashboardIcon}
            isActive={activeItem === "dashboard"}
            onClick={() => handleItemClick("dashboard")}
          >
            Tablero
          </SidebarComponent>
        </li>
        <li>
          <SidebarComponent
            icon={scanIcon}
            isActive={activeItem === "scan"}
            onClick={() => handleItemClick("scan")}
          >
            Escanear Alimento
          </SidebarComponent>
        </li>
        <li>
          <SidebarComponent
            icon={calendarIcon}
            isActive={activeItem === "transactions"}
            onClick={() => handleItemClick("transactions")}
          >
            Consultar Fecha
          </SidebarComponent>
        </li>
        <li>
          <SidebarComponent
            icon={settingsIcon}
            isActive={activeItem === "settings"}
            onClick={() => handleItemClick("settings")}
          >
            Configuración
          </SidebarComponent>
        </li>
        <li>
          <SidebarComponent
            icon={logOutIcon}
            isActive={activeItem === "logout"}
            onClick={() => handleItemClick("logout")}
          >
            Cerrar Sesión
          </SidebarComponent>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

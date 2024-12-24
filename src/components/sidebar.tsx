import React, { useState } from "react";
import SidebarComponent from "./sidebarComponent";
import dashboardIcon from "../assets/dashboardIcon.svg";
import settingsIcon from "../assets/settingsIcon.svg";
import logOutIcon from "../assets/logOutIcon.svg";
import scanIcon from "../assets/scanIcon.svg";
import calendarIcon from "../assets/calendarIcon.svg";
import { useNavigation } from "../NavigationContext";

const Sidebar: React.FC = () => {
  const { activeItem, navigateTo } = useNavigation();

  return (
    <div className="w-33 h-full fixed top-[4.125rem] left-0 p-4 bg-black-white">
      <ul className="space-y-4 pt-8">
        <li>
          <SidebarComponent
            icon={dashboardIcon}
            isActive={activeItem === "dashboard"}
            onClick={() => navigateTo("dashboard")}
          >
            Tablero
          </SidebarComponent>
        </li>
        <li>
          <SidebarComponent
            icon={scanIcon}
            isActive={activeItem === "scan"}
            onClick={() => navigateTo("scan")}
          >
            Escanear Alimento
          </SidebarComponent>
        </li>
        <li>
          <SidebarComponent
            icon={calendarIcon}
            isActive={activeItem === "transactions"}
            onClick={() => navigateTo("transactions")}
          >
            Consultar Fecha
          </SidebarComponent>
        </li>
        <li>
          <SidebarComponent
            icon={settingsIcon}
            isActive={activeItem === "settings"}
            onClick={() => navigateTo("settings")}
          >
            Configuración
          </SidebarComponent>
        </li>
        <li>
          <SidebarComponent
            icon={logOutIcon}
            isActive={activeItem === "logout"}
            onClick={() => navigateTo("logout")}
          >
            Cerrar Sesión
          </SidebarComponent>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
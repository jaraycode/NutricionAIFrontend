import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

interface NavigationContextProps {
  activeItem: string;
  setActiveItem: (item: string) => void;
  navigateTo: (item: string) => void;
}

const NavigationContext = createContext<NavigationContextProps | undefined>(
  undefined
);

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState<string>("dashboard");

  const navigateTo = (item: string) => {
    setActiveItem(item);
    if (item === "logout") {
      setActiveItem("dashboard");
      navigate("/");
    } else {
      navigate(`/${item}`);
    }
  };

  return (
    <NavigationContext.Provider
      value={{ activeItem, setActiveItem, navigateTo }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error("useNavigation must be used within a NavigationProvider");
  }
  return context;
};

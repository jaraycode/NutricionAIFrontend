<<<<<<< HEAD
import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface NavigationContextProps {
  activeItem: string | null;
  setActiveItem: (item: string | null) => void;
  navigateTo: (item: string) => void;
}

const NavigationContext = createContext<NavigationContextProps | undefined>(
  undefined
);

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState<string | null>(
    localStorage.getItem("activeItem")
  );

  useEffect(() => {
    if (activeItem) {
      localStorage.setItem("activeItem", activeItem);
    } else {
      localStorage.removeItem("activeItem");
    }
  }, [activeItem]);

  const navigateTo = (item: string) => {
    if (item === "logout") {
      setActiveItem("dashboard");
      navigate("/");
    } else {
      setActiveItem(item);
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
=======
import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface NavigationContextProps {
  activeItem: string | null;
  setActiveItem: (item: string | null) => void;
  navigateTo: (item: string) => void;
}

const NavigationContext = createContext<NavigationContextProps | undefined>(
  undefined
);

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState<string | null>(
    localStorage.getItem("activeItem")
  );

  useEffect(() => {
    if (activeItem) {
      localStorage.setItem("activeItem", activeItem);
    } else {
      localStorage.removeItem("activeItem");
    }
  }, [activeItem]);

  const navigateTo = (item: string) => {
    if (item === "logout") {
      setActiveItem("dashboard");
      navigate("/");
    } else {
      setActiveItem(item);
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
>>>>>>> b17ff03f673c23440b81d6aab6c57b638a8f49a4

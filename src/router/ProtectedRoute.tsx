import React, {ReactNode} from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./useAuth";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute : React.FC<ProtectedRouteProps> = ({ children }) => {

    const { user } = useAuth();

  if (!user) {
    // Usuario no autenticado, redirigir a la página de inicio de sesión
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
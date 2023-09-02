import React from "react";
import { useNavigate } from "react-router-dom";

const Cerrarsesion = () => {
    const navigate = useNavigate(); 
    // Eliminar el token del almacenamiento local o de las cookies
    localStorage.removeItem("token");
    // Redirigir al usuario a la página de inicio
    navigate("/Home");
//   return <button onClick={handleLogout}>Cerrar sesión</button>;
};

export default Cerrarsesion;
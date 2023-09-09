import React from "react";
import { useNavigate } from "react-router-dom";

const Cerrarsesion = () => {
    const navigate = useNavigate(); 
    localStorage.removeItem("token");
    navigate("/");
};

export default Cerrarsesion;
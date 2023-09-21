import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBarHome from "../menu/NavBarHome";
import "../../assets/css/App.css";
import { useNavigate } from "react-router-dom";

const Logingreso = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [passwordShown, setPasswordShown] = useState(false);

  const MostrarPassword = () => {
    setPasswordShown(!passwordShown);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://proyectobf.onrender.com/login", {
        Email,
        Password,
      });
      console.log(response.data.usuario.TipoUsuario);
      if (response.data.token) {
        localStorage.setItem(
          "token",
          JSON.stringify({ token: response.data.token })
        );
        if (response.data.usuario.TipoUsuario==="ADMIN-ROLE") {
           navigate("/HomeAdmin");
        } else{
            navigate("/HomeUsu");
        }
       
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div className="container  bodyHome">
      <NavBarHome />
      {error && <p>{error}</p>}
      <div className="cardsesion">
        <img className="logosesion" src="/img/logo.png" alt="Logo empresa" />
        <form className="form" onSubmit={handleSubmit}>
          <input
            className="control"
            type="Email"
            id="Email"
            placeholder="Ingresar correo electronico"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="password">
            <input
              className="control"
              type={passwordShown ? "text" : "password"}
              id="Password"
              placeholder="Ingresar password"
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <buttom
              className="toggle"
              type="button"
              onClick={() => {
                MostrarPassword();
              }}
            ></buttom>
          </div>
          <button className="control" type="submit">
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Logingreso;
